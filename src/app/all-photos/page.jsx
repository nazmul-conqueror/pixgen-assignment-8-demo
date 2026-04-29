import Categories from '@/components/Categories';
import PhotoCard from '@/components/PhotoCard';
import { getAllPhotos } from '@/lib/data';
import React from 'react';

const AllPhotosPage = async ({ searchParams }) => {
    const { category } = await searchParams;
    const photos = await getAllPhotos()
    const filteredPhotos = category ? photos.filter(photo => photo.category?.toLowerCase() == category.toLowerCase()) : photos



    return (
        <div>
            <Categories />
            <h1 className='font-bold text-3xl mt-4'>ALL Photos</h1>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-16 p-4">


                {filteredPhotos.map((item) => (
                    <PhotoCard key={item.id} photo={item} />
                ))}
            </div></div>
    );
};

export default AllPhotosPage;