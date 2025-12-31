import { ArrowRight } from 'lucide-react';

export function LinkPrimaryButton(props: React.ComponentPropsWithoutRef<'a'>) {
    return (
        <a
            {...props}
            className={`z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] cursor-pointer outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-base gap-3 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90 transition-all w-full md:h-11 md:w-auto`}
        >
            {props.children}
            <ArrowRight size={16} />
        </a>
    );
}

export function LinkOutlineButton(props: React.ComponentPropsWithoutRef<'a'>) {
    return (
        <a
            {...props}
            className={`tap-highlight-transparent no-underline hover:opacity-hover active:opacity-disabled z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] cursor-pointer outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-6 min-w-24 h-12 text-base gap-3 rounded-full transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-fd-border text-fd-foreground data-[hover=true]:opacity-hover border w-full md:w-auto`}
        >
            {props.children}
        </a>
    );
}
