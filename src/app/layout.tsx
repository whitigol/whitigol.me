import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jared S. — Frontend Developer',
    description: "Whitigol's portfolio website",
    icons: {
        icon: 'img/whitigol-prod.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} overflow-y-scroll`}>{children}</body>
        </html>
    );
}
