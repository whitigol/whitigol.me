import { PropsWithChildren } from "react";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";

export default function Layout(props: PropsWithChildren) {
	return (
		<div className="flex min-h-[100vh] flex-col">
			<header className="fixed top-0 z-10 flex h-14 w-full flex-row items-center border-b bg-zinc-950">
				<LayoutHeader />
			</header>
			<main className="container min-h-screen">{props.children}</main>
			<footer className="border-t">
				<LayoutFooter />
			</footer>
		</div>
	);
}
