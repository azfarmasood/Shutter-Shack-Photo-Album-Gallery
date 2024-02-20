import { Button } from '@/components/ui/button';
import Link from "next/link";
import HeartSvg from '@/components/icons/HeartSvg';
import GallerySvg from '@/components/icons/GallerySvg';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import AvatarImage from "@/components/images/asserts/138787481.png";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Folders, ChevronDown } from "lucide-react" 
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import cloudinary from "cloudinary";
import { FolderData } from '@/components/widgets/albumsData';
import Search from '@/components/shared/Search/SearchComponent';
import Logo from '@/components/shared/Logo/Logo';

type SheetSide = (typeof SHEET_SIDES)[number]
const SHEET_SIDES = ["left"] as const
 


export default async function Sideheader(){
  const  { folders }  = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderData[]
  };
  return(
    <header className="top-0 sticky md:hidden block">
      {SHEET_SIDES.map((side) => (
  <Sheet key={side}>
  <SheetTrigger className='px-2 py-14'>
    <div className='border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 px-1 py-0.5'>
    <Menu className='w-6 h-6'/>
    </div>
  </SheetTrigger>
  <SheetContent side={side}>
    <SheetHeader>
    <div className='mt-20'>
          <div>
          <Link href={"/"} className='font-bold uppercase'>       
            <Logo/>
          </Link>
          </div>
            <div className="md:hidden block space-x-4 mt-5">
            <Avatar className='mx-auto'>
            <Image src={AvatarImage} alt="avatar" className="object-cover w-10 h-10 rounded-full"/>
            <AvatarFallback>AZ</AvatarFallback>
          </Avatar>
            </div>
            <div>
           <Search/>
          </div>
          </div>

        <div className="pb-12 h-full">
            <div className="space-y-4 py-4">
            <div className="py-2 px-3">
            <h2 className="mb-2 md:text-2xl font-semibold tracking-tight px-3">
            DISCOVER
            </h2>
            <div>
            <Link href="/gallery">
            <Button variant="ghost" className="w-full justify-start md:text-base text-sm ">
            <GallerySvg className='mr-2 w-5 h-5 dark:fill-white fill-black'/>
              Gallery
            </Button>
            </Link>
            <Link href={"/albums"} className='flex items-center'>
            <Button variant="ghost" className="w-full justify-start md:text-base text-sm">
              <Folders className='mr-2 w-5 h-5'/>
              Albums
              <div>
            <DropdownMenu>
            <DropdownMenuTrigger className='pl-2 flex items-center px-6'>
              <ChevronDown className='w-6 h-6'/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 ">
                {folders.map((items) => {
                  return(
                    <Link href={`/albums/${items.path}`} key={items.path} className=''>
                    <h1 className="py-2 font-bold text-black">
                      {items.name}
                    </h1>
                    </Link>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
            </div>
            </Button>
            </Link>
            <Link href={"/favourites"}>
            <Button variant="ghost" className="w-full justify-start md:text-base text-sm">
              <HeartSvg className='mr-2 w-5 h-5'/>
              Favourites
            </Button>
            </Link>
            </div>
            </div>
            </div>
            </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
      ))}
    </header>
  )
}
