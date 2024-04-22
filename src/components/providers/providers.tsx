import ThemeProvider from "./ThemeProvider";

interface Props {
	children: React.ReactNode;
}

export default function Providers(props: Props) {
	return (
		<>
			<ThemeProvider />
			<>{props.children}</>
		</>
	);
}
