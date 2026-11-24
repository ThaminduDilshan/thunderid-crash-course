import {useCallback, useEffect, useState} from 'react';

// Course progress lives in this browser's localStorage only. Another browser, a private window or
// cleared site data starts from zero. Every read and write is guarded, so the site still works when
// storage is unavailable.

const KEY = 'thunderid-crash-course:progress:v1';
const EVENT = 'thunderid-crash-course:progress';

export type Progress = {
  /** Doc ids of the modules marked complete. */
  done: Record<string, boolean>;
  /** Ticked checkpoint items, per track, by item index. */
  checks: Record<string, boolean[]>;
};

const EMPTY: Progress = {done: {}, checks: {}};

function read(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) {
      return EMPTY;
    }
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {done: parsed.done ?? {}, checks: parsed.checks ?? {}};
  } catch {
    return EMPTY;
  }
}

function write(next: Progress): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Storage is full or blocked: progress just isn't kept.
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Current progress, kept in sync across components and tabs. Empty during server rendering. */
export function useProgress(): {
  progress: Progress;
  ready: boolean;
  setDone: (docId: string, value: boolean) => void;
  setCheck: (track: string, index: number, count: number, value: boolean) => void;
  reset: () => void;
} {
  const [progress, setProgress] = useState<Progress>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setProgress(read());
    sync();
    setReady(true);
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const setDone = useCallback((docId: string, value: boolean) => {
    const current = read();
    const done = {...current.done};
    if (value) {
      done[docId] = true;
    } else {
      delete done[docId];
    }
    write({...current, done});
  }, []);

  const setCheck = useCallback((track: string, index: number, count: number, value: boolean) => {
    const current = read();
    const list = Array.from({length: count}, (_, i) => Boolean(current.checks[track]?.[i]));
    list[index] = value;
    write({...current, checks: {...current.checks, [track]: list}});
  }, []);

  const reset = useCallback(() => write(EMPTY), []);

  return {progress, ready, setDone, setCheck, reset};
}
