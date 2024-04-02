import React from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = React.useState([])

    const onAddCategory = (newCategory) => {
        console.log('onAddCategory: ', newCategory)
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(event) => onAddCategory(event)} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}
