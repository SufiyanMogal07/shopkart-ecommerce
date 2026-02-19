"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/others/productcard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

      if (!response.ok) {
        throw new Error("Failed to Fetch Products!");
      }
      let result = await response.json();

      if(result.success) {
        setProducts(result.data);
      } else {

      }

    } catch (err) {
      let errMessage = "Error while fetching products!";
      console.error(errMessage, err);
      setError(errMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <h2 className="text-center text-3xl mt-10">Fetching Products...</h2>
      </div>
    );
  }

  console.log(products);
  return (
    <div className="common-page py-5 px-10!">
      {error && (
        <h2 className="text-center mt-10 text-2xl text-red-400 font-semibold">
          {error}
        </h2>)}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pt-3 px-4">
          {products.map((item) => {
            return <ProductCard data={item} key={item.id}/>
          })}
        </div> 
    </div>
  );
}
