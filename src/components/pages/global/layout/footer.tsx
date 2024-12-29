import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	IconBrandGithub,
	IconBrandTwitter,
	IconBrandTypescript,
	IconExternalLink,
	IconHeart,
} from "@tabler/icons-react";

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
					Made with <IconHeart className="size-4 text-rose-500/60" /> &
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
						<FooterLink href="https://github.com/whitigol">
							<IconBrandGithub className="size-4" />
							<span>GitHub</span>
						</FooterLink>
					</li>
					<li>
						<FooterLink href="https://bigdaddyscripts.com">
							<IconExternalLink className="size-4" />
							<span>Big Daddy Scripts</span>
						</FooterLink>
					</li>
				</ul>
			</div>
			<div>
				<h2 className="font-whitigol text-xl font-bold">Socials</h2>
				<ul className="text-sm">
					<li>
						<FooterLink href="https://twitter.com/whitigol">
							<IconBrandTwitter className="size-4" />
							<span>Twitter</span>
						</FooterLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

interface FooterLinkProps {
	children: React.ReactNode;
	href: string;
}
function FooterLink(props: FooterLinkProps) {
	return (
		<a href={props.href} target="_blank" rel="noopener noreferrer">
			<Button variant="link" className="flex h-fit items-center gap-1 p-0">
				{props.children}
			</Button>
		</a>
	);
}
