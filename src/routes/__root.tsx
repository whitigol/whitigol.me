import NotFoundPage from "@/components/pages/404/NotFound";
import Layout from "@/components/pages/global/layout";
import {
	Outlet,
	ScrollRestoration,
	createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: Root,
	notFoundComponent: NotFoundPage,
});

function Root() {
	return (
		<>
			<Layout>
				{process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
				<div className="def z-0">
					<Outlet />
				</div>
				<ScrollRestoration />
			</Layout>
		</>
	);
}
