import React from 'react';

const TourCard = ({tour}) => {
    const {id,name,img,code,price} = tour;
    return (
        <div className="card w-96  bg-base-100 shadow-xl my-4">
            <figure className='h-64'><img src={img} alt="Shoes" className='object-cover w-full h-full' /></figure>
            <div className="card-body bg-gray-400">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{price}TK<small>/per</small> </div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <div className="btn btn-secondary">DETAILS</div> 
                <div className="btn btn-warning">BOOK</div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;