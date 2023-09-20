'use client';

import Shell from '@/components/pages/global/Shell';
import Providers from '@/components/providers/providers';
import { useHeader } from '@/hooks/useHeader';
import { useEffect } from 'react';

export default function Projects() {
    const { setCurrent } = useHeader();
    useEffect(() => {
        setCurrent('Projects');
    }, []);

    return (
        <Providers>
            <Shell>
                <div>
                    <h1>Projects</h1>
                </div>
            </Shell>
        </Providers>
    );
}
