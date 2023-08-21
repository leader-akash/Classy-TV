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
                video: {...details}
            }, {
                headers: {
                    authorization: getToken
                }
            })
            
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

    // here this commented
    // useEffect(()=>{
    //     getAllLikeData();
    // },[])

    const handleRemoveLike = (_id) => {
        axios.delete(`/api/user/likes/${_id}`,{
            headers:{
                authorization: getToken
            }
        })
        .then((res)=>{
            setLikeData(res?.data?.likes)
            toast.success("Removed from Like")
        })
        .catch((err)=>{
            console.log("remove-like-err", err)
        })
    }



    return (
        <LikeContext.Provider value={{handleLikeData, likeData , getAllLikeData, handleRemoveLike}}>
            {children}
        </LikeContext.Provider>
    )
}

const useLike = () => useContext(LikeContext)

export { LikeProvider, useLike }