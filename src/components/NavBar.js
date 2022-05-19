import React from 'react'
import { Link} from 'react-router-dom'

const NavBar = () => {
  return (
  <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to='/'>Kul Shoppa</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pages" id="navbarSupportedContent">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className='nav-item ml-5' to='/about'>About</Link>
                <Link className='nav-item ml-5' to='/contact'>Contact</Link>
                <Link className='nav-item ml-5' to='/products'>Products</Link>
                <Link className='nav-item ml-5' to='/single'>single</Link>        
              </div>
              <div className='cart'> 
                <Link to='/cart' className='nav-item'>
                  <span><i className='fa fa-cart-plus'></i></span>
                  <span>0</span>
                </Link>
              </div>
              {/* <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
