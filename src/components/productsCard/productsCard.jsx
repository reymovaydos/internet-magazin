import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import { Box, Rating } from "@mui/material";
import { Button } from "@mui/material";
import './productsCard.scss'
export const ProductsCard = (props) => {
    const { image, title, price } = props;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const item = { ...props };
        dispatch(addItem(item));
        setIsAdded(true)
        setTimeout(() => {
            setIsAdded(false);
        }, 3000)
    }
    const [value, setValue] = useState(2)
    return (
        <div>
            <div className="products-card" style={{ boxShadow: '4px 4px 4px #aaa', width: '100%' }}>
                <figure>
                    <img src={image} alt="" width="100%" />
                </figure>
                <Box>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                <h2>{title}</h2>
                <h3 className="text">{price.toLocaleString()}</h3>
                <Button className="btn-animated" onClick={handleAddToCart}>{isAdded ? 'Added' : 'Add to cart'}</Button>
            </div>
        </div>
    )
}