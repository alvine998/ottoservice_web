import React from 'react';
import { Carousels, CarouselsFlashSale } from '../../components/Carousel';
import Footer from '../../components/Footer';
import Navhome from '../../components/Navbar/Navhome';
import Products from '../../components/Products';

const Home = (props) => {
    return (
        <div>
            <Navhome />
            <div className='container'>
                <Carousels />
                <div style={{ paddingTop: 20 }}>
                    <h2>Black Flash Sale %</h2>
                    <div>
                        <CarouselsFlashSale />
                    </div>
                    <hr />
                    <h2>Our Promo Service</h2>
                    <div>
                        <div className='row'>
                            <div className='col-md'>
                                <img src={"https://dummyimage.com/250x250/000/fff"} class="d-block" alt="..." />
                            </div>
                            <div className='col-md'>
                                <img src={"https://dummyimage.com/250x250/000/fff"} class="d-block" alt="..." />
                            </div>
                            <div className='col-md'>
                                <img src={"https://dummyimage.com/250x250/000/fff"} class="d-block" alt="..." />
                            </div>
                            <div className='col-md'>
                                <img src={"https://dummyimage.com/250x250/000/fff"} class="d-block" alt="..." />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h2>Other Products</h2>
                    <div>
                        <Products />
                    </div>
                    <hr />
                    <div style={{ paddingTop: 20 }}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;