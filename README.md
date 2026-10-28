# Dynamic Island · download portal

Public Windows download page: **https://egoist-exe.github.io/Dynamic-Island-Index/**

A static, dependency-free landing page with an animated Island header, interactive music / focus / file-shelf previews, three demo materials, English and German, installation information and [Ko-fi support](https://ko-fi.com/eegoist).

## Development

Node.js is needed only for the local development helpers:

```sh
npm run dev
npm run check
npm run build
```

The local preview is served at `http://127.0.0.1:47872`. `build` copies the deployable page and assets to ignored `dist/`. GitHub Pages publishes the same static source files from **main → / (root)** with `.nojekyll`; no framework, package installation, backend or API keys are required.

## Windows releases

Public installers are hosted as Releases in **this public repository**. The application source repository is separate. The page uses the latest release API for version and file size, with static direct-download links as a fallback.

Release assets should retain these names:

- `Dynamic-Island-Setup-x64.exe` — complete, self-contained Windows installer.
- `Dynamic-Island-x64.msix` — advanced package installation.
- `SHA256SUMS.txt` — SHA-256 checksums.

For future versions, publish the new installers with the same asset names in a new latest release. Update the HTML fallback version, size and checksums when appropriate. The installer uses a development signing certificate; the page and release notes disclose the certificate consent needed for installation. No installation is triggered automatically by visiting the website.

## Page behavior and assets

- The Island header opens with pointer hover, keyboard activation or a tap; Escape closes it.
- Demo controls are illustrative and local. They do not connect accounts, play audio or read visitor files.
- Demo widget tabs support arrow keys, Home and End. Reduced-motion preferences disable decorative animation.
- English is the default. Language selection is saved in local storage and can be shared with `?lang=de` / `?lang=en`.
- Supplied EGOIST artwork is reused in `assets/brand.png` and the app favicon. `assets/social-preview.png` is a rendered social-sharing preview.
- No analytics, tracking scripts, external font service or login is included. GitHub hosts the page, release metadata and downloads; external community and donation links lead to their respective services.
- The page accurately describes the current limits of Discord DM discovery and incoming-call detection.

Browser QA covered English/German, 320 / 375 / 768 / 1440 px layouts, preview controls, keyboard navigation, reduced motion and runtime errors.
