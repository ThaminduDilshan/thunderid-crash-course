import type {ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {isModule} from '@site/src/progress/course';
import {useProgress} from '@site/src/progress/store';

type Props = WrapperProps<typeof FooterType>;

function MarkComplete({docId}: {docId: string}): ReactNode {
  const {progress, ready, setDone} = useProgress();
  const done = Boolean(progress.done[docId]);
  return (
    <div className={`mark-complete ${done ? 'mark-complete--done' : ''}`}>
      <div>
        <strong>{done ? 'Module complete' : 'Finished this module?'}</strong>
        <span className="mark-complete__hint">Progress is saved in this browser only.</span>
      </div>
      <button
        type="button"
        className={`button ${done ? 'button--secondary' : 'button--primary'}`}
        disabled={!ready}
        onClick={() => setDone(docId, !done)}>
        {done ? '✓ Completed (undo)' : 'Mark as complete'}
      </button>
    </div>
  );
}

export default function FooterWrapper(props: Props): ReactNode {
  const {metadata} = useDoc();
  return (
    <>
      {isModule(metadata.id, metadata.sidebar ?? undefined) && <MarkComplete docId={metadata.id} />}
      <Footer {...props} />
    </>
  );
}
