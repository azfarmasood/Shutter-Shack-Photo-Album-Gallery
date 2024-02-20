import cloudinary from "cloudinary"
import { Props } from "@/components/widgets/Gallery"; 
import FavouriteRemove from "@/components/shared/FavouriteRemove/FavouriteRemove";


async function FavouritePage() {
  const searchExpression = `resource_type:image AND tags=favourite`
  const response = await (cloudinary.v2.search
  .expression(searchExpression)
  .with_field('tags')
  .sort_by('created_at','desc')
  .max_results(60)
  .execute()) as {resources: Props[]};
  return (
    <section>
      {response.resources.length > 0 ? (
        <main>
        <div className="flex justify-between py-4 px-6 mt-10">
       <div>
        <h1 className="md:text-3xl text-xl font-bold"> Favourites </h1>
       </div>
    </div>
    <div>
      <FavouriteRemove resource={response.resources}/>
    </div>
      </main>
      ):(
        <div>
          <h1 className="md:text-3xl font-bold text-xl w-96 px-6">You dont have any</h1>
          <h1 className="md:text-3xl font-bold text-xl w-96 px-6 mt-2">favourite items yet</h1>
        </div>
      )}
    
    </section>
  )
}

export default FavouritePage