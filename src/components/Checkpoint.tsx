import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {CHECKPOINTS} from '@site/src/data/checkpoints';
import {TRACKS, type TrackId} from '@site/src/data/tracks';
import {useProgress} from '@site/src/progress/store';
import InlineText from './InlineText';

/** A track's checkpoint list. Ticks are kept in this browser. */
export default function Checkpoint({track}: {track: TrackId}): ReactNode {
  const items = CHECKPOINTS[track];
  const {progress, ready, setCheck} = useProgress();
  const ticks = items.map((_, i) => Boolean(progress.checks[track]?.[i]));
  const all = ready && ticks.every(Boolean);
  const meta = TRACKS.find((t) => t.id === track);

  return (
    <div className={`checkpoint ${all ? 'checkpoint--done' : ''}`}>
      <ul className="checkpoint__list">
        {items.map((item, i) => (
          <li key={item}>
            <label className="checkpoint__item">
              <input
                type="checkbox"
                checked={ticks[i]}
                disabled={!ready}
                onChange={(e) => setCheck(track, i, items.length, e.target.checked)}
              />
              <span>
                <InlineText text={item} />
              </span>
            </label>
          </li>
        ))}
      </ul>
      {all && (
        <p className="checkpoint__done">
          {meta?.icon} Checkpoint passed. See your milestones on <Link to="/progress">My progress</Link>.
        </p>
      )}
    </div>
  );
}
