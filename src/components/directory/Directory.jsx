import React from 'react'
import CategoryItem from './../category-item/CategoryItem'
import './directory.style.css'
export default function Directory({categories}) {
  return (
    <div className="directory-container">
    {categories.map((category) => {
      return (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      );
    })}
    ;
  </div>
  )
}
