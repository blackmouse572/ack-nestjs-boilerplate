import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { Root } from 'fumadocs-core/page-tree';

export default function Layout({ children }: LayoutProps<'/docs'>) {
    return (
        <DocsLayout
            tree={source.pageTree}
            searchToggle={{
                enabled: false,
            }}
            {...baseOptions()}
        >
            {children}
        </DocsLayout>
    );
}
