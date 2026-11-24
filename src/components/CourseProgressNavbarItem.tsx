import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {trackStatuses, useCourseModules} from '@site/src/progress/course';
import {useProgress} from '@site/src/progress/store';

/**
 * A compact progress bar for the navbar: one segment per track, sized by its module count, with a
 * milestone marker that lights up when the track's modules and checkpoint are done.
 */
export default function CourseProgressNavbarItem({mobile}: {mobile?: boolean}): ReactNode {
  const modules = useCourseModules();
  const {progress, ready} = useProgress();
  const tracks = trackStatuses(modules, progress);
  const total = tracks.reduce((n, t) => n + t.modules.length, 0);
  const done = tracks.reduce((n, t) => n + t.doneCount, 0);
  const label = `Course progress: ${done} of ${total} modules complete`;

  return (
    <Link
      to="/progress"
      className={mobile ? 'menu__link course-progress course-progress--mobile' : 'navbar__item course-progress'}
      aria-label={label}
      title={`${label}. Saved in this browser only.`}>
      <span className="course-progress__bar" aria-hidden="true">
        {tracks.map((t) => (
          <span key={t.id} className="course-progress__segment" style={{flexGrow: Math.max(t.modules.length, 1)}}>
            <span
              className="course-progress__fill"
              style={{width: ready && t.modules.length ? `${(t.doneCount / t.modules.length) * 100}%` : '0%'}}
            />
            <span className={`course-progress__milestone ${t.milestone ? 'is-reached' : ''}`}>{t.icon}</span>
          </span>
        ))}
      </span>
      <span className="course-progress__count">
        {ready ? done : 0}/{total}
      </span>
    </Link>
  );
}
