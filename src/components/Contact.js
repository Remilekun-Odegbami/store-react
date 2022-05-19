import React from 'react'
import NavBar from './NavBar'

export default function Contact() {
  return (
      <section className="contact-form">
        <div className="container">
            <div className="row">
                <h1 className="header text-center">Order from kul shoppa</h1>
                    <form action="/" method="post">
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputFName">First Name</label>
                            <input type="name" className="form-control" id="inputFName" placeholder="First Name" name="fName" />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputLName">Last Name</label>
                            <input type="name" className="form-control" id="inputLName" placeholder="Last Name" name="lName" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputNum">Contact Number</label>
                            <input type="number" className="form-control" id="inputNum" placeholder="Your number" name="num" />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email Address</label>
                            <input type="name" className="form-control" id="inputEmail" placeholder="Email" name="email" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress">Address</label>
                          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" name="city" />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div className="form-group col-md-2">
                              <label htmlFor="inputZip">Zip</label>
                              <input type="text" className="form-control" id="inputZip" name="zip" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <select className="custom-select custom-select-lg mb-3">
                                    <option selected disabled>I want to buy</option>
                                    <option value="bag">Bag</option>
                                    <option value="shoe">Shoe</option>
                                    <option value="dress">Dress</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <select className="custom-select custom-select-lg mb-3">
                                  <option selected>Quantity</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <select className="custom-select custom-select-lg mb-3">
                                  <option selected>Color</option>
                                  <option value="red">Red</option>
                                  <option value="green">Green</option>
                                  <option value="blue">Blue</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="msg">Message</label>
                                <textarea name="msg" id="msg" cols="10" rows="5" placeholder="Please tell us if you have any additional information" className="form-control"></textarea>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-success btn-lg">Submit</button>
                      </form>        
            </div>
        </div>
    </section>
  )
}
