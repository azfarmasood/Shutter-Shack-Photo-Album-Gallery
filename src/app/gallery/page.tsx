import GalleryPage from "@/components/widgets/Gallery"
import { Metadata } from "next" 
import { Suspense } from "react"
import { Loader2 } from 'lucide-react'

export const metadata:Metadata = {
  title: "Gallery"
}

export default function Gallery({searchParams: {search}}:{searchParams: {search: string}}) {
  return (
    <main>
      <Suspense fallback={<div className="flex justify-center items-center mt-48"><Loader2 className='animate-spin w-8 h-8' /></div>}>
      <GalleryPage searchParams={{ search }}/>
      </Suspense>
    </main>
  )
}
