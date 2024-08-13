import { Button } from "@/components/ui/button";
import { AutoPath } from "@/lib/types";
import { Link, useLocation } from "@tanstack/react-router";
import { IconMenu } from "@tabler/icons-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function LayoutHeader() {
	const { pathname }: { pathname: AutoPath } = useLocation();

	interface Link {
		name: string;
		path: AutoPath;
	}
	const links: Link[] = [
		{ name: "Home", path: "/" },
		{ name: "Projects", path: "/projects" },
	];

	return (
		<div className="container flex flex-row items-center justify-between">
			<Link to="/" className="flex flex-row items-center gap-2">
				<img src="/logo.png" alt="Whitigol's Logo" className="size-10" />
				<h1 className="font-whitigol text-2xl font-bold text-foreground">
					Whitigol's Portfolio
				</h1>
			</Link>
			<div className="hidden flex-row items-center gap-2 md:flex">
				{links.map((link) => (
					<Link
						key={link.name}
						to={link.path}
						className={`font-whitigol text-foreground ${
							pathname === link.path ? "underline" : ""
						}`}
					>
						<Button
							size="sm"
							variant={pathname === link.path ? "secondary" : "ghost"}
						>
							{link.name}
						</Button>
					</Link>
				))}
			</div>
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger>
						<Button size="icon" variant="ghost" className="size-7">
							<IconMenu className="size-4" />
						</Button>
					</SheetTrigger>
					{/* @ts-ignore - Unknown issue with SheetContent */}
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
							<SheetClose />
						</SheetHeader>
						<div className="flex flex-col gap-2">
							{links.map((link) => (
								<Link
									key={link.name}
									to={link.path}
									className={`font-whitigol text-foreground decoration-transparent ${
										pathname === link.path ? "underline" : ""
									}`}
								>
									<Button
										size="sm"
										className="flex w-full flex-row items-center justify-start"
										variant={pathname === link.path ? "secondary" : "ghost"}
									>
										{link.name}
									</Button>
								</Link>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
