import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from '../../redux/categorySlice'
import "./Category.css"

const Category = ({setCategory}) => {

    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='categories-container'>
            <h3 className='categories-header'>Categories</h3>

            <ul className='categories-list'>
                <li className='categories-list-item' onClick={() => setCategory('')}>all</li>
                {categories?.map((category, i) => (
                    <li className='categories-list-item' onClick={() => setCategory(category)} key={i}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default Category