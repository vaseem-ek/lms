import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import ReactPlayer from 'react-player';

function Card({ item }) {
    return (
        <div className="w-full  bg-white rounded-xl shadow-md overflow-hidden md:flex mb-4">
            <div className="w-full md:w-1/2 relative aspect-video">
                <ReactPlayer
                    url={item.video_url}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
            </div>
            <div className="p-4 flex flex-col justify-between w-full">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                        {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {item.description}
                    </p>
                </div>
                <div className="flex items-center justify-end">
                    <IoIosArrowForward size={24} className="text-gray-500" />
                </div>
            </div>
        </div>
    );
}

export default Card;
