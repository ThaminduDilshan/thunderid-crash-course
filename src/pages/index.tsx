import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Track = {
  icon: string;
  name: string;
  modules: string;
  audience: string;
  outcome: string;
  to: string;
};

const TRACKS: Track[] = [
  {
    icon: '🌱',
    name: 'Beginner',
    modules: 'Modules 1 to 7',
    audience: 'Everyone',
    outcome: 'IAM basics, organization units, identities, access and user journeys. Get ThunderID running locally.',
    to: '/docs/beginner',
  },
  {
    icon: '🛠️',
    name: 'Intermediate',
    modules: 'Modules 8 to 12',
    audience: 'Everyone',
    outcome: 'Register apps and agents, sign people in three different ways, and wire in identity providers and SDKs.',
    to: '/docs/intermediate',
  },
  {
    icon: '🚀',
    name: 'Advanced',
    modules: 'Modules 13 to 17',
    audience: 'App builders and operators',
    outcome: 'The protocol catalogue, verifiable credentials, GitOps-style configuration and the control plane.',
    to: '/docs/advanced',
  },
  {
    icon: '🧑‍💻',
    name: 'Contributor track',
    modules: 'Modules 18 to 22',
    audience: 'Anyone changing ThunderID',
    outcome: 'Find your way around the code, run and debug it from source, and get a pull request merged.',
    to: '/docs/contributor',
  },
];

const HIGHLIGHTS = [
  {icon: '🧪', title: 'Hands-on from the start', text: 'Run ThunderID in Lab 0, then poke every concept with curl, the consoles and the code.'},
  {icon: '🧭', title: 'One storyline', text: 'Build the identity layer of Wayfinder, a sample travel app, one piece per module.'},
  {icon: '✅', title: 'Checkpoints', text: 'Each level ends with a short list of what you should be able to do before moving on.'},
];

function Hero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>⚡ ThunderID Crash Course</p>
        <Heading as="h1" className={styles.title}>
          Learn ThunderID by running it
        </Heading>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Start the course →
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/beginner/lab-0">
            Jump to Lab 0
          </Link>
        </div>
        <p className={styles.meta}>22 modules · 4 tracks · targets ThunderID 2.0 (main)</p>
      </div>
    </header>
  );
}

function Tracks(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Pick up where you are
        </Heading>
        <p className={styles.sectionLead}>Everyone takes Beginner and Intermediate. Then choose Advanced, the Contributor track, or both.</p>
        <div className={styles.grid}>
          {TRACKS.map((t) => (
            <Link key={t.name} to={t.to} className={styles.card}>
              <span className={styles.cardIcon}>{t.icon}</span>
              <span className={styles.cardName}>{t.name}</span>
              <span className={styles.cardMeta}>
                {t.modules} · {t.audience}
              </span>
              <span className={styles.cardText}>{t.outcome}</span>
              <span className={styles.cardCta}>Open track →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.highlights}>
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className={styles.highlight}>
              <span className={styles.highlightIcon}>{h.icon}</span>
              <Heading as="h3">{h.title}</Heading>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Learn ThunderID by running it" description="A hands-on crash course for ThunderID, from IAM basics to the code that runs it.">
      <Hero />
      <main>
        <Tracks />
        <Highlights />
      </main>
    </Layout>
  );
}
