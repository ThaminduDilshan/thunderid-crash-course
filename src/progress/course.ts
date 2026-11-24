import {usePluginData} from '@docusaurus/useGlobalData';
import {TRACKS, type Track, type TrackId} from '@site/src/data/tracks';
import {CHECKPOINTS} from '@site/src/data/checkpoints';
import type {OutlineDoc} from '@site/src/plugins/course-outline';
import type {Progress} from './store';

export type Module = {id: string; path: string; title: string};

export type TrackStatus = Track & {
  modules: Module[];
  doneCount: number;
  checkpointItems: number;
  checkpointTicked: number;
  /** Every module done and every checkpoint item ticked. */
  milestone: boolean;
};

const isCheckpoint = (id: string): boolean => id.endsWith('/checkpoint');

/** The modules of each track, in order. Checkpoint pages aren't modules. */
export function useCourseModules(): Record<TrackId, Module[]> {
  const {docs} = usePluginData('course-outline') as {docs: OutlineDoc[]};
  const byTrack = {} as Record<TrackId, Module[]>;
  for (const track of TRACKS) {
    byTrack[track.id] = docs
      .filter((d) => d.sidebar === track.id && !isCheckpoint(d.id))
      .map((d) => ({id: d.id, path: d.permalink, title: d.title}));
  }
  return byTrack;
}

export function isModule(docId: string, sidebar: string | undefined): boolean {
  return TRACKS.some((t) => t.id === sidebar) && !isCheckpoint(docId);
}

export function trackStatuses(modules: Record<TrackId, Module[]>, progress: Progress): TrackStatus[] {
  return TRACKS.map((track) => {
    const list = modules[track.id] ?? [];
    const doneCount = list.filter((m) => progress.done[m.id]).length;
    const checkpointItems = CHECKPOINTS[track.id].length;
    const checkpointTicked = (progress.checks[track.id] ?? []).slice(0, checkpointItems).filter(Boolean).length;
    return {
      ...track,
      modules: list,
      doneCount,
      checkpointItems,
      checkpointTicked,
      milestone: list.length > 0 && doneCount === list.length && checkpointTicked === checkpointItems,
    };
  });
}
