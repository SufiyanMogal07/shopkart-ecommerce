import Image from "next/image";

export default async function Page({ params }) {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
        cache: "no-store"
    });

    const result = await res.json();

    const product = result.data;

    return <div className="common-page px-10!">
        <div className="flex flex-wrap gap-5 relative mt-5">
            <div className="h-[60vh] aspect-video relative">
                <Image className="object-cover" src={product.imageUrl} fill alt={product.title + " image"} />
            </div>
            <div className="px-8 pt-10">
                <h1 className="text-4xl font-semibold mb-6">{product.title}</h1>
                <h2 className="text-3xl font-semibold text-purple-950 mb-4">MRP: ₹{product.price}</h2>
                <p className="text-lg text-purple-800">Free Delivery</p>
                <p className="text-lg my-4  ">{product.description}</p>
                <div className="flex gap-x-3">
                    <button className="px-3 py-1 bg-violet-600 text-white border-none rounded-md">Add to Cart</button>
                    <button className="px-3 py-1 bg-fuchsia-500 text-white border-none rounded-md">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
}

