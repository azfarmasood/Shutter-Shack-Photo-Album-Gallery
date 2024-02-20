"use client"
import FavouriteImageComponent from "@/components/data_components/FavouriteImageComponent";
import { Props } from "@/components/widgets/Gallery"; 
import { useState } from "react";
import { useEffect } from "react"
import { useRouter } from "next/navigation";

const FavouriteRemove = ({resource}:{resource:Props[]}) => {
  const [resources, setResources] = useState(resource);
  const router = useRouter();
  useEffect(()=>{
    setTimeout(() => {
      setResources(resource)
    router.refresh();
    },1000)
    }, [resource,router]);
  return (
    <section>
    <div className="lg:columns-4 md:columns-3 sm:columns-2 columns-1 space-y-4  gap-4 py-4 px-4">
    {resources.map((images)=>{
      return(
        <div key={images.public_id} className="break-inside-avoid">
            <FavouriteImageComponent public_id={images.public_id} tags={images.tags} key={images.public_id} response={(public_id:string) => {
              setResources((currentResources)=> currentResources.filter((value) => value.public_id !== public_id))
            }}/>
        </div>
        )
      })}
    </div>
      </section>
  )
}

export default FavouriteRemove
