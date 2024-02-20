"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Search } from 'lucide-react';
import { useRouter } from "next/navigation";

const SearchComponent = ({initialSearch}: {initialSearch: string}) => {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const [isForMobileScreen, setIsForMobileScreen] = useState(false);
  const router = useRouter();

    useEffect(() => {
        setTagName(initialSearch)
    },[initialSearch]);

  useEffect(() => {
    const handleResize = () => {
      setIsForMobileScreen(typeof window !== "undefined" ? window.innerWidth <= 786 : true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagName(event.currentTarget.value);
  }

  const handleForm = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
    router.refresh();
  }

  return (
    <header className="md:border-b py-4 sticky top-0 px-8 md:mt-0 mt-2">
      <form onSubmit={handleForm}>
        <div className="relative col-span-3 md:mx-auto md:w-1/2 w-full">
          <Input
            id="tag-name"
            type="text"
            value={tagName}
            placeholder={isForMobileScreen ? "Search by Tags" : "Search Image By Your Tag Names"}
            onChange={handleSearch}
            className="pl-4 pr-10 py-2 rounded-full border shadow-sm focus:outline-none w-full"
          />
          <div className="absolute inset-y-0 right-0 md:pr-6 pr-4 flex items-center" >
            <Search className="h-5 w-5 text-gray-500" type="submit"/>
          </div>
        </div>
      </form>
    </header>
  )
}

export default SearchComponent;