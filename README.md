# Wide Screen Toggle

An Obsidian plugin that toggles wide screen mode, expanding the content area to full width.

## Features

- Toggle wide screen mode via ribbon icon or command palette
- Persist toggle state across sessions
- Works in both editing and reading views

## Installation

### From GitHub Release

1. Download `main.js`, `styles.css`, and `manifest.json` from the [latest release](https://github.com/Fenlyin/wide-screen-toggle/releases/latest)
2. Create a folder named `wide-screen-toggle` in your vault's `.obsidian/plugins/` directory
3. Copy the three files into that folder
4. Enable the plugin in Obsidian Settings → Community Plugins

### Manual Build

```bash
git clone https://github.com/Fenlyin/wide-screen-toggle.git
cd wide-screen-toggle
npm install
npm run build
```

## Usage

- Click the **maximize** ribbon icon in the left sidebar
- Or run the **"Toggle wide screen"** command from the command palette (`Ctrl/Cmd + P`)

## License

MIT