import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../component/Card';
import Loading from '../component/Loading';

function Video() {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetching specific module data
    const getData = async () => {
        setIsLoading(true);
        try {
            const result = await axios.get(
                `https://trogon.info/interview/php/api/videos.php?module_id=${id}`
            );
            setVideos(result.data);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to load videos. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (isLoading) {
        return (
            <div className="flex justify-center  bg-gradient-to-r from-blue-500 to-orange-800 items-center min-h-screen">
                <Loading/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-orange-800 p-4">
            <div className="flex w-full  flex-col gap-2">
                {videos.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
        
    );
}

export default Video;
