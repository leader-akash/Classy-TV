import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify';


const PlaylistContext = createContext(null)

const PlaylistProvider = ({ children }) => {

    const [allPlaylistData, setAllPlaylistData] = useState([]);
    const [nameVal, setNameVal] = useState("");
    const [sendDataToPlaylist, setSendDataToPlaylist] = useState([]);


    const reducerFunction = (state, action) => {
        switch (action.type) {
            case "ADD_IN_PLAYLIST":
                return {
                    ...state, showPlaylist: [...state.showPlaylist, action.payload]
                }
            default:
                return state
        }
    }

    const initialState = {
        showPlaylist: [],
    }

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    // for title
    const handleAddtoPlaylist = (title) => {
        axios.post(`/api/user/playlists`,
            {
                playlist: { title: title }
            },
            {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            })
            .then((res) => {
                setAllPlaylistData(res?.data?.playlists)
            })
            .catch((err) => {
                console.log("play-err", err)
            })
    }

    useEffect(() => {
        axios.get(`/api/user/playlists`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setAllPlaylistData(res?.data?.playlists)
            })
            .catch((err) => {
                console.log("fffff", err)
            })
    }, [])



    const handleInput = (e) => {
        setNameVal(e.target.value)
    }


    const handleCreatePlaylist = (e) => {
        e.preventDefault();
        if (nameVal === "") {
            toast.error("Please enter Playlist name")
        }
        else {
            handleAddtoPlaylist(nameVal)
            toast.success(`Playlist create with name "${nameVal}" 🎉`)
            setNameVal("");
        }
    }


    // for videos 

    const handleVideosInPlaylist = (details, _id) => {
        axios.post(`/api/user/playlists/${_id}`, {
            video: details
        }, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                toast.success(`Added in Playlist ${nameVal}`)
            })
            .catch((err) => {
                console.log("play-video-err", err)
                toast.error(`Failed in Playlist ${nameVal}`)

            })
    }

    const [playlist, setPlaylist] = useState([]);

    const getPlaylist = (_id) => {

        axios.get(`/api/user/playlists/${_id}`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setPlaylist(res?.data?.playlist?.videos)
            })
            .catch((err) => {
                console.log("res-err", err)
            })

    }


    // useEffect(()=>{
    //     getPlaylist();
    // },[])


    return (
        <PlaylistContext.Provider value={{ handleAddtoPlaylist, allPlaylistData, setAllPlaylistData, handleCreatePlaylist, handleInput, nameVal, setNameVal, state, dispatch, playlist, getPlaylist, handleVideosInPlaylist }}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext)

export { PlaylistProvider, usePlaylist }