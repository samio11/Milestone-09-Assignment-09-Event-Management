import React from 'react';
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from 'react-router-dom';

const HomeCard = ({ data }) => {
    const { id, name, photo, price, description } = data
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-[200px] w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xs'>{description.slice(0,100)}</p>
                    <p className='flex items-center gap-2 text-xl'><MdOutlinePriceChange /> {price}$</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning"><Link to={`/view/${id}`}>See Details</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;