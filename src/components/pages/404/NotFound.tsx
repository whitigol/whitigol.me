import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function NotFoundPage() {
	return (
		<div className="def flex flex-col items-center justify-center gap-4">
			<h1 className="font-whitigol text-6xl font-bold">404</h1>
			<p className="text-2xl">Page Not Found</p>
			<Link to="/">
				<Button>Go Home</Button>
			</Link>
		</div>
	);
}
