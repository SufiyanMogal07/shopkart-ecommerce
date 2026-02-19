import ProductPage from "@/pages/productpage";

export default async function Page({ params }) {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
        cache: "no-store"
    });

    const result = await res.json();

    const product = result.data;

    return <div>
        <ProductPage product={product}/>
    </div>
}

