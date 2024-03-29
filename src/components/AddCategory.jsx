import React from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = React.useState();

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    onNewCategory(newInputValue);
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
