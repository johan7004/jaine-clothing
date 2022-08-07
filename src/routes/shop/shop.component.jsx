import { React, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesContext } from "../../components/contexts/categories.context";
import "./shop.style.css";
import CategoriesPreview from "./../categories-preview/categories-preview.component";
import Category from "./../category/category.component";
export default function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
