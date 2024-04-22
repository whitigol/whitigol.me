import { TooltipProvider } from "../ui/tooltip";
import ThemeProvider from "./ThemeProvider";

interface Props {
	children: React.ReactNode;
}

export default function Providers(props: Props) {
	return (
		<>
			<TooltipProvider>
				<ThemeProvider />
				<>{props.children}</>
			</TooltipProvider>
		</>
	);
}
