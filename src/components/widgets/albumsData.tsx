import cloudinary from "cloudinary"
import AlbumsCards from "@/components/data_components/albumsCard";

export interface FolderData {
  name: string;
  path: string;
}


async function Album() {
  const  { folders }  = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderData[]
  };
  return (
    <section>
    <div className="py-4 px-6">
       <div>
        <h1 className="md:text-3xl text-xl font-bold"> Albums </h1>
       </div>
    </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 gap-y-6 px-5">
      {folders.map((folder) => {
        return(
          <AlbumsCards key={folder.path} folder={folder} />
        )
      })}
    </div>
    </section>
  )
}

export default Album;