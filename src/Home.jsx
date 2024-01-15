import { useLoaderData } from "react-router-dom";
import SpecialEvents from "./SpecialEvents";
import HomeCard from "./Components/HomeCard";
import ani from './HomeAni.json'
import Lottie from "lottie-react";

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    
    return (
        <div>
            {/* Special Event Section */}
            <div>
                <SpecialEvents></SpecialEvents>
            </div>
            {/* Carousal section */}
            <div className="mt-5">
                <div className="carousel carousel-end rounded-box">
                    <div className="carousel-item">
                        <img className="w-screen md:w-[500px] h-[400px]" src="https://cdn.vcgamers.com/news/wp-content/uploads/2023/01/Kapan-Mobile-Legends-Ditutup-1.png" alt="Mobile Legend" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-screen md:w-[500px] h-[400px]" src="https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg" alt="pubg" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-screen md:w-[500px] h-[400px]" src="https://m.media-amazon.com/images/M/MV5BM2U5ZTIxMzUtMmQ5MC00YTdhLThjOWYtODUzNDQ0MThmMmQ4XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg" alt="Free Fire" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-screen md:w-[500px] h-[400px]" src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/red-bull-campus-clutch-valorant-agents" alt="Valorant" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-screen md:w-[500px] h-[400px]" src="https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b" alt="Leauge of Legend" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-screen md:w-[500px] h-[400px]" src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" alt="GTA 5" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-screen md:w-[500px] h-[400px]" src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg" alt="Apex Legend" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-center font-semibold text-xl">Our Service Section</h2>
                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-2 mt-5">
                    <div className="w-full md:w-[65%] grid grid-cols-1 md:grid-cols-3 gap-3">
                        {
                            data?.map(x=><HomeCard key={x.id} data ={x}></HomeCard>)
                        }
                    </div>
                    <div className="w-full md:w-[30%] flex justify-center items-center">
                        <Lottie className="w-full h-auto" animationData={ani}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;