"use client";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';
import  Dialogs  from "@/components/shared/Dialog/Dialog";
import { Props } from "@/components/widgets/Gallery";
import { useState } from "react";



export default function DropDownMenu({ image }: { image: Props }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline2" size={"sm"} className="px-2 py-1">
          <Menu className="w-5 h-5 dark:text-black text-white"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <div className="flex items-center">
        <Dialogs image={image} onOpen={()=>setOpen(false)}/>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
