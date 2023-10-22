import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchForm = ({ initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      router.push(`/`);

      // 리턴을 하지 않으면 밑에 코드도 실행이 된다.
      return;
    }
    router.push(`/Search?q=${value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleInput} />
        <button>검색</button>
      </form>
    </div>
  );
};

export default SearchForm;
