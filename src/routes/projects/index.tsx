import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { IconBrandGithub, IconDownload } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
	component: ProjectsIndex,
});

function ProjectsIndex() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="mt-16 text-4xl font-bold">My Projects</h1>
			{/* Grid */}
			<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Project
					name="wLauncher"
					// FiveM Launcher
					description={
						"wLauncher is a windows launcher for FiveM. wLauncher allows you to launch into your favorite FiveM servers from your Windows PC without ever having to worry about changing your nickname in-between servers."
					}
					links={[
						{
							children: (
								<div className="flex items-center gap-1">
									<IconDownload className="size-4" />
									<span className="text-sm">Download</span>
								</div>
							),
							url: "https://github.com/WhitigolSoftware/wLauncher/releases/latest/download/wLauncher.exe",
						},
					]}
				/>
				<Project
					name="SnailyCAD Manager v3"
					// SnailyCAD Manager
					description={
						"SnailyCAD Manager v3 is the latest work in progress version of SnailyCAD Manager. It's a complete rewrite of the previous version, with support for multiple operating systems, as well as introducing all new features and improvements."
					}
					links={[
						{
							children: (
								<div className="flex items-center gap-2">
									<IconBrandGithub className="size-4" />
									<span className="text-sm">GitHub</span>
								</div>
							),
							url: "https://github.com/SnailyCAD-Manager/v3",
						},
					]}
				/>
				<Project
					name="SnailyCAD Manager v2"
					// SnailyCAD Manager
					description={
						"SnailyCAD Manager v2 is a tool to help you manage your SnailyCAD installation on Windows. It allows for easy installation, configuration, and log viewing."
					}
					links={[
						{
							children: (
								<div className="flex items-center gap-2">
									<IconDownload className="size-4" />
									<span className="text-sm">Download</span>
								</div>
							),
							url: "https://github.com/SnailyCAD-Manager/v2/releases/latest/download/snailycad-manager.exe",
						},
						{
							children: (
								<div className="flex items-center gap-2">
									<IconBrandGithub className="size-4" />
									<span className="text-sm">GitHub</span>
								</div>
							),
							url: "https://github.com/SnailyCAD-Manager/v2",
						},
					]}
				/>
			</div>
			<div className="mt-10 flex flex-row items-center gap-1 text-muted-foreground">
				<span>This isn't all of my projects. Check out my</span>
				<a
					href="https://github.com/WhitigolProd"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button className="flex items-center gap-1 p-0" variant="link">
						<IconBrandGithub className="size-4" />
						<span className="text-sm">GitHub</span>
					</Button>
				</a>
				<span>for more.</span>
			</div>
		</div>
	);
}

interface ProjectProps {
	name: string;
	description: string;
	links?: {
		children: React.ReactNode;
		url: string;
	}[];
}
function Project(props: ProjectProps) {
	return (
		// Cards can be different sizes. Links should line up at the bottom
		<Card className="flex flex-col justify-between">
			<CardHeader>
				<CardTitle className="text-center">{props.name}</CardTitle>
				<CardDescription className="!mt-4">{props.description}</CardDescription>
			</CardHeader>
			<CardFooter>
				{props.links && (
					<div className="flex flex-row items-center justify-center gap-2">
						{props.links.map((link, index) => (
							<Button key={index} className="w-full" asChild variant="default">
								<a href={link.url} target="_blank">
									{link.children}
								</a>
							</Button>
						))}
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
