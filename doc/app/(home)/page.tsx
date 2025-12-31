import Link from 'next/link';
import { source } from '../../lib/source';
import { ReleaseTag } from '../../components/landing-page/release-tag';
import {
    LinkOutlineButton,
    LinkPrimaryButton,
} from '../../components/ui/button';
import { GithubIcon } from 'lucide-react';
import { featuresConfig } from '../../lib/landing-page-config';
export default function HomePage() {
    const docs = source.getPages();
    return (
        <div className="flex flex-col justify-center text-center flex-1">
            <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
                <div className="relative z-20 flex flex-col w-full gap-6 xl:mt-10">
                    <div className="w-full flex justify-center ">
                        <ReleaseTag />
                    </div>
                    <div className="leading-8 text-center md:leading-10 ">
                        <h3 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl">
                            ACK NestJs Boilerplate
                        </h3>
                    </div>
                    <h3 className="w-full my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full text-center lg:pr-8 md:max-w-2xl mx-auto">
                        A{' '}
                        <a
                            className="text-fd-secondary-foreground underline font-bold"
                            href="https://nestjs.com/"
                        >
                            NestJs v11.x
                        </a>{' '}
                        boilerplate designed for backend services.
                        Production-ready NestJS boilerplate with authentication,
                        authorization, and enterprise features
                    </h3>
                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                        <LinkPrimaryButton href="/docs/installation">
                            Get Started
                        </LinkPrimaryButton>
                        <LinkOutlineButton
                            href="https://github.com/andrechristikan/ack-nestjs-boilerplate"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon className="size-5" size={14} />
                            Github
                        </LinkOutlineButton>
                    </div>
                </div>
            </section>
            <section className="relative flex flex-col gap-2 w-full z-20 mt-16 lg:mt-44">
                <div className="flex flex-col gap-8">
                    <div>
                        <div className="flex flex-col gap-2 items-start justify-center w-full">
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
                                Ready to use
                            </h1>
                        </div>
                        <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-fd-muted-foreground block max-w-full text-start">
                            Production-ready authentication system with multiple
                            strategies and security layers.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {featuresConfig.map(feature => (
                            <div
                                key={feature.label}
                                className="flex flex-col items-start gap-2 p-4 border border-fd-border rounded-lg hover:shadow-lg transition-shadow drop-shadow-fd-card-foreground [&>svg]:size-6 [&>svg]:text-fd-info"
                            >
                                {feature.icon}
                                <h3 className="text-lg font-semibold">
                                    {feature.label}
                                </h3>
                                <p className="text-fd-muted-foreground text-sm text-start">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer>
                <div className="w-full h-px bg-fd-border my-16" />
                <div className="text-fd-muted-foreground text-sm mb-8">
                    © {new Date().getFullYear()} ACK NestJs Boilerplate. All
                    rights reserved.
                </div>
            </footer>
        </div>
    );
}
