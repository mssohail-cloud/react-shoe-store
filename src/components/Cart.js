import React, { Component } from 'react'
import formateCurrenty from '../util';

export default class Cart extends Component {
    render() {

        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length === 0? <div className="cart cart-header">Cart is empty</div> : 
                <div className="cart cart-header">You have {cartItems.length} items in Cart </div>}

                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item._productId}>
                                <div>
                                    <img src={item.image} alt={item.name} />

                                </div>
                                <div>
                                    {item.name}
                                </div>
                                <div className="right">
                                    {formateCurrenty(item.price)} x {item.count} {" "}
                                     <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                    Remove
                                </button>
                                </div>
                               
                            </li>
                        ))}
                    </ul>
                     
                </div>
                {cartItems.length !==0 && 
                 <div className="cart">
                 <div className="total">
                     <div> Total: {" "}{formateCurrenty(cartItems.reduce((a,c) => a + c.price * c.count, 0))}</div>

                 </div>
                 {"  "}<button className="button primary">Proceed</button>
             </div>
                }
               
            </div>
            
        )
    }
}
