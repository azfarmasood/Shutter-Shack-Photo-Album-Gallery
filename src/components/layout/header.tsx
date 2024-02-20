import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";
import AvatarImage from "@/components/images/asserts/138787481.png";
import Link from "next/link"
import { Button } from '@/components/ui/button';
import GallerySvg from '@/components/icons/GallerySvg';
import HeartSvg from '@/components/icons/HeartSvg';
import { Folders,ChevronDown } from 'lucide-react';
import HeaDer from "@/components/shared/useState/useState";
import Logo from "@/components/shared/Logo/Logo";
import Search from "@/components/shared/Search/SearchComponent";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import cloudinary from "cloudinary";
import { FolderData } from '@/components/widgets/albumsData';

async function Header() {
  const  { folders }  = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderData[]
  };
  return (
      <HeaDer>
    <header>
        <div className=" border-b py-2">
          <div className="flex justify-between h-16 items-center">
            <Logo/>
            <ul className="flex items-center space-x-4 px-10">
            <Link href="/gallery" >
            <Button variant="ghost" className="w-full justify-start md:text-base text-sm ">
            <GallerySvg className='mr-2 w-5 h-5 dark:fill-white fill-black'/>
              Gallery
            </Button>
            </Link>
            <Link href={"/albums"} className="flex items-center">
            <Button variant="ghost" className="w-full justify-start md:text-base text-sm">
              <Folders className='mr-2 w-5 h-5'/>
              Albums
            </Button>
            <div>
            <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center'>
              <ChevronDown className='w-6 h-6'/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full grid grid-cols-3 z-999 gap-2 mt-4">
            {folders.map((items) => {
              return(
                <Link href={`/albums/${items.path}`} key={items.path} className={`${items.name === "Animals" ? "pl-3": ""}`}>
                <h1 className="font-bold text-black">
                  {items.name}
                </h1>
                </Link>
              )
            })}
            </DropdownMenuContent>
          </DropdownMenu>
            </div>
            </Link>
            <Link href={"/favourites"}>
            <Button variant="ghost" className="w-full justify-start md:text-base text-sm">
              <HeartSvg className='mr-2 w-5 h-5'/>
              Favourites
            </Button>
            </Link>
            <Avatar>
            <Image src={AvatarImage} alt="avatar"  className="object-cover w-10 h-10 rounded-full"/>
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
            </ul>
            </div>
          </div>
          <div>
          <Search/>
          </div>
    </header>
    </HeaDer>
  )
}

export default Header