import type {ReactNode} from 'react';

/** Renders a plain string, turning `backticked` spans into inline code. */
export default function InlineText({text}: {text: string}): ReactNode {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') ? <code key={i}>{part.slice(1, -1)}</code> : <span key={i}>{part}</span>,
  );
}
