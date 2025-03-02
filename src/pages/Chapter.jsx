import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Loading from "../component/Loading";

const Chapter = () => {
    const { id } = useParams();
    const [specificChap, setSpecificChap] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    // Fetching a specific subject data
    const getData = async () => {
        try {
            const result = await axios.get(
                `https://trogon.info/interview/php/api/modules.php?subject_id=${id}`
            );
            setSpecificChap(result.data);
            console.log(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false); // Stop loading after data fetch
        }
    };

    useEffect(() => {
        setIsLoading(true); // Set loading state when ID changes
        getData();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-purple-900 text-white">
<Loading/>            </div>
        );
    }

    return (
        <div className="bg-gradient-to-r py-5 from-purple-500 to-blue-400 min-h-screen flex flex-col justify-center items-center text-white relative">
            <div className="w-full max-w-md">
                <div className="relative flex flex-col items-center">
                    {specificChap.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center my-1"
                        >
                            <span>{item.title}</span>
                            <Link to={`/module/${item.id}`}
                                className={`w-12 h-12 flex justify-center items-center rounded-full border-2 ${
                                    item.title
                                        ? "bg-white text-purple-900"
                                        : "border-white"
                                }`}
                            >
                                {item.title && (
                                    <IoCheckmarkSharp
                                        size={20}
                                        className="text-purple-900"
                                    />
                                )}
                            </Link>
                            {index < specificChap.length - 1 && (
                                <div className="w-1 h-20 my-1 rounded-full bg-yellow-400"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Chapter;
