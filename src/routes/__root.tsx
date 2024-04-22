import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	return (
		<>
			{process.env.NODE_ENV === "development" && (
				<TanStackRouterDevtools />
			)}
			<Outlet />
		</>
	);
}
