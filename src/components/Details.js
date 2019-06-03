import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import Button from './Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {
                            id,
                            company,
                            img,
                            info,
                            price,
                            title,
                            inCart
                        } = value.detailProduct;
                        return (
                            <div className = "container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue">
                                        <h1>{title}</h1>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src = {img} className = "img-fluid" alt="product" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h3>model : {title}</h3>
                                        <h5 className="text-title text-uppercase text-muted mt-3 mb-3">
                                            made by : {company}
                                        </h5>
                                        <h5 className="text-blue">
                                            <strong>
                                                price : <span>$</span>
                                                {price}
                                            </strong>
                                        </h5>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product:
                                        </p>
                                        <p className="text-muted lead">{info}</p>
                                        <div>
                                            <Link to="/">
                                                <Button>
                                                    back to product
                                                </Button>
                                            </Link>
                                            <Button
                                                cart
                                                disabled = {inCart ? true : false}
                                                onClick = {() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}
                                            >
                                                {inCart ? "In Cart" : "Add to Cart"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </ProductConsumer>
        )
    }
}
