import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";

const Search = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  const getProduct = async (query) => {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProduct = res.data.results;
    setProduct(nextProduct);
  };

  useEffect(() => {
    getProduct(q);
  }, [q]);

  return (
    <div>
      <div className={styles.title}> {q}Search 페이지</div>
      <div>
        <SearchForm initialValue={q}></SearchForm>
        <div>{q} 검색 결과</div>
        <ProductList products={product}></ProductList>
      </div>
    </div>
  );
};

export default Search;
