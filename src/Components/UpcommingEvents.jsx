import Lottie from 'lottie-react';
import React from 'react';
import event from '../GammingEventAni.json'

const UpcommingEvents = () => {
    return (
        <div>
            <div>
                <Lottie className='w-full h-[60vh]' animationData={event}></Lottie>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src="/event-01.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='font-semibold'>Event Chatagory and Details</h2>
                        <p className='text-sm'>Discover a diverse range of tech and gaming experiences through our thoughtfully curated event categories. From thrilling eSports tournaments to cutting-edge product launches and informative tech expos, explore the world of innovation and excitement in every category.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src="/event-02.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='font-semibold'>Social Media Integration</h2>
                        <p className='text-sm'>Stay connected and share the excitement effortlessly with our seamless social media integration. Amplify your event experience by joining the conversation on your favorite platforms. With integrated feeds and easy sharing options, be part of the community buzz. Whether you're posting highlights, checking in with friends, or discovering event updates, our social media integration keeps you in the loop. Connect</p>
                    </div>
                </div>
                <div className='card rounded-lg'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6-b1w7jsJRo?si=CMn4qmYy9wZNZ4RM&amp;start=1290" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default UpcommingEvents;