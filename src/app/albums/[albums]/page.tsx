import AlbumsData from "@/components/widgets/Albumdata"
import { genrateMetadata } from "@/components/widgets/Albumdata";
import { Loader2 } from "lucide-react";
import { Suspense } from "react"

export default async function Albums({ params: { albums } }: { params: { albums: string } }) {
  const metadata = await genrateMetadata({ params: { albums } });
  return (
    <main>
      <title>{metadata.title?.toString()}</title>
      <Suspense fallback={<div className="flex justify-center items-center mt-48"><Loader2 className='animate-spin w-8 h-8' /></div>}>
      <AlbumsData params={{ albums }} />
      </Suspense>
    </main>
  );
}