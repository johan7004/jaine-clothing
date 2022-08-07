import React from 'react'
import DirectoryItem from './../directory-item/directory-item.component'
import './directory.style.css'
export default function Directory({categories}) {
  return (
    <div className="directory-container">
    {categories.map((category) => {
      return (
        <DirectoryItem key={category.id} category={category}></DirectoryItem>
      );
    })}
    ;
  </div>
  )
}
