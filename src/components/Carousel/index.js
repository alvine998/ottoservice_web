import React from 'react';

const Carousels = (props) => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={"https://dummyimage.com/1920x720/000/fff"} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={"https://dummyimage.com/1920x720/000/fff"} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={"https://dummyimage.com/1920x720/000/fff"} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const CarouselsFlashSale = (props) => {
    return (
        <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className='row'>
                        <div className='col-md'>
                            <img src={"https://dummyimage.com/350x350/000/fff"} class="d-block" alt="..." />
                        </div>
                        <div className='col-md'>
                            <img src={"https://dummyimage.com/350x350/000/fff"} class="d-block" alt="..." />
                        </div>
                        <div className='col-md'>
                            <img src={"https://dummyimage.com/350x350/000/fff"} class="d-block" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className='row'>
                        <div className='col-md'>
                            <img src={"https://dummyimage.com/350x350/000/fff"} class="d-block" alt="..." />
                        </div>
                        <div className='col-md'>
                            <img src={"https://dummyimage.com/350x350/000/fff"} class="d-block" alt="..." />
                        </div>
                        <div className='col-md'>
                            <img src={"https://dummyimage.com/350x350/000/fff"} class="d-block" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export {
    Carousels,
    CarouselsFlashSale
} 