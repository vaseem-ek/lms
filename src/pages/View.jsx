import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Loading from '../component/Loading';
import { FaDownload } from 'react-icons/fa';
import { FaCircleQuestion } from 'react-icons/fa6';

function View() {
    const [data, setData] = useState(null); // Initialize as null to avoid rendering issues
    const { id } = useParams();

    const getData = async () => {
        try {
            const result = await axios.get(
                `https://trogon.info/interview/php/api/videos.php?module_id=${id}`
            );

            // Find the video with the specific id
            const videoData = result.data.find((item) => item.id === parseInt(id));

            console.log(videoData);
            setData(videoData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (!data) {
        return (
            <div className="flex justify-center  bg-gradient-to-r from-blue-500 to-orange-800 items-center min-h-screen">
                <Loading/>
            </div>
        )
    }

    return (
        <div className='md:h-screen'>
            <ReactPlayer
                url={data.video_url}
                width="100%"
                height="100%"
                controls
                playing
                volume={true}
                />
                <h2 className='text-sm px-2 md:text-3xl italic font-bold my-4'>{data.title}</h2>

            <p className='text-xs px-2 md:text-3xl italic font-bold py-1 text-pink-400'>{data.video_type}</p>
            <p className='text-xs px-2 md:text-3xl italic font-bold py-2 text-pink-400'>{data.description}</p>
            <div className='flex px-2 justify-center py-3 gap-4'>
                <button className='px-3 py-2 shadow-md text-xs md:text-xl font-bold rounded-2xl border flex items-center gap-2'><FaDownload size={20} />
                Download</button>
                <button className='px-3 py-2 shadow-md text-xs md:text-xl font-bold rounded-2xl border flex items-center gap-2'><FaCircleQuestion size={20} />
                Doubts?</button>
            </div>
        </div>
    );
}

export default View;
