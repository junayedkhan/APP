import React from 'react'
import "./Products.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProductComponent = () => {

    const products = useSelector(state => state.AllProducts.products)

    return (
        <>
        {products.map((props, index) => {
        const{id, title, image} = props
            return(
                <div className="col-lg-6 col-md-12 col-sm-12" key={index}>
                    <NavLink className="productLink" exact to={`/product/${id}`}> 
                        <div className="product">
                            <div className="productTitle">
                                <h4 className="productName">{title}</h4>
                                <ul>
                                    <li><span>Camera: </span><span>{}</span></li>
                                    <li><span>RAM: </span><span>{}</span></li>
                                    <li><span>ROM: </span><span>{}</span></li>
                                    <li><span>Price...</span></li>
                                </ul>
                            </div>
                            <div className="ProdcutImg">
                                <img src={image} alt="product" width="100%" height="100%"/>
                            </div>
                        </div>
                    </NavLink>
                </div>
                    )
                })}
        </>
    );
}

export default ProductComponent;        