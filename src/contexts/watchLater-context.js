import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useUser } from './user-context';
import axios from 'axios';
import { toast } from 'react-toastify';

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {

    const [getWatchLater, setGetWatchLater] = useState([]);

    const tokenVal = localStorage.getItem("token");

    const addToWatchLater = useCallback(async (details) => {
        try {
            const watchResponse = await axios.post(`/api/user/watchlater`,
                {
                    video: details
                },
                {
                    headers: {
                        authorization: tokenVal
                    }
                })
            setGetWatchLater(watchResponse?.data?.watchlater)
            toast.success("Added to watch later")
        }

        catch (err) {
            console.log("watchErr", err)
        }
    })




    useEffect(() => {
        axios.get(`/api/user/watchlater`, {
            headers: {
                authorization: tokenVal
            }
        })
            .then((res) => {
                setGetWatchLater(res?.data?.watchlater)
            })
            .catch((err) => {
                console.log("getErr", err)
            })
    }, [])


    
  const handleRemoveFromWatchlater = (_id) => {
    axios.delete(`/api/user/watchlater/${_id}`,{
     headers : {
       authorization: tokenVal
     }
    })
    .then((res)=>{
        setGetWatchLater(res?.data?.watchlater);
     toast.success("Removed from watchlater")
    })
    .catch((err)=>{
     console.log("remove-watch-err", err)
    })
 }


    return (
        <WatchLaterContext.Provider value={{ addToWatchLater, getWatchLater,handleRemoveFromWatchlater }}>
            {children}
        </WatchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext(WatchLaterContext)

export { WatchLaterProvider, useWatchLater }