import Providers from '@/components/providers/providers';
import Shell from '@/components/pages/global/Shell';
import HomeIndex from '@/components/pages/home/HomeIndex';

export default function Home() {
    return (
        <Providers>
            <Shell>
                <HomeIndex />
            </Shell>
        </Providers>
    );
}
