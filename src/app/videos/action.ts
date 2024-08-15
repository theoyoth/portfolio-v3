export type ytType = {
  id: { videoId: string },
  snippet: {
      title: string,
      thumbnails?: {
        medium?:{
          url:string,
          width:number,
          height:number,
        }
      }
    }
}

export const getYoutube = async () => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?maxResults=6&key=${process.env.YOUTUBE_API}&channelId=UCd1DGoZCWy1xPX1K7WvVvFg&part=snippet&order=date`
  );

  const data = await res.json();
  return data?.items;
}