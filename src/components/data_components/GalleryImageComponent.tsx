"use client";
import { useState, useTransition } from "react";
import { CldImage } from "next-cloudinary";
import { Loader2 } from "lucide-react";
import { ArrowDownToLine } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button"
import  DropDownMenu  from "@/components/shared/dropdownmenu/DropDownMenu";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper/Wrapper";
import HeartSvg from "@/components/icons/HeartSvg";
import  MarkAsFavouriteORRemoveFavourite  from "@/components/utilities/Action";


function GalleryImageComponent({public_id, tags}: {public_id:string,tags:string[]}) {
  const [fav, setFavourite] = useState(tags.includes("favourite"))
  const [transition, setTransition] = useTransition();


  const handleDownload = async () => {

    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/${public_id}`;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = downloadUrl;
      a.download = `${public_id}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(a);
    } 
    catch (err) {
      console.error("Error downloading the image:", err);
    }
  };

  const OpenImage = () => {
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/${public_id}`;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleAddFavourites = () => {
    setFavourite(!fav)
    setTransition(() => {
      MarkAsFavouriteORRemoveFavourite(public_id,fav);
    })
  }
  


  return (
    <section>
      <Wrapper>
      <div className='relative'>
      <CldImage 
        src={public_id}
        alt="Image"
        width={500}
        height={400}
        className={transition ? "bg-black opacity-50" : "cursor-pointer"}
        onClick={OpenImage}
        />
      {transition && <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><Loader2 className='animate-spin w-8 h-8' /></div>}
      <div className='absolute top-3% left-2' onClick={handleAddFavourites}>
        {fav ? (
        <HeartSvg
          className={`w-8 h-8 fill-red-500 text-red-500 hover:text-white hover:fill-white  cursor-pointer`}
          />
          ):( 
          <HeartSvg 
          className={`w-8 h-8 fill-white text-white hover:text-red-500 hover:fill-red-500 cursor-pointer`}
          />
        
          )}
          </div>
        <div className='absolute top-3% right-2'>
          <DropDownMenu image={{ public_id, tags }}/>
        </div>
        <div className="absolute top-85% right-2">
        <ArrowDownToLine className="w-6 h-6 text-white  fill-white bg-black font-medium rounded-full cursor-pointer" onClick={handleDownload }/>
        </div>
        <div className="absolute top-3% right-14">
        <Link href={`/edit?publicId=${encodeURIComponent(public_id)}`} className="flex items-center gap-2 text-sm font-bold leading-none tracking-tight">
          <Button variant={"outline5"} className="px-1 py-0.5" size={"sm"}>
          <Pencil className="w-6 h-6 fill-black font-bold  rounded-lg bg-white "/>
          </Button>
         </Link>
        </div>
      </div>
      </Wrapper>
    </section>
  )
}

export default GalleryImageComponent