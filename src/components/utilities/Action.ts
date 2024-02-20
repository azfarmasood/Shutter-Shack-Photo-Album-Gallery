"use server"
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export default async function MarkAsFavouriteORRemoveFavourite(public_id:string, fav:boolean){
    if(fav){
        await cloudinary.v2.uploader.remove_tag("favourite",[public_id]);
    }
    else {
        await cloudinary.v2.uploader.add_tag("favourite",[public_id]);
    }

    await new Promise((resolve) => {
        setTimeout(resolve),1000;
    });

    revalidatePath("/gallery")
}