import Link from 'next/link';
import { source } from '../../lib/source';
export default function HomePage() {
    const docs = source.getPages();
    return (
        <div className="flex flex-col justify-center text-center flex-1">
            {docs.map(doc => (
                <div key={doc.path} className="mb-4">
                    <Link
                        href={`/docs/${doc.slugs}`}
                        className="text-blue-500 hover:underline"
                    >
                        {doc.data.title || doc.path}
                    </Link>
                </div>
            ))}
        </div>
    );
}
