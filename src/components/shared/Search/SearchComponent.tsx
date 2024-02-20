"use client";

import SearchComponent from "@/components/shared/SearchComponent/Search";
import { usePathname } from "next/navigation";

interface SearchParams {
    initialSearch: string
  }
  

function Search() {
    const search:SearchParams = { initialSearch: '' } 
    const pathName = usePathname();
  return (
    <div>
      {pathName !== "/" && pathName !== "/albums" && <SearchComponent initialSearch={search.initialSearch}/>}
    </div>
  )
}

export default Search
