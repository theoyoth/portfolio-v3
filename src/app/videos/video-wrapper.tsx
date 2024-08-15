import BlurHover from "@/components/blur-hover"
import Image from "next/image"

const VideoWrapper = ({src,title,href,w,h}:{src:string,title:string,href:string,w:number,h:number}) => {
  return (
    <div className="relative">
      <BlurHover>
      <a href={`https://www.youtube.com/watch?v=${href}`} target="_blank">
      <div className="relative dark:bg-zinc-950 bg-zinc-300 p-2 rounded-xl">
        <Image
          src={src}
          alt="youtube thumbnail"
          width={w}
          height={h}
          style={{
            borderRadius: "12px",
          }}
        />
        <span className="text-xs">{decodeURI(title.split("|")[0])}</span>
        </div>
      </a>
      </BlurHover>
    </div>
  )
}

export default VideoWrapper