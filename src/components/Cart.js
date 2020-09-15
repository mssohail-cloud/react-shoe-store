import React, { Component } from 'react'
import formateCurrenty from '../util';

export default class Cart extends Component {

    constructor(props){
        super(props);

        this.state={
            name: "",
            email:"", 
            address:"",
            showCheckout:false,
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    createOrder = (e) => {
        e.preventDefault();

        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }

        this.props.createOrder(order);
    }


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
                 <button onClick={() => {this.setState({showCheckout:true})}} className="button primary">Proceed</button>
             </div>
                }

                {this.state.showCheckout && (
                    <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Email</label>
                                    <input name="email" type="email" onChange={this.handleInput} required></input>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" onChange={this.handleInput} required></input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input name="address" type="text" onChange={this.handleInput} required></input>
                                </li>
                                <li>
                                    <button type="submit" className="button primary">CheckOut</button>
                                </li>
                            </ul>
                        </form>
                        </div>
                )}
               
            </div>
            
        )
    }
}
