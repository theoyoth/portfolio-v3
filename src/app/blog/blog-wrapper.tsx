import BlurHover from "@/components/blur-hover"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

type post = {
  title:string,
  date:string,
  slug:string,
}

const BlogWrapper = ({post}:{post:post}) => {
  return (
    <div className="relative">
    <BlurHover>
      <Link href={post?.slug}>
        <div className="rounded-lg py-2 px-4 w-max dark:bg-zinc-950 relative">
          <p>{post?.title}</p>
          <p className="text-xs">{formatDate(post?.date)}</p>
        </div>
      </Link>
    </BlurHover>
    </div>
  )
}

export default BlogWrapper