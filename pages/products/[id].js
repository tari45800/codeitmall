import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SizeReviewList from "@/components/\bSIzeReviewList";

const Products = () => {
  const [product, setProduct] = useState();
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getProduct = async (targetId) => {
    const res = await axios.get(`/products/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  };

  const getSizeReviews = async (targetId) => {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  };

  useEffect(() => {
    getProduct(id);
    getSizeReviews(id);
  }, [id]);

  if (!product) return;

  return (
    <div>
      <div>
        <Link href="/">집이여</Link>
      </div>

      <div>
        <h1>{product.name}</h1>
        <img src={product.imgUrl} alt={product.imgUrl} />
        <SizeReviewList sizeReviews={sizeReviews}></SizeReviewList>
      </div>
    </div>
  );
};

export default Products;
