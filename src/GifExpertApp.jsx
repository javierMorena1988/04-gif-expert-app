import React from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = React.useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    // categories.push('valorant')
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Valorant'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
        // <div key={category}>
        //   <h3> {category} </h3>
        //   <li> {category} </li>
        // </div>
      ))}
    </>
  );
};
