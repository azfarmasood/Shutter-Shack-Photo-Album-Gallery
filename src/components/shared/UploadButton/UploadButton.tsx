"use client"
import { CldUploadButton } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { UploadCloud } from 'lucide-react';


function UploadButton() {
    const router = useRouter();
  return (
    <div>
     <Button asChild className="md:px-6 md:py-2.5 px-3 py-1.5 font-bold" size={"sm"}>
       <CldUploadButton uploadPreset="n0faznf9" onUpload={() => {
        setTimeout(async()=>{
          router.refresh();
        },1000)
       }}>
        <UploadCloud className="w-5 h-5 mr-2"/>
        Upload
        </CldUploadButton>
     </Button>
    </div>
  )
}

export default UploadButton