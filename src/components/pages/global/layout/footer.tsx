import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconBrandTypescript, IconHeart } from "@tabler/icons-react";

export default function LayoutFooter() {
	// The footer should have copyright information, as well as links to various places
	return (
		<div className="container grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
			<div className="flex flex-col justify-between">
				<h2 className="font-whitigol text-xl font-bold">
					Whitigol's Portfolio
				</h2>
				<p className="text-xs">
					© {new Date().getFullYear()} Whitigol. All Rights Reserved.
				</p>
				<div className="flex flex-row items-center gap-1 text-muted-foreground">
					Made with <IconHeart className="size-4 text-rose-500/60" />{" "}
					&
					<Tooltip>
						<TooltipTrigger>
							<IconBrandTypescript className="size-4 text-blue-500/60" />
						</TooltipTrigger>
						<TooltipContent>TypeScript</TooltipContent>
					</Tooltip>
					by Whitigol
				</div>
			</div>
			<div>
				<h2 className="font-whitigol text-xl font-bold">Links</h2>
				<ul className="text-sm">
					<li>
						<a href="https://github.com/WhitigolProd">My GitHub</a>
					</li>
					<li>
						<a href="https://bigdaddyscripts.com/">
							Big Daddy Scripts
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 className="font-whitigol text-xl font-bold">Socials</h2>
				<ul className="text-sm">
					<li>
						<a href="https://twitter.com/whitigol">Twitter</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
