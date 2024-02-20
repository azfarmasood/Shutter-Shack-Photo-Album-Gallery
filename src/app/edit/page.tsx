import EditPage from "@/components/widgets/Edit";
import { Loader2 } from "lucide-react";
import { Suspense } from "react"

export default function Edit({searchParams: { publicId }}: {searchParams: { publicId:string }}) {
  return (
    <main>
      <Suspense fallback={<div className="flex justify-center items-center mt-48"><Loader2 className='animate-spin w-8 h-8' /></div>}>
      <EditPage
      searchParams={{ publicId }}
      />
      </Suspense>
    </main>
  )
}
