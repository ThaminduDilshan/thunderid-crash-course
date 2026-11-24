import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repo = 'https://github.com/ThaminduDilshan/thunderid-crash-course';

const config: Config = {
  title: 'ThunderID Crash Course',
  tagline: 'A hands-on crash course, from IAM basics to the code that runs it.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://thunderid-crash-course.vercel.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  plugins: ['./src/plugins/course-outline.ts'],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repo}/tree/main/`,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '⚡\u2002ThunderID Crash Course',
      items: [
        {type: 'docSidebar', sidebarId: 'course', position: 'left', label: 'Start here'},
        {type: 'docSidebar', sidebarId: 'beginner', position: 'left', label: 'Beginner'},
        {type: 'docSidebar', sidebarId: 'intermediate', position: 'left', label: 'Intermediate'},
        {type: 'docSidebar', sidebarId: 'advanced', position: 'left', label: 'Advanced'},
        {type: 'docSidebar', sidebarId: 'contributor', position: 'left', label: 'Contributor'},
        {type: 'custom-courseProgress', position: 'right'},
        {href: repo, label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {label: 'Welcome', to: '/docs/intro'},
            {label: 'Lab 0: run ThunderID', to: '/docs/beginner/lab-0'},
            {label: 'Glossary', to: '/docs/glossary'},
          ],
        },
        {
          title: 'ThunderID',
          items: [
            {label: 'Documentation', href: 'https://thunderid.dev/docs/next/'},
            {label: 'Source code', href: 'https://github.com/thunder-id/thunderid'},
            {label: 'Discord (#thunderid-dev)', href: 'https://discord.lfdecentralizedtrust.org/'},
          ],
        },
        {
          title: 'This course',
          items: [
            {label: 'Repository', href: repo},
            {label: 'Report an issue', href: `${repo}/issues`},
          ],
        },
      ],
      copyright: 'A community course. Not the official ThunderID documentation.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'go'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
