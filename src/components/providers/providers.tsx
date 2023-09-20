import { MantineProvider, createTheme } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

interface Props {
    children: React.ReactNode;
}

export default function Providers(props: Props) {
    return (
        <MantineProvider defaultColorScheme="dark">
            <ModalsProvider>
                <Notifications />
                {props.children}
            </ModalsProvider>
        </MantineProvider>
    );
}
