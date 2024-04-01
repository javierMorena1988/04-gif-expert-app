import React from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = React.useState()

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
        if (newInputValue.length <= 1) return

        onNewCategory(newInputValue)
        // setCategories((categories) => [inputValue, ...categories]);
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
