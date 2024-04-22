import { Link } from "@tanstack/react-router";

export default function LayoutHeader() {
	return (
		<div className="container flex flex-row items-center justify-between">
			<Link to="/" className="flex flex-row items-center gap-2">
				<img
					src="/logo.png"
					alt="Whitigol's Logo"
					className="size-10"
				/>
				<h1 className="font-whitigol text-2xl font-bold text-white">
					Whitigol's Portfolio
				</h1>
			</Link>
		</div>
	);
}
