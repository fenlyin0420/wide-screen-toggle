import { Plugin } from "obsidian";

const BODY_CLASS = "wide-screen-mode";

export default class WideScreenToggle extends Plugin {
	async onload() {
		const saved = (await this.loadData()) as { wideScreen?: boolean } | null;
		if (saved?.wideScreen) {
			document.body.classList.add(BODY_CLASS);
		}

		this.addRibbonIcon("maximize", "Toggle wide screen", () => {
			this.toggle();
		});

		this.addCommand({
			id: "toggle-wide-screen",
			name: "Toggle wide screen",
			callback: () => this.toggle(),
		});
	}

	private toggle() {
		const enabled = document.body.classList.toggle(BODY_CLASS);
		this.saveData({ wideScreen: enabled });
	}
}