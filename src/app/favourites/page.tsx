import FavouritePage from "@/components/widgets/Favourite";
import { Metadata } from "next";
import { Suspense } from "react"; 
export const metadata:Metadata= {
    title: "Favourites"
} 

export default function Favourites () {
    return(
        <main>
            <Suspense>
            <FavouritePage/>
            </Suspense>
        </main>
    )
}