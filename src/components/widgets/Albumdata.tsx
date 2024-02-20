
import { Props } from "@/components/widgets/Gallery";
import cloudinary from "cloudinary"
import { Metadata } from "next";
import GalleryImageComponent from "@/components/data_components/GalleryImageComponent";


export async function genrateMetadata({params:{albums}}: {params:{albums:string}}): Promise<Metadata> {
  return {
    title: `${albums} Albums`
  }
}


async function AlbumsData({params: {albums}}: {params: {albums: string}}) {
  const response = await (cloudinary.v2.search
  .expression(`resource_type:image AND folder=${albums}`)
  .with_field('tags')
  .sort_by('created_at','desc')
  .max_results(60)
  .execute()) as {resources: Props[]};
  
  return (
    <section>
    <div className="flex justify-between py-4 px-6">
       <div>
        <h1 className="md:text-3xl text-xl font-bold">{albums} Albums </h1>
       </div>
    </div>
    <div className="lg:columns-4 md:columns-3 sm:columns-2 columns-1 space-y-4  gap-4 py-4 px-4">
        {response.resources.map((images)=>{
          return(
            <div key={images.public_id} className="break-inside-avoid">
              <GalleryImageComponent public_id={images.public_id} tags={images.tags} key={images.public_id} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AlbumsData;
