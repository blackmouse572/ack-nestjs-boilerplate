import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: 'Ack Boilerplate Docs',
            transparentMode: 'top',
            url: '/',
        },
        githubUrl: 'https://github.com/andrechristikan/ack-nestjs-boilerplate',
    };
}
