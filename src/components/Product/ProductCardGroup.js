import React, {useState} from 'react';
import '../../App.css';

export default function ProductCardGroup( props) { 
    
  return (
    <section className="all-products">
        <div className="container">
            <div className="row">
                <section className="new-products">
                    <div className="row d-flex justify-content-between container">
                        <div className="card mt-5">
                            <img src={props.productImage} className="card-img-top mt-2" alt={props.productName} />
                            <div className="card-body">
                                <h4 className="card-title">{props.productName}</h4>
                                <h5 className="price my-3">Price: ${props.price}</h5>
                                <div className="sizes">
                                    <button type="submit">XS</button>
                                    <button type="submit">S</button>
                                    <button type="submit">M</button>
                                    <button type="submit">L</button>
                                    <button type="submit">XL</button>
                                </div>                                
                                <div className="rating d-flex mt-3">                
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <div className="footer mt-3">
                                    <button type="submit" className="btn btn-success text-uppercase" >More info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>            
            </div>
        </div>
    </section>
  )
}
