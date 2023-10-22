import styles from "@/styles/Home.module.css";
import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Home() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const res = await axios.get(`/products`);
    const nextProduct = res.data.results;
    setProduct(nextProduct);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);
  return (
    <>
      {/* learn.codeit.kr */}
      <div className={styles.title}>코드잇 몰</div>
      <SearchForm></SearchForm>
      <ProductList products={product}></ProductList>
    </>
  );
}
