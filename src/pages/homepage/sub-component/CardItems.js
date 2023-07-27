import axios from 'axios';
import React, { useEffect } from 'react'
import VideoCard from '../../../components/card/VideoCard';
import { useState } from 'react';

const CardItems = () => {

    const [videoCardItem, setVideoCardItem] = useState([]);

    useEffect(() => {

        axios.get(`/api/videos`)
            .then((res) => {
                console.log('res', res);
                setVideoCardItem(res.data.videos);
            })
            .catch((err) => {
                console.log("err", err);
            })

    }, [])

    return (
        <>
            {
                videoCardItem.map((el, i) => {
                    return (
                        <VideoCard
                            key={i}
                            image={el.image}
                            logo={el.logo}
                            description={el.description}
                            channelName={el.channelName}
                        />
                    )
                })
            }
            </>
    )
}

export default CardItems