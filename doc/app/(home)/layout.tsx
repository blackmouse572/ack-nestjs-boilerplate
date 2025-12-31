import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
    return (
        <HomeLayout
            className="container mx-auto max-w-7xl px-6 grow"
            {...baseOptions()}
        >
            {children}
        </HomeLayout>
    );
}
