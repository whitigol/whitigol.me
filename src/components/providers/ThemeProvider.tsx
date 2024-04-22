import { useEffect } from "react";

enum Storage {
	Theme = "w_theme",
}
type Theme = "light" | "dark" | "system";

/* 
    Theme is applied as a class to the html element. Only the "dark" class can be applied to the html element.
*/

export default function ThemeProvider() {
	useEffect(() => {
		let theme = localStorage.getItem(Storage.Theme);
		if (!theme) {
			localStorage.setItem(Storage.Theme, "system");
		}
		theme = localStorage.getItem(Storage.Theme) as Theme;
		if (theme === "system") {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			}
		} else if (theme === "dark") {
			document.documentElement.classList.add("dark");
		}
	}, []);

	return null;
}
