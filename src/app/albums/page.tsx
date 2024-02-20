import Album from "@/components/widgets/albumsData";
import { Loader2 } from "lucide-react";
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata:Metadata = {
  title: "Albums"
}
async function Albums() {
  return (
    <main>
      <Suspense fallback={<div className="flex justify-center items-center mt-48"><Loader2 className='animate-spin w-8 h-8' /></div>}>
      <Album/>
      </Suspense>
    </main>
  )
}

export default Albums;