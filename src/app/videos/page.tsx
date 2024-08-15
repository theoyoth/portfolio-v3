import LayoutAnimation from "@/components/layout-animation"
import { IoLogoYoutube } from "react-icons/io"
import { getYoutube, ytType } from "./action"
import VideoWrapper from "./video-wrapper"

const Videos = async () => {
  const data = await getYoutube()

  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
        <section className="w-3/4 m-auto">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-blue-600">
              Latest Posts on youtube
            </h1>
            <IoLogoYoutube size={20} />
          </div>
          <div className="w-11/12 mt-2 m-auto grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 place-items-baseline">
            <VideoDetails videoDetail={data} />
          </div>
        </section>
      </LayoutAnimation>
    </div>
  )
}

export default Videos

const VideoDetails = ({videoDetail}:{videoDetail:ytType[]}) => {
  return (
    <>
      {videoDetail.map((video) => (
        <VideoWrapper
          key={video?.id?.videoId}
          src={video?.snippet?.thumbnails?.medium?.url as string}
          title={video?.snippet?.title}
          href={video?.id?.videoId}
          w={video.snippet?.thumbnails?.medium?.width as number}
          h={video.snippet?.thumbnails?.medium?.height as number}
        />
      ))}
    </>
  )
}