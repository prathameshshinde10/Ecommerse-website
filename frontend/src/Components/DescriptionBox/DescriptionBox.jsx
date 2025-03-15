import React from "react";
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to BestShop, your premier online destination for high-quality, stylish apparel and accessories. Our carefully curated collection includes everything from sophisticated dresses and sharp suits to casual wear and statement pieces, all crafted from premium materials. Each item is designed with meticulous attention to detail, ensuring you look and feel your best.</p>
            <p>At BestShop, we pride ourselves on providing an exceptional shopping experience. Our easy-to-navigate website, secure checkout process, and outstanding customer service make finding and purchasing the perfect items a breeze. Discover the ideal blend of fashion and functionality with our exclusive offerings, tailored to elevate your wardrobe for any occasion.</p>
        </div>
    </div>
  )
};

export default DescriptionBox;
