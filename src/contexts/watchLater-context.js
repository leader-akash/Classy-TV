import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from './user-context';
import axios from 'axios';

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {

    const [getWatchLater, setGetWatchLater] = useState();


    const tokenVal = localStorage.getItem("token");

    const details = {

    }

    const addToWatchLater = async (details) => {
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
            console.log("watchREs", watchResponse)
        }

        catch (err) {
            console.log("watchErr", err)
        }
    }


    useEffect(() => {
        axios.get(`/api/user/watchlater`, {
            headers: {
                authorization: tokenVal
            }
        })
            .then((res) => {
                setGetWatchLater(res?.data?.watchlater)
                console.log("getRessssss", res)
            })
            .catch((err) => {
                console.log("getErr", err)
            })
    }, [])



    return (
        <WatchLaterContext.Provider value={{ addToWatchLater, getWatchLater }}>
            {children}
        </WatchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext(WatchLaterContext)

export { WatchLaterProvider, useWatchLater }