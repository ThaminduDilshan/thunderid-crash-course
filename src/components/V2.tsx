import type {ReactNode} from 'react';

/** Marks a feature that exists only on the 2.0 line. */
export default function V2(): ReactNode {
  return (
    <span className="badge-v2" title="Only on the 2.0 line (main), not in the 1.x releases">
      2.0
    </span>
  );
}
