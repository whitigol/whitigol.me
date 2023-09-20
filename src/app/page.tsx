'use client';

import Providers from '@/components/providers/providers';
import Shell from '@/components/pages/global/Shell';
import HomeIndex from '@/components/pages/home';
import { useHeader } from '@/hooks/useHeader';
import { useEffect } from 'react';

export default function Home() {
    const { setCurrent } = useHeader();

    useEffect(() => {
        setCurrent('Home');
    }, []);
    return (
        <Providers>
            <Shell>
                <HomeIndex />
            </Shell>
        </Providers>
    );
}
