# ⚡ ThunderID Crash Course

A hands-on crash course for [ThunderID](https://github.com/thunder-id/thunderid), from IAM basics to the code that runs it.

> A community course. It isn't the official ThunderID documentation. The [ThunderID docs](https://thunderid.dev/docs/next/) stay the reference.

## What's inside

| Track | Modules | For |
| --- | --- | --- |
| 🌱 Beginner | 1 to 7: IAM basics, run ThunderID, users, applications, flows, agents | Everyone |
| 🛠️ Intermediate | 8 to 14: authorization, journeys, connections, three ways to sign in, organization units, SDKs, MCP | Everyone |
| 🚀 Advanced | 15 to 20: B2B, OAuth and OIDC, verifiable credentials, declarative config, control plane | App builders and operators |
| 🧑‍💻 Contributor track | 21 to 25: architecture, providers, flow engine, dev setup, how work gets done | Anyone changing ThunderID |

The course is versioned like the ThunderID docs. **Next** (`/docs/next`) is built and tested against a pack built from `main`. Courses for the 1.x releases will be added as separate versions.

## Run the site locally

```bash
npm install
npm start
```

The site opens at http://localhost:3000. `npm run build` produces the static site in `build/`.

## Project layout

- `docs/intro.mdx`: the welcome page
- `docs/<track>/`: one folder per track, one page per module, and a checkpoint page at the end. `sidebars.ts` gives each track its own sidebar.
- `src/data/`: the tracks and the checkpoint items
- `src/progress/`, `src/components/`: the progress bar, the checkpoints and the "Mark as complete" button. Progress is kept in the browser's `localStorage`.
- `docs/glossary.mdx`, `docs/whats-next.mdx`
- `src/pages/index.tsx`: the landing page

## Deploy

The site is a static Docusaurus build. On Vercel, import the repository and keep the detected Docusaurus settings (build command `npm run build`, output directory `build`).

## Contributing

Found something wrong or out of date? Open an issue or a pull request. Every claim about ThunderID behaviour should be checked against the code on `main` or the official docs.

## License

Licensed under the [Apache License 2.0](LICENSE).
