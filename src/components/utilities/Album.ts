"use server";

import cloudinary from "cloudinary";
import { Props } from "@/components/widgets/Gallery";

export default async function AlbumData(image:Props, album:string){
    try {
        let part = image.public_id.split('/');
        if(part.length > 1) {
            part = part.slice(1);
        };
        const publicId = part.join("/")
        await cloudinary.v2.api.create_folder(album);
        await cloudinary.v2.uploader.rename(image.public_id, `${album}/${image.public_id}`);
    } catch (error) {
        console.log("Some Thing Went Wrong",error);
    }
}