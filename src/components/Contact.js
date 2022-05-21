import React from 'react'

export default function Contact() {
  return (
      <section className="contact-form">
        <div className="container">
            <div className="row">
                <h1 className="header text-center text-capitalize text-success mt-4"> Pre Order from kul shoppa</h1>
                    <form action="http://localhost:3009/api/contact/create" method="post">
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputFName">First Name</label>
                            <input type="name" className="form-control" id="inputFName" placeholder="First Name" name="fName" required/>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputLName">Last Name</label>
                            <input type="name" className="form-control" id="inputLName" placeholder="Last Name" name="lName" required/>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputNum">Contact Number</label>
                            <input type="number" className="form-control" id="inputNum" placeholder="Your number" name="num" required/>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email Address</label>
                            <input type="name" className="form-control" id="inputEmail" placeholder="Email" name="email" required/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress">Address</label>
                          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" required/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="altAddress"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" name="city" required/>
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" name="state" required/>                          
                          </div>
                          <div className="form-group col-md-2">
                              <label htmlFor="inputZip">Zip</label>
                              <input type="text" className="form-control" id="inputZip" name="zip" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                              <label htmlFor="inputChoice">What would you like to buy?</label>
                                <select className="custom-select custom-select-lg mb-3" id="inputChoice" name='orderOption'>
                                    <option value="bag">Bag</option>
                                    <option value="shoe">Shoe</option>
                                    <option value="dress">Dress</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                              
                              <label htmlFor="inputQty">Quantity</label>
                                <select className="custom-select custom-select-lg mb-3" name='qty' id='inputQty'>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                  <option value="4">Four</option>
                                  <option value="5">Five</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4 ">
                              <label htmlFor="inputColor">Please select your colors</label>
                              <div>
                                <input type='checkbox' className='ml-3' id="red" name='color' value='red' />
                                <label htmlFor='red'> Red</label> 
                                <input type='checkbox' className='ml-3' id="black" name='color' value='black' />
                                <label htmlFor='black'> Black</label> 
                                <input type='checkbox' className='ml-3' id="blue" name='color' value='blue' />
                                <label htmlFor='blue'> Blue</label> 
                                <input type='checkbox' className='ml-3' id="green" name='color' value='green' />
                                <label htmlFor='green'> Green</label> 
                              </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="msg">Message</label>
                                <textarea name="message" id="msg" cols="10" rows="5" placeholder="Please tell us if you have any additional information" className="form-control"></textarea>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-success btn-block text-uppercase">Submit</button>
                      </form>        
            </div>
        </div>
    </section>
  )
}


