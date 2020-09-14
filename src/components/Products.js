import React, { Component } from 'react'
import formateCurrenty from '../util'

export default class Products extends Component {
    render() {
        return (
            <div>

                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._productId}>
                            <div className="product">
                                <a href={"#" + product._productId}>
                                    <img src={product.image} alt={product.name} />
                                    <p>
                                        {product.name}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {formateCurrenty(product.price)}
                                    </div>
                                    <button onClick={() => this.props.addToCart(product)} className="button primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        )
    }
}
