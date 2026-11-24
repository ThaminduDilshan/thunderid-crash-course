import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {trackStatuses, useCourseModules} from '@site/src/progress/course';
import {useProgress} from '@site/src/progress/store';

import styles from './progress.module.css';

export default function ProgressPage(): ReactNode {
  const modules = useCourseModules();
  const {progress, ready, setDone, reset} = useProgress();
  const tracks = trackStatuses(modules, progress);
  const total = tracks.reduce((n, t) => n + t.modules.length, 0);
  const done = tracks.reduce((n, t) => n + t.doneCount, 0);
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <Layout title="My progress" description="Your progress through the ThunderID Crash Course.">
      <main className="container margin-vert--xl">
        <Heading as="h1">📈 My progress</Heading>
        <p className={styles.lead}>
          {ready ? `${done} of ${total} modules complete (${pct}%).` : 'Loading your progress…'} Progress is saved in
          this browser only. A different browser or a private window starts fresh.
        </p>
        <div className={styles.overall} aria-hidden="true">
          <span style={{width: `${ready ? pct : 0}%`}} />
        </div>

        <div className={styles.tracks}>
          {tracks.map((t) => (
            <section key={t.id} className={`${styles.track} ${t.milestone ? styles.reached : ''}`}>
              <header className={styles.trackHeader}>
                <span className={styles.trackIcon}>{t.icon}</span>
                <div>
                  <Heading as="h2" className={styles.trackTitle}>
                    <Link to={`/docs/${t.id}`}>{t.title}</Link>
                  </Heading>
                  <span className={styles.trackMeta}>
                    {t.doneCount}/{t.modules.length} modules · checkpoint {t.checkpointTicked}/{t.checkpointItems}
                    {t.milestone ? ' · 🏁 milestone reached' : ''}
                  </span>
                </div>
              </header>
              <ul className={styles.modules}>
                {t.modules.map((m) => {
                  const isDone = Boolean(progress.done[m.id]);
                  return (
                    <li key={m.id}>
                      <label className={styles.module}>
                        <input type="checkbox" checked={isDone} disabled={!ready} onChange={(e) => setDone(m.id, e.target.checked)} />
                        <Link to={m.path}>{m.title}</Link>
                      </label>
                    </li>
                  );
                })}
                <li>
                  <Link to={`/docs/${t.id}/checkpoint`} className={styles.checkpointLink}>
                    ✅ Checkpoint
                  </Link>
                </li>
              </ul>
            </section>
          ))}
        </div>

        <button
          type="button"
          className="button button--outline button--danger margin-top--lg"
          disabled={!ready || done + tracks.reduce((n, t) => n + t.checkpointTicked, 0) === 0}
          onClick={() => {
            if (window.confirm('Clear all progress saved in this browser?')) {
              reset();
            }
          }}>
          Reset progress
        </button>
      </main>
    </Layout>
  );
}
