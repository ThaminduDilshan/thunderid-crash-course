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
    audience: 'Everyone, no IAM background needed',
    outcome: 'IAM basics, running ThunderID, users, applications, flows and agents. Finish with your own app signing people in.',
    to: '/docs/next/beginner',
  },
  {
    icon: '🛠️',
    name: 'Intermediate',
    modules: 'Modules 8 to 14',
    audience: 'Everyone',
    outcome: 'Build Wayfinder for real: access rules, journeys, social sign-in, three ways to sign in, organizations and MCP.',
    to: '/docs/next/intermediate',
  },
  {
    icon: '🚀',
    name: 'Advanced',
    modules: 'Modules 15 to 20',
    audience: 'App builders and operators',
    outcome: 'B2B organizations, the protocol catalogue, verifiable credentials, configuration as code and the control plane.',
    to: '/docs/next/advanced',
  },
  {
    icon: '🎓',
    name: 'Expert',
    modules: 'Modules 21 to 26',
    audience: 'Anyone who wants to know how ThunderID works inside',
    outcome: 'The architecture, entities and entity types, caching, providers, the flow engine and the embeddable engine.',
    to: '/docs/next/expert',
  },
];

const HIGHLIGHTS = [
  {icon: '🧪', title: 'Hands-on from the start', text: 'Run ThunderID in Lab 0, then poke every concept with curl, the consoles and the code.'},
  {icon: '🧭', title: 'One storyline', text: 'Build the identity layer of Wayfinder, a sample travel app, one piece per module.'},
  {icon: '📈', title: 'Track your progress', text: 'Mark modules complete, tick each checkpoint and watch the milestones fill in. Saved in your browser.'},
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
          <Link className="button button--primary button--lg" to="/docs/next/intro">
            Start the course →
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/next/beginner/lab-0">
            Jump to Lab 0
          </Link>
        </div>
        <p className={styles.meta}>26 modules · 4 tracks · progress saved in your browser · built against ThunderID main</p>
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
        <p className={styles.sectionLead}>Take the tracks in order. Everyone takes Beginner and Intermediate. Advanced and Expert go as deep as you need.</p>
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
