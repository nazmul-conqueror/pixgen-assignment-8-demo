"use client";
import { Card, CardFooter, Button, Chip } from "@heroui/react";
import { Heart, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PhotoCard = ({ photo }) => {
    const [liked, setLiked] = useState(false);

    return (
        <Card
            className="group relative w-full h-[300px] overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4 transition-all duration-300 hover:shadow-2xl"
            radius="lg"
        >
            {/* Category Badge */}
            <Chip
                size="sm"
                className="absolute top-3 left-3 z-20 bg-black/50 text-white backdrop-blur-md"
            >
                {photo.category}
            </Chip>

            {/* Image */}
            <div className="relative w-full h-full">
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

            {/* Stats (FIXED ✅) */}
            <div className="absolute top-3 right-3 z-20 flex gap-3 text-white text-xs bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                <span className="flex items-center gap-1">
                    <Heart size={12} className="text-red-400" />
                    {photo.likes}
                </span>
                <span className="flex items-center gap-1">
                    <Download size={12} />
                    {photo.downloads}
                </span>
            </div>

            {/* Footer */}
            <CardFooter className="absolute bottom-0 z-20 w-full flex items-center justify-between px-4 py-3">
                <div>
                    <p className="text-white text-sm font-semibold line-clamp-1">
                        {photo.title}
                    </p>
                    <p className="text-white/70 text-xs">{photo.model}</p>
                </div>

                {/* Like Button */}
                <Button
                    isIconOnly
                    radius="full"
                    size="sm"
                    onClick={(e) => {
                        e.stopPropagation();
                        setLiked(!liked);
                    }}
                    className={`transition-all ${liked
                            ? "bg-red-500 text-white scale-110"
                            : "bg-white/20 text-white hover:bg-red-500"
                        }`}
                >
                    <Heart size={16} className={liked ? "fill-white" : ""} />
                </Button>
              <Link href={`/all-photos/${photo.id}`} >  <Button
                    size="md"
                    variant="flat"
                    className="bg-white/20 text-white hover:bg-white/30"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log("View clicked", photo.id);
                    }}
                >
                    View
                </Button></Link>
            </CardFooter>
        </Card>
    );
};

export default PhotoCard;