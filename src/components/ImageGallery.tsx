import Image from "next/image"

export const ImageGallery = () => {
  return (
    <div className="flex gap-4 items-center justify-center p-8">
      <div className="w-80">
        <Image src="/portada/portada_1.png" width={200} height={200} alt="First image" className="w-full h-full object-cover" />
      </div>
      <div className="w-80">
        <Image src="/portada/portada_2.png" width={200} height={200} alt="Second image" className="w-full h-full object-cover" />
      </div>
      <div className="w-80">
        <Image src="/portada/portada_3.png" width={200} height={200} alt="Third image" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}