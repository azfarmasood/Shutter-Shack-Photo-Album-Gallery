"use client";

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import { FolderPlus } from "lucide-react" 
import { ImagePlus } from 'lucide-react';
import { useState, useEffect } from "react";
import { Props } from "@/components/widgets/Gallery";
import AlbumData from "@/components/utilities/Album";
import { useRouter } from "next/navigation";

export default function Dialogs({ image, onOpen }: { image: Props, onOpen: () => void }) {
  const [nameOFYourAlbum, setAddAlbum] = useState('');
  const [isOpen, setIsOpen] = useState(false);

    const handleAddAlbum = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddAlbum(e.currentTarget.value)
    }

    const handleSubmit = async () => {
      onOpen();
      setIsOpen(false);
      await AlbumData(image, nameOFYourAlbum)
      router.refresh();
    }

    const router = useRouter();

  return (
    <div>
    <Dialog open={isOpen} onOpenChange={(isOpenState) => {
      setIsOpen(isOpenState)
      if(!isOpenState){
        onOpen();
      }
    }}>
      <DialogTrigger asChild>
        <Button variant="outline2" size={"sm"}>
        <FolderPlus className="w-4 h-4"/>
        <DropdownMenuLabel className="font-bold text-sm">Add To Albums</DropdownMenuLabel>
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[670px] max-w-[487px]">
        <DialogHeader>
          <DialogTitle>Add To Albums</DialogTitle>
          <DialogDescription>
            Save Images To Your Albums
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="sm:text-right text-center">
              Add Collection Name
            </Label>
            <Input
            onChange={handleAddAlbum}
            id="name"
            placeholder="Type The Name of Your Album"
            value={nameOFYourAlbum}
            className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="font-bold" onClick={handleSubmit}>
            <ImagePlus className="w-4 h-4 mr-2 font-bold"/>
            Add To Album
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
