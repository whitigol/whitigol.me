'use client';
import Providers from '@/components/providers/providers';
import { useHeader } from '@/hooks/useHeader';
import AboutIndex from '@/components/pages/about/AboutIndex';
import Shell from '@/components/pages/global/Shell';
import { useEffect } from 'react';

export default function About() {
    const { setCurrent } = useHeader();

    useEffect(() => {
        setCurrent('About');
    }, []);

    return (
        <Providers>
            <Shell>
                <AboutIndex />
            </Shell>
        </Providers>
    );
}
