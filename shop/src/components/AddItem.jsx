// AddItem.js
import axios from "axios";
import React, { useState } from "react";

function AddItem({ itemData, setItemData }) {
  const [fetchNum, setFetchNum] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const getProduct = () => {
    if (fetchNum === 0) {
      setLoading(true);
      axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((response) => {
          setItemData([...itemData, ...response.data]);
          setLoading(false);
        })
        .catch((error) => {
          console.log("실패함:", error);
          setLoading(false);
        });
    } else if (fetchNum === 1) {
      setLoading(true);
      axios
        .get("https://codingapple1.github.io/shop/data3.json")
        .then((response) => {
          setItemData([...itemData, ...response.data]);
          setLoading(false);
        })
        .catch((error) => {
          console.log("실패함:", error);
          setLoading(false);
        });
    } else {
      window.alert("모든 상품을 불러왔습니다");
      return;
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : null}
      <button
        onClick={() => {
          getProduct();
          setFetchNum(fetchNum + 1);
        }}
      >
        상품 더보기
      </button>
    </>
  );
}

export default AddItem;
