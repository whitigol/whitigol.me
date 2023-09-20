import ContactIndex from '@/components/pages/contact';
import Shell from '@/components/pages/global/Shell';
import Providers from '@/components/providers/providers';

export default function Contact() {
    return (
        <Providers>
            <Shell>
                <ContactIndex />
            </Shell>
        </Providers>
    );
}
