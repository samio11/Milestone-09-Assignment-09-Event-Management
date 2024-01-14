import React from 'react';
import ani from '../CommunityAni.json'
import Lottie from 'lottie-react';
import { FaFacebook,FaYoutube,FaInstagram   } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const GamingCommunity = () => {
    return (
        <div className='w-[100%] h-auto md:h-[80vh] flex flex-col md:flex-row justify-center'>
            <div className='flex-1'>
                <Lottie className='w-full h-full' animationData={ani}></Lottie>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <a className='btn btn-outline btn-warning' href="https://www.facebook.com/"><FaFacebook /> Facebook</a>
                    <a className='btn btn-outline btn-warning' href="https://www.youtube.com/"><FaYoutube /> Youtube</a>
                    <a className='btn btn-outline btn-warning' href="https://www.instagram.com/"><FaInstagram /> Instagram</a>
                    <a className='btn btn-outline btn-warning' href="https://twitter.com/"><CiTwitter /> Twitter</a>
                </div>
            </div>
        </div>
    );
};

export default GamingCommunity;