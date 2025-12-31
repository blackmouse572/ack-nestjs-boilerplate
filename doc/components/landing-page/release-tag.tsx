import { ArrowUpRight } from 'lucide-react';

const API_PATH =
    'https://api.github.com/repos/andrechristikan/ack-nestjs-boilerplate/releases/latest';

export const getLatestRelease = async () => {
    try {
        const response = await fetch(API_PATH);
        if (!response.ok) {
            throw new Error('Failed to fetch latest release');
        }
        const data = await response.json();
        return {
            version: data.tag_name,
            url: data.html_url,
        };
    } catch (error) {
        console.error('Error fetching latest release:', error);
        return null;
    }
};

export async function ReleaseTag() {
    const release = await getLatestRelease();

    if (!release) return null;

    return (
        <a
            href={release.url}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-1 h-7 text-small rounded-full text-default-700 relative transition-colors hover:bg-fd-accent border border-default-700/10 backdrop-blur-lg bg-transparent"
        >
            <span className="flex-1 px-2 relative flex items-center font-medium text-default-900 pr-4">
                <span className="mr-1 text-sm">🚢</span>
                <span className="font-medium text-sm">{release.version}</span>
                <ArrowUpRight className="absolute right-0.5 [&>path]:stroke-[2.5px] size-3 text-fd-muted-foreground" />
            </span>
        </a>
    );
}
