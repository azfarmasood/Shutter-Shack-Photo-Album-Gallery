import { Metadata } from "next";
import CldImageEditPage from "@/components/shared/CldImage for EditPage/CldImage";

export async function genrateMetadata({searchParams: { publicId }}: {searchParams: { publicId: string }}): Promise<Metadata> {
  return {
    title: `${publicId} Edit`
  }
}

export default async function EditPage({searchParams: { publicId }}: {searchParams: { publicId:string }}) {
    const metadata = await genrateMetadata({ searchParams: { publicId } });
  return (
    <main>
        <title>{metadata.title?.toString()}</title>
    <div className="px-6 py-4">
        <div>
        <h1 className="md:text-5xl text-3xl font-bold md:text-start text-center"> Edit Your Image here. </h1>
       </div>
       <div>
        <CldImageEditPage
        searchParams={{ publicId }}
        />
       </div>
    </div>
    </main>
  )
}
