import { Button } from "@/components/ui/button"
import { Card,CardDescription,CardFooter,CardHeader,CardTitle, } from "@/components/ui/card"
import { FolderData } from "@/components/widgets/albumsData"; 
import Link from "next/link"

export default function AlbumsCards({folder}: {folder:FolderData}) {
  return (
    <div>
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription className="pt-1">View Your Images To Your Albums</CardDescription>
      </CardHeader>
      <CardFooter className="flex">
        <Link href={`/albums/${folder.name}`}>
        <Button className="font-bold">
          View Albums
        </Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
