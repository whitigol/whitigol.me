import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="def flex w-full items-center justify-center">
			<Card>
				<CardHeader>
					<CardTitle>Coming Soon</CardTitle>
					<CardDescription>
						I'm working on v2 of my portfolio. Check back soon!
					</CardDescription>
				</CardHeader>
				<CardContent>Check out the links below</CardContent>
				<CardFooter className="flex justify-center">
					<a href="https://github.com/WhitigolProd">
						<Button className="flex flex-row items-center space-x-2">
							<IconBrandGithub className="size-4" />
							<span>My GitHub</span>
						</Button>
					</a>
				</CardFooter>
			</Card>
		</div>
	);
}
