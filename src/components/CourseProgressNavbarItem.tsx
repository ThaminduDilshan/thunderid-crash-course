import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {trackStatuses, useCourseModules} from '@site/src/progress/course';
import {useProgress} from '@site/src/progress/store';

/**
 * A compact progress pill for the navbar: one bar for the whole course and a module count. On hover or
 * keyboard focus, a panel below it shows each track's progress and milestone.
 */
export default function CourseProgressNavbarItem({mobile}: {mobile?: boolean}): ReactNode {
  const modules = useCourseModules();
  const {progress, ready} = useProgress();
  const tracks = trackStatuses(modules, progress);
  const total = tracks.reduce((n, t) => n + t.modules.length, 0);
  const done = ready ? tracks.reduce((n, t) => n + t.doneCount, 0) : 0;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const label = `Course progress: ${done} of ${total} modules complete`;

  const pill = (
    <Link
      to="/progress"
      className={mobile ? 'menu__link course-progress__pill' : 'course-progress__pill'}
      aria-label={label}
      title={`${label}. Saved in this browser only.`}>
      <span aria-hidden="true">📈</span>
      <span className="course-progress__bar" aria-hidden="true">
        <span className="course-progress__fill" style={{width: `${pct}%`}} />
      </span>
      <span className="course-progress__count">
        {done}/{total}
      </span>
    </Link>
  );

  if (mobile) {
    return pill;
  }

  return (
    <div className="navbar__item course-progress">
      {pill}
      <div className="course-progress__panel">
        <div className="course-progress__card">
          <ul className="course-progress__tracks" aria-label="Progress by track">
            {tracks.map((t) => {
              const trackDone = ready ? t.doneCount : 0;
              const trackPct = t.modules.length ? Math.round((trackDone / t.modules.length) * 100) : 0;
              const reached = ready && t.milestone;
              return (
                <li key={t.id} className="course-progress__track">
                  <span aria-hidden="true">{t.icon}</span>
                  <Link to={`/docs/next/${t.id}`} className="course-progress__track-name">
                    {t.title}
                  </Link>
                  <span className="course-progress__bar" aria-hidden="true">
                    <span className="course-progress__fill" style={{width: `${trackPct}%`}} />
                  </span>
                  <span className="course-progress__count">
                    {trackDone}/{t.modules.length}
                  </span>
                  <span
                    className={`course-progress__milestone ${reached ? 'is-reached' : ''}`}
                    title={reached ? 'Milestone reached' : 'Milestone not reached yet'}>
                    🏁
                  </span>
                </li>
              );
            })}
          </ul>
          <Link to="/progress" className="course-progress__open">
            Open My progress →
          </Link>
        </div>
      </div>
    </div>
  );
}
