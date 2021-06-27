import React, { useEffect } from 'react'
import "./Products.css"
import axios from "axios"
import{ SetProducts } from "../../redux/actions/ProductActions"
import ProductComponent from './ProductComponent'
import { useSelector, useDispatch } from "react-redux"

const ProductListing = () => {

    const products = useSelector(state => state)
    const disPatch = useDispatch()

    const facthProducts = async() => {
        const res = await axios.get(`https://fakestoreapi.com/products`)
        .catch((err)=> {
            console.log(err);
        })
        disPatch(SetProducts(res.data))
    }

    useEffect(()=>{
        facthProducts()
    },[])

    console.log("all Products : ", products);

    return (
        <>
        <section className="allProductSection">
            <div className="container">
                <div className="row">
                    <ProductComponent />
                </div>
            </div>
        </section>
        </>
    );
}

export default ProductListing;