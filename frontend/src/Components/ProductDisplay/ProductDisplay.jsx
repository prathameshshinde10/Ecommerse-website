import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";


const ProductDisplay = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-image-list">
                <img src={product.image} alt="image-list" />
                <img src={product.image} alt="image-list" />
                <img src={product.image} alt="image-list" />
                <img src={product.image} alt="image-lists" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="product-image" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h2>{product.name}</h2>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="star-icon" />
                <img src={star_icon} alt="star-icon" />
                <img src={star_icon} alt="star-icon" />
                <img src={star_icon} alt="star-icon" />
                <img src={star_dull_icon} alt="star-dull-icon" />
                <p>(134)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-old-price">${product.old_price}</div>
                <div className="productdisplay-right-new-price">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Experience comfort and durability with our luxurious cotton blend fabric, perfect for any occasion. Available in vibrant colors and elegant patterns, it offers breathability, easy care, and a beautiful drape.
            </div>
            <div className="productdisplay-right-size">
                <h2>Select Size</h2>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div >
            <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span> Women, T-Shirt, CropTop</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
        </div>
    </div>
  )
};

export default ProductDisplay;
