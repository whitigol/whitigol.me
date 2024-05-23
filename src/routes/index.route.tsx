import { Link, createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export const Route = createFileRoute("/")({
	component: Index,
});

interface Tool {
	name: string;
	description: string;
	icon: string;
	iconColor?: string;
}

function Index() {
	const tools: Tool[] = [
		{
			name: "TypeScript",
			description:
				"A superset of JavaScript that compiles to clean JavaScript output.",
			icon: "typescript/typescript-original.svg",
		},
		{
			name: "React",
			description: "A JavaScript library for building user interfaces.",
			icon: "react/react-original.svg",
		},
		{
			name: "Tailwind CSS",
			description:
				"A utility-first CSS framework for rapidly building custom user interfaces.",
			icon: "tailwindcss/tailwindcss-original.svg",
		},
		{
			name: "Next.js",
			description:
				"A framework for building server-rendered React applications.",
			icon: "nextjs/nextjs-original.svg",
			iconColor: "1",
		},
		{
			name: "Vercel",
			description: "A platform for building and deploying web applications.",
			icon: "vercel/vercel-original.svg",
			iconColor: "1",
		},
		{
			name: "GitHub",
			description:
				"A web-based platform for version control and collaboration.",
			icon: "github/github-original.svg",
			iconColor: "1",
		},
		{
			name: "Visual Studio Code",
			description:
				"A lightweight and extensible source code editor developed by Microsoft.",
			icon: "vscode/vscode-original.svg",
		},
		{
			name: "Bun",
			description:
				"A JavaScript runtime with a Node.js compatible package manager.",
			icon: "bun/bun-original.svg",
		},
		{
			name: "Pnpm",
			description: "A fast, disk-space efficient package manager for Node.js.",
			icon: "pnpm/pnpm-original.svg",
		},
		{
			name: "Git",
			description: "A free and open source distributed version control system.",
			icon: "git/git-original.svg",
		},
		{
			name: "Node.js",
			description:
				"A JavaScript runtime built on Chrome's V8 JavaScript engine.",
			icon: "nodejs/nodejs-original.svg",
		},
		{
			name: "Express",
			description: "A minimal and flexible Node.js web application framework.",
			icon: "express/express-original.svg",
			iconColor: "1",
		},
		{
			name: "PostgreSQL",
			description: "An open-source object-relational database system.",
			icon: "postgresql/postgresql-original.svg",
		},
		{
			name: "MySQL",
			description:
				"A popular open-source relational database management system.",
			icon: "mysql/mysql-original.svg",
		},
		{
			name: "Prisma",
			description: "A database toolkit for building data-driven applications.",
			icon: "prisma/prisma-original.svg",
			iconColor: "1",
		},
		{
			name: "Cloudflare",
			description:
				"A content delivery network (CDN) and DNS provider for websites and applications.",
			icon: "cloudflare/cloudflare-original.svg",
		},
		{
			name: "Docker",
			description:
				"A platform for building, shipping, and running applications in containers.",
			icon: "docker/docker-original.svg",
		},
		{
			name: "Trello",
			description:
				"A project management tool for organizing and tracking tasks and projects.",
			icon: "trello/trello-original.svg",
		},
		{
			name: "Windows",
			description:
				"A family of operating systems developed by Microsoft for personal computers, servers, and other devices.",
			icon: "windows11/windows11-original.svg",
		},
		{
			name: "Ubuntu",
			description:
				"A popular Linux distribution based on Debian, designed for beginners.",
			icon: "ubuntu/ubuntu-original.svg",
		},
	];

	return (
		<div className="mb-16 flex flex-col gap-8">
			<header className="mt-16">
				<h1 className="text-5xl font-bold text-white">
					Hi, I'm <span className="font-whitigol">Whitigol</span>
				</h1>
				<p className="mt-4 text-muted-foreground">
					I'm a frontend web developer with a passion for creating interactive
					and user-friendly web applications.
				</p>
				<p className="mt-4 text-muted-foreground">
					Based in the United States, I specialize in building responsive and
					dynamic websites using the latest technologies.
				</p>
			</header>

			<section>
				<h2 className="text-3xl font-semibold text-white">About Me</h2>
				<p className="mt-2 text-muted-foreground">
					With a strong foundation in frontend development and a growing
					interest in backend technologies, I am dedicated to continuous
					learning and improvement. My goal is to develop seamless web
					experiences that delight users.
				</p>
			</section>

			<section>
				{/* Languages and Technologies */}
				<Card>
					<CardHeader>
						<CardTitle>My Toolkit</CardTitle>
						<CardDescription>
							Below is a list of the languages and technologies I use in my
							work.
						</CardDescription>
					</CardHeader>
					{/* Grid */}
					<CardContent className="flex flex-wrap justify-center gap-4">
						{tools.map((tool) => (
							<Tooltip key={tool.name}>
								<TooltipTrigger>
									<img
										src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${tool.icon}`}
										alt={tool.name}
										className="aspect-square size-12 rounded-sm"
										style={{
											filter: tool.iconColor
												? `invert(${tool.iconColor})`
												: undefined,
										}}
									/>
								</TooltipTrigger>
								<TooltipContent>
									<h1 className="font-whitigol text-xl font-bold">
										{tool.name}
									</h1>
									<p className="mt-2 text-muted-foreground">
										{tool.description}
									</p>
								</TooltipContent>
							</Tooltip>
						))}
					</CardContent>
				</Card>
			</section>

			<section>
				<h2 className="text-3xl font-semibold text-white">Projects</h2>
				<div className="mt-4">
					<Link to="/projects">
						<Button>View All Projects</Button>
					</Link>
				</div>
			</section>

			<section>
				<h2 className="text-3xl font-semibold text-white">Contact</h2>
				<p className="mt-2 text-muted-foreground">
					I'm always open to discussing new projects, creative ideas, or
					opportunities to be part of your vision. Feel free to reach out to me
					via email or connect with me on GitHub.
				</p>
				<div className="mt-4 flex space-x-4">
					<a href="mailto:jared@whitigol.me">
						<Button>
							<IconMail className="mr-1 size-4" />
							Email Me
						</Button>
					</a>
					<a
						href="https://github.com/WhitigolProd"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className="flex items-center">
							<IconBrandGithub className="mr-1 size-4" />
							GitHub
						</Button>
					</a>
				</div>
			</section>
		</div>
	);
}
