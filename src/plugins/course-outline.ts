import type {LoadContext, Plugin} from '@docusaurus/types';

// Publishes the course outline (every doc's id, title, permalink and sidebar, in file order) as global
// data, so the progress bar and progress page list modules without a hand-kept copy.

export type OutlineDoc = {id: string; title: string; permalink: string; sidebar?: string};

type LoadedDoc = {
  id: string;
  title: string;
  permalink: string;
  sidebar?: string;
  source: string;
};

type DocsContent = {loadedVersions: {docs: LoadedDoc[]}[]};

export default function courseOutline(_context: LoadContext): Plugin {
  return {
    name: 'course-outline',
    async allContentLoaded({allContent, actions}) {
      const docsPlugin = allContent['docusaurus-plugin-content-docs'] as Record<string, DocsContent> | undefined;
      const version = docsPlugin?.default?.loadedVersions?.[0];
      const docs: OutlineDoc[] = (version?.docs ?? [])
        .slice()
        .sort((a, b) => a.source.localeCompare(b.source))
        .map(({id, title, permalink, sidebar}) => ({id, title, permalink, sidebar}));
      actions.setGlobalData({docs});
    },
  };
}
