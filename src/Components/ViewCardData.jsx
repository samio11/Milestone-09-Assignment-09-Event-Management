import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewCardData = () => {
    const {id} = useParams()
    const totalData = useLoaderData();
    const [mainData,setMainData] = useState([]);
    useEffect(()=>{
        const findData = totalData.find(x=> x.id == id) 
        setMainData(findData)
    },[id,totalData])
    console.log(mainData) 
    const { name, photo, price, description } = mainData
    return (
        <div>
            <div className="hero min-h-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <p className="py-6 font-semibold">Price:- <span className='text-yellow-500'>{price}$</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCardData;