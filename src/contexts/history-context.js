import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from './user-context';
import { toast } from 'react-toastify';


const HistoryContext = createContext(null);

const HistoryProvider = ({children}) => {

    const [historyData, setHistoryData] = useState([]);
    const{getToken} = useUser();

    const handleHistory = (details) => {
        axios.post(`/api/user/history`,{
            video: details
        },{
            headers: {
                authorization: getToken
            }
        })
        .then((res)=> {
            setHistoryData(res?.data?.history)
            console.log("history-res", res)
        })
        .catch((err)=>{
            console.log("his-err", err)
        })
    }

    const getHistory = () => {
        axios.get(`/api/user/history`,{
            headers: {
                authorization: getToken
            }
        })
        .then((res)=>{
            setHistoryData(res?.data?.history);
        })
        .catch((err)=>{
            console.log("his-get-err", err);
        })
    }

    useEffect(()=>{
        getHistory();
    },[historyData])


    // delete api

    const handleDeleteHistory = (_id) => {
        axios.delete(`/api/user/history/${_id}`,{
            headers: {
                authorization: getToken
            }
        })
        .then((res)=>{
            toast.success("Removed from History");
        })
        .catch((err)=> {
            toast.error("Failed to remove from History")
        })
    }

    // clear all

    const handleClearAllHistory = () => {
        axios.delete(`/api/user/history/all`,{
            headers: {
                authorization: getToken
            }
        })
        .then((res)=>{
            toast.success("History Cleared ✔");
        })
        .catch((err)=> {
            toast.error("Failed to remove from History")
        })
        
    }
      



  return (
    <HistoryContext.Provider value={{historyData, setHistoryData, handleHistory, getHistory, handleDeleteHistory, handleClearAllHistory}}>
        {children}
    </HistoryContext.Provider>
  )
}

const useHistory = () => useContext(HistoryContext)

export {HistoryProvider, useHistory}