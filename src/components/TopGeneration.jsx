import { getAllPhotos } from "@/lib/data";
import PhotoCard from "./PhotoCard";

const TopGeneration = async () => {
    // const res = await fetch('https://pixgen-assignment-8-demo.vercel.app/data.json')
    // const photos = await res.json()
    // const topPhotos = photos.slice(0, 9)
    // console.log(topPhotos);
    const topPhotos = await getAllPhotos()

    return (
     <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 p-4">
  {topPhotos.map((item) => (
    <PhotoCard key={item.id} photo={item} />
  ))}
</div>
    );
};

export default TopGeneration;