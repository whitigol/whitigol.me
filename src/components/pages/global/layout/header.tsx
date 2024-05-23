import { Button } from "@/components/ui/button";
import { AutoPath } from "@/lib/types";
import { Link, useLocation } from "@tanstack/react-router";

export default function LayoutHeader() {
	const { pathname }: { pathname: AutoPath } = useLocation();

	return (
		<div className="container flex flex-row items-center justify-between">
			<Link to="/" className="flex flex-row items-center gap-2">
				<img src="/logo.png" alt="Whitigol's Logo" className="size-10" />
				<h1 className="font-whitigol text-2xl font-bold text-white">
					Whitigol's Portfolio
				</h1>
			</Link>
			<div className="flex flex-row items-center gap-2">
				<Link to="/">
					<Button variant={pathname === "/" ? "secondary" : "ghost"}>
						Home
					</Button>
				</Link>
				<Link to="/projects">
					<Button variant={pathname === "/projects" ? "secondary" : "ghost"}>
						Projects
					</Button>
				</Link>
			</div>
		</div>
	);
}
