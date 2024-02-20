import cloudinary from "cloudinary"
import UploadButton from "@/components/shared/UploadButton/UploadButton";
import GalleryImageComponent from "@/components/data_components/GalleryImageComponent";

export interface Props {
    public_id: string;
    tags: string[];
    onUnheart?: (response:Props) => void
}

async function GalleryPage({searchParams: {search}}:{searchParams: {search: string}}) {
  const searchExpression = `resource_type:image${
    search
      ? ` AND (tags:${search} OR filename:${search} OR context.custom.my_field:${search})`
      : ""
  }`;
  const response = await (cloudinary.v2.search
  .expression(searchExpression)
  .with_field('tags')
  .sort_by('created_at','desc')
  .max_results(60)
  .execute()) as {resources: Props[]};
  return (
    <section>
    <div className="flex justify-between py-4 px-6 mt-10">
       <div>
        <h1 className="md:text-3xl text-xl font-bold"> Gallery </h1>
       </div>
       <div>
        <UploadButton />
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

export default GalleryPage