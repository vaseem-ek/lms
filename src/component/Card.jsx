import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
    const navigate=useNavigate()
    const handleClick=(id)=>{
        navigate(`/view/${id}`)
    }
   
    return (
        <div  className="w-full  bg-white rounded-xl shadow-md overflow-hidden md:flex mb-4">
            <div className="w-full md:w-1/2 relative aspect-video">
                <ReactPlayer
                    url={item.video_url}
                    config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }}}
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
                
            <button onClick={()=>handleClick(item.id)} className='px-3 hover:text-white hover:bg-black py-2 border font-bold rounded-full'>VIEW</button>
            </div>
        </div>
    );
}

export default Card;
