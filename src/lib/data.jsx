 export const getAllPhotos = async() =>{
 const res = await fetch('https://pixgen-assignment-8-demo.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 9)
    return topPhotos;
  
}

