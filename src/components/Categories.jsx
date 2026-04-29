import { Button } from "@heroui/react";
import Link from "next/link";

const Categories = async() => {
    const res = await fetch('https://pixgen-assignment-8-demo.vercel.app/category.json')
    const categories =await res.json();
   

    return (
        <div className="flex gap-3 mt-6">
        {categories.map(c => <Link href={`?category=${c.name}`} key={c.id}>
            <Button>{c.name}</Button></Link>)
            
           }
        </div>
    );
};

export default Categories;