import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import ShopDirectory from "../../components/shop-directory/shop-directory.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";

import SHOP_DATA from "../../shop-data";

import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

// The Shop Router
const Shop = () => {
  const dispatch = useDispatch();

  // Getting back the firestore data
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  // Update the SHOP_DATA on firestore database
  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     addCollectionAndDocuments("categories", SHOP_DATA);
  //     console.log("donnnnne");
  //   };

  //   getCategoriesMap();
  // });

  return (
    <Routes>
      {/* Shop Component */}
      <Route index element={<ShopDirectory />} />
      {/* Nested Shop Categories Components Routes (Hats, jackets, etc.) */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
