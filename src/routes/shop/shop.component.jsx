import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";

import SHOP_DATA from "../../shop-data";

import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategoriesStart());
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      addCollectionAndDocuments("categories", SHOP_DATA);
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
