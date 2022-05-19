import React from 'react';

export default function SingleProduct({productName, description, price, image}) {
  return (
    <section className="single-product">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="product-image">
                        <img src={image} alt={productName} className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="product-info">
                        <h1 className="name">{productName}</h1>
                        <h3 className="brief-info">Lorem consectetur adipisicing</h3>
                        <div className="d-flex justify-content-between">
                            <h3 className="price">{price}</h3>
                            <div className="rating d-flex">                
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <a href="#" className="text-success"> Write a review</a>
                        </div>
                        <p className="full-info">{description}</p>
                    </div>
                    <form action="#">
                        <div className="form-row">
                            <div className="form-group col-md-8">
                                <label htmlFor="size">Size:</label>
                                <select className="custom-select custom-select-lg mb-3" id="size">
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="big">Big</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="qty">Quantity</label>
                                <select className="custom-select custom-select-lg mb-3" id="qty">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success btn-block text-uppercase py-2">Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

  )
}


//{}