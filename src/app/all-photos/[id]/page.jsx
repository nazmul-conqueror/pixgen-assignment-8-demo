import Image from "next/image";
import { getAllPhotos } from "@/lib/data";
import { Heart, Download } from "lucide-react";

const PhotosDetailsPage = async ({ params }) => {
    const { id } =await params;

    const photos = await getAllPhotos();
    const photo = photos.find((p) => p.id === parseInt(id));

    // ✅ Handle not found
    if (!photo) {
        return (
            <div className="text-center py-20 text-xl font-semibold">
                Photo not found 😢
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            {/* Image Section */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Info Section */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Left */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">
                        {photo.title}
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Model: {photo.model}
                    </p>
                    <p className="text-gray-400 text-sm">
                        Resolution: {photo.resolution}
                    </p>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Heart className="text-red-500" size={18} />
                        {photo.likes}
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <Download size={18} />
                        {photo.downloads}
                    </div>

                    <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                        Download
                    </button>
                </div>
            </div>

            {/* Prompt */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Prompt</h2>
                <p className="text-gray-700 leading-relaxed">
                    {photo.prompt}
                </p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
                {photo.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

        </div>
    );
};

export default PhotosDetailsPage;