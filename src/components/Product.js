import '../assets/CSS/layout.css';
import React, { useState } from 'react';
export default function Product({ flower, addToCart}){
    
    const [quantity, setQty] = useState(0);

    const handleToCart = () => {
        if (quantity > 0) {
            addToCart(flower, quantity);
            setQty(0); 
        }
    };
    
    return(
        <div className="grid-item">

            <div class="card">
            <img src={require('../assets/image/'+flower.img)} alt={flower.name} />
                <div class="card-body">
                    <h5 class="card-title">Price:{flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQty(Number(e.target.value))}/>
                    </div>
                    <button class="card-button" onClick={handleToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}