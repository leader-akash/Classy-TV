import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react'
import { useUser } from './user-context';
import { toast } from 'react-toastify';

const LikeContext = createContext(null);

const LikeProvider = ({ children }) => {

    const[likeData, setLikeData] = useState([]);

    const {getToken} = useUser();

    const handleLikeData = async (details) => {
        try {
            const likeResponse = await axios.post(`/api/user/likes`,{
                video: details
            }, {
                headers: {
                    authorization: getToken
                }
            })
            console.log("like", likeResponse, "details", details)
            
            setLikeData(likeResponse?.data?.likes)
            toast.success("Added to Liked")
        }
        catch(err){
            console.log("likeErr", err)
        }
    }

    const getAllLikeData = async () => {
        try{
        const getRes = await axios.get(`/api/user/likes`,{
            headers:{
                authorization: getToken
            }
        })
        setLikeData(getRes?.data?.likes)
    }
    catch(err){
        console.log("getLike-err", err)
    }
        
    }

    useEffect(()=>{
        getAllLikeData();
    },[])



    return (
        <LikeContext.Provider value={{handleLikeData, likeData , getAllLikeData}}>
            {children}
        </LikeContext.Provider>
    )
}

const useLike = () => useContext(LikeContext)

export { LikeProvider, useLike }