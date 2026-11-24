// The course tracks, in order. Shared by the sidebars (Node) and the progress UI (browser), so it
// holds plain data only.

export type TrackId = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type Track = {
  id: TrackId;
  icon: string;
  title: string;
  description: string;
};

export const TRACKS: Track[] = [
  {
    id: 'beginner',
    icon: '🌱',
    title: 'Beginner',
    description: 'The basics: IAM, running ThunderID, users, applications, flows and agents. Ends with your own app signing people in.',
  },
  {
    id: 'intermediate',
    icon: '🛠️',
    title: 'Intermediate',
    description: 'Build Wayfinder for real: access rules, journeys, social sign-in, the three ways to sign in, organizations, SDKs and MCP.',
  },
  {
    id: 'advanced',
    icon: '🚀',
    title: 'Advanced',
    description:
      'Operate and extend: B2B organizations, the protocol catalogue, verifiable credentials, configuration as code and the control plane.',
  },
  {
    id: 'expert',
    icon: '🎓',
    title: 'Expert',
    description: 'How ThunderID works inside: the architecture, entities and entity types, caching, providers, the flow engine and the embeddable engine.',
  },
];
