import Image from "next/image";

export const ImageComp = ({ src, alt }:{src:string,alt:string}) => (
  <Image
    src={src}
    alt={alt}
    // width={500}
    // height={500}
    fill
    sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw" 
    priority
    className="object-cover rounded-lg"
  />
);
