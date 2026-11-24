# ⚡ ThunderID Crash Course

A hands-on crash course for [ThunderID](https://github.com/thunder-id/thunderid), from IAM basics to the code that runs it.

> A community course. It isn't the official ThunderID documentation. The [ThunderID docs](https://thunderid.dev/docs/next/) stay the reference.

## What's inside

| Track | Modules | For |
| --- | --- | --- |
| 🌱 Beginner | 1 to 7: IAM basics, organization units, entities, authorization, flows | Everyone |
| 🛠️ Intermediate | 8 to 12: applications, three ways to sign in, connections, agents, SDKs | Everyone |
| 🚀 Advanced | 13 to 17: protocols, verifiable credentials, declarative config, control plane | App builders and operators |
| 🧑‍💻 Contributor track | 18 to 22: architecture, providers, flow engine, dev setup, how work gets done | Anyone changing ThunderID |

The course targets ThunderID 2.0 (`main`). Features that don't exist in the 1.x releases are marked **2.0**.

## Run the site locally

```bash
npm install
npm start
```

The site opens at http://localhost:3000. `npm run build` produces the static site in `build/`.

## Project layout

- `docs/intro.mdx`: the welcome page
- `docs/<track>/`: one folder per track, one page per module, and a checkpoint page at the end. `_category_.json` sets each track's label, order and index page.
- `docs/glossary.mdx`, `docs/whats-next.mdx`
- `src/pages/index.tsx`: the landing page
- `src/components/V2.tsx`: the **2.0** badge, available in every page as `<V2 />`

## Deploy

The site is a static Docusaurus build. On Vercel, import the repository and keep the detected Docusaurus settings (build command `npm run build`, output directory `build`).

## Contributing

Found something wrong or out of date? Open an issue or a pull request. Every claim about ThunderID behaviour should be checked against the code on `main` or the official docs.

## License

Licensed under the [Apache License 2.0](LICENSE).
