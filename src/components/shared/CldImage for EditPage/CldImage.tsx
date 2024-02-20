"use client";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowDownToLine } from "lucide-react";

export default function CldImageEditPage({ searchParams: { publicId } }: { searchParams: { publicId: string } }) {
  const [transformation, setTransformation] = useState<
  undefined | "generative-fill" | "blur" | "grayscale" | "pixelate" | "removebackground" | "opacity" | "tint"
  >();
  const [setDownload, isSetDownload] = useState(false);
  const handleDownloadGenrativeFill = async () => {
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/c_crop,w_500,h_400,g_auto/f_auto,q_auto/v1/${publicId}`;
    try {
      const response = await fetch(imageUrl);
      const downloadOption = await response.blob();
      const downloadURL = window.URL.createObjectURL(downloadOption);
      const downloadCreation = document.createElement('a');

      downloadCreation.style.display = 'none';
      downloadCreation.href = downloadURL;
      downloadCreation.download = `${publicId}.jpg`;
      document.body.appendChild(downloadCreation);
      downloadCreation.click();
      window.URL.revokeObjectURL(downloadURL);
      document.body.removeChild(downloadCreation);
    } catch (error) {
      console.log(`An Error Occurred Downloading an Image`, error);
    }
  };
  const handleDownloadRemoveBackGround = async () => {
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/e_background_removal/c_limit,w_500/f_auto/${publicId}`;
    try {
      const response = await fetch(imageUrl);
      const downloadOption = await response.blob();
      const downloadURL = window.URL.createObjectURL(downloadOption);
      const downloadCreation = document.createElement('a');

      downloadCreation.style.display = 'none';
      downloadCreation.href = downloadURL;
      downloadCreation.download = `${publicId}.jpg`;
      document.body.appendChild(downloadCreation);
      downloadCreation.click();
      window.URL.revokeObjectURL(downloadURL);
      document.body.removeChild(downloadCreation);
    } catch (error) {
      console.log(`An Error Occurred Downloading an Image`, error);
    }
  };
  const handleDownloadBlurImage = async () => {
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/c_limit,w_500/e_blur:800/f_auto/q_auto/v1/${publicId}`;
    try {
      const response = await fetch(imageUrl);
      const downloadOption = await response.blob();
      const downloadURL = window.URL.createObjectURL(downloadOption);
      const downloadCreation = document.createElement('a');

      downloadCreation.style.display = 'none';
      downloadCreation.href = downloadURL;
      downloadCreation.download = `${publicId}.jpg`;
      document.body.appendChild(downloadCreation);
      downloadCreation.click();
      window.URL.revokeObjectURL(downloadURL);
      document.body.removeChild(downloadCreation);
    } catch (error) {
      console.log(`An Error Occurred Downloading an Image`, error);
    }
  };
  const handleDownloadGrayScaleImage = async () => {
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/c_limit,w_500/e_grayscale/f_auto/q_auto/v1/${publicId}`;
    try {
      const response = await fetch(imageUrl);
      const downloadOption = await response.blob();
      const downloadURL = window.URL.createObjectURL(downloadOption);
      const downloadCreation = document.createElement('a');

      downloadCreation.style.display = 'none';
      downloadCreation.href = downloadURL;
      downloadCreation.download = `${publicId}.jpg`;
      document.body.appendChild(downloadCreation);
      downloadCreation.click();
      window.URL.revokeObjectURL(downloadURL);
      document.body.removeChild(downloadCreation);
    } catch (error) {
      console.log(`An Error Occurred Downloading an Image`, error);
    }
  };
  const handleDownloadPixelateImage = async () => {
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/c_limit,w_500/e_pixelate/f_auto/q_auto/${publicId}`;
    try {
      const response = await fetch(imageUrl);
      const downloadOption = await response.blob();
      const downloadURL = window.URL.createObjectURL(downloadOption);
      const downloadCreation = document.createElement('a');

      downloadCreation.style.display = 'none';
      downloadCreation.href = downloadURL;
      downloadCreation.download = `${publicId}.jpg`;
      document.body.appendChild(downloadCreation);
      downloadCreation.click();
      window.URL.revokeObjectURL(downloadURL);
      document.body.removeChild(downloadCreation);
    } catch (error) {
      console.log(`An Error Occurred Downloading an Image`, error);
    }
  };
  const handleDownloadOpacityImage = async () => {
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/c_limit,w_500/e_pixelate/f_auto/q_auto/${publicId}`;
    try {
      const response = await fetch(imageUrl);
      const downloadOption = await response.blob();
      const downloadURL = window.URL.createObjectURL(downloadOption);
      const downloadCreation = document.createElement('a');

      downloadCreation.style.display = 'none';
      downloadCreation.href = downloadURL;
      downloadCreation.download = `${publicId}.jpg`;
      document.body.appendChild(downloadCreation);
      downloadCreation.click();
      window.URL.revokeObjectURL(downloadURL);
      document.body.removeChild(downloadCreation);
    } catch (error) {
      console.log(`An Error Occurred Downloading an Image`, error);
    }
  };
  const handleDownloadTintImage = async () => {
    const tintTransformation = `e_tint`;
    const imageUrl = `https://res.cloudinary.com/dzgnv5biw/image/upload/c_limit,w_500/${tintTransformation}/f_auto,q_auto/v1/${publicId}`;
    try {
      const response = await fetch(imageUrl);
      const downloadOption = await response.blob();
      const downloadURL = window.URL.createObjectURL(downloadOption);
      const downloadCreation = document.createElement('a');
  
      downloadCreation.style.display = 'none';
      downloadCreation.href = downloadURL;
      downloadCreation.download = `${publicId}.jpg`;
      document.body.appendChild(downloadCreation);
      downloadCreation.click();
      window.URL.revokeObjectURL(downloadURL);
      document.body.removeChild(downloadCreation);
    } catch (error) {
      console.log(`An Error Occurred Downloading the Tint Image`, error);
    }
  };
  
  const handleClearImage = () => {
    setTransformation(undefined)
    isSetDownload(false);
  };
  const handleBlur = () => {
    setTransformation("blur")
    isSetDownload(true);
  };
  const handleGrayScale  = () => {
    setTransformation("grayscale")
    isSetDownload(true);
  };
  const handlePixelate  = () => {
    setTransformation("pixelate")
    isSetDownload(true);
  };
  const handleOpacity  = () => {
    setTransformation("opacity")
    isSetDownload(true);
  };
  const handleTint  = () => {
    setTransformation("tint")
    isSetDownload(true);
  };
  const handleRemoveBackground  = () => {
      setTransformation("removebackground")
      isSetDownload(true);
  };

  
  
 

  return (
    <div>
      <div className="mt-4">
        <div>
          <h1 className="md:text-xl md:text-start text-center font-bold text-lg uppercase underline">Apply AI Tools in Your Image</h1>
        </div>
        <div className="flex items-center md:justify-start justify-center md:flex-row flex-col gap-4">
          <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"secondary"}
          onClick={() => {
            setTransformation("generative-fill")
            isSetDownload(true)
          }}
        >
          Apply Generative Fill
        </Button>
        <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"secondary"}
          onClick={handleBlur}
        >
          Apply Blur
        </Button>
        <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"secondary"}
          onClick={handleGrayScale}
        >
          Apply Grayscale
        </Button>
        <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"secondary"}
          onClick={handlePixelate}
        >
          Apply Pixelate
        </Button>
        </div>
        <div className="flex items-center md:justify-start justify-center md:flex-row flex-col gap-4 mt-4">
        <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"secondary"}
          onClick={handleRemoveBackground}
        >
         Apply Remove BackGround
        </Button>
        <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"secondary"}
          onClick={handleOpacity}
        >
          Apply Opacity
        </Button>
        <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"secondary"}
          onClick={handleTint}
        >
          Apply Tint
        </Button>
        <Button
          className="font-bold px-4 py-1.5 rounded-2xl md:w-auto w-full md:text-lg text-base mt-4 uppercase"
          size={"sm"}
          variant={"destructive"}
          onClick={handleClearImage}
        >
          Clear Image
        </Button>
        </div>
      </div>
      <div className="relative grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mt-6">
        <CldImage 
          src={publicId} 
          width={500} 
          height={400} 
          alt="Original Image" 
          className="w-full h-auto"
        />
        {transformation === "generative-fill" && (
          <div className="relative w-full">
            <CldImage 
              src={publicId} 
              width={500} 
              height={400} 
              crop="crop" 
              fillBackground={true}
              alt="An Image"  
              className="w-full h-auto"

            />
            {setDownload && (
              <button 
                onClick={handleDownloadGenrativeFill} 
                className="absolute top-2 right-2 w-6 h-6 text-white bg-black rounded-full cursor-pointer"
              >
                <ArrowDownToLine size={24} />
              </button>
            )}
          </div>
        )}
        {transformation === "blur" && (
          <div className="relative w-full">
            <CldImage 
              src={publicId} 
              width={500} 
              height={400} 
              blur={800}
              alt="An Image" 
              className="w-full h-auto"
            />
            {setDownload && (
              <button 
                onClick={handleDownloadBlurImage} 
                className="absolute top-2 right-2 w-6 h-6 text-white bg-black rounded-full cursor-pointer"
              >
                <ArrowDownToLine size={24} />
              </button>
            )}
          </div>
        )}
        {transformation === "grayscale" && (
          <div className="relative w-full">
            <CldImage 
              src={publicId} 
              width={500} 
              height={400} 
              grayscale={true}
              alt="An Image" 
              className="w-full h-auto"
            />
            {setDownload && (
              <button 
                onClick={handleDownloadGrayScaleImage} 
                className="absolute top-2 right-2 w-6 h-6 text-white bg-black rounded-full cursor-pointer"
              >
                <ArrowDownToLine size={24} />
              </button>
            )}
          </div>
        )}
        {transformation === "pixelate" && (
          <div className="relative w-full">
            <CldImage 
              src={publicId} 
              width={500} 
              height={400} 
              pixelate={true}
              alt="An Image" 
              className="w-full h-auto"
            />
            {setDownload && (
              <button 
                onClick={handleDownloadPixelateImage} 
                className="absolute top-2 right-2 w-6 h-6 text-white bg-black rounded-full cursor-pointer"
              >
                <ArrowDownToLine size={24} />
              </button>
            )}
          </div>
        )}
        {transformation === "removebackground" && (
          <div className="relative w-full">
            <CldImage 
              src={publicId} 
              width={500} 
              height={400} 
              removeBackground
              alt="An Image" 
              className="w-full h-auto"
            />
            {setDownload && (
              <button 
                onClick={handleDownloadRemoveBackGround} 
                className="absolute top-2 right-2 w-6 h-6 text-white bg-black rounded-full cursor-pointer"
              >
                <ArrowDownToLine size={24} />
              </button>
            )}
          </div>
        )}
        {transformation === "opacity" && (
          <div className="relative w-full">
            <CldImage 
              src={publicId} 
              width={500} 
              height={400} 
              opacity={"50"}
              alt="An Image" 
              className="w-full h-auto"
            />
            {setDownload && (
              <button 
                onClick={handleDownloadOpacityImage} 
                className="absolute top-2 right-2 w-6 h-6 text-white bg-black rounded-full cursor-pointer"
              >
                <ArrowDownToLine size={24} />
              </button>
            )}
          </div>
        )}
        {transformation === "tint" && (
          <div className="relative w-full">
            <CldImage 
              src={publicId} 
              width={500} 
              height={400} 
              tint
              alt="An Image" 
              className="w-full h-auto"
            />
            {setDownload && (
              <button 
                onClick={handleDownloadTintImage} 
                className="absolute top-2 right-2 w-6 h-6 text-white bg-black rounded-full cursor-pointer"
              >
                <ArrowDownToLine size={24} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}