import Hero from "@/components/widgets/Hero";
import { Loader2 } from "lucide-react";
import { Suspense } from "react"

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="flex justify-center items-center mt-48"><Loader2 className='animate-spin w-8 h-8' /></div>}>
      <Hero/>
      </Suspense>
    </main>
  );
}
