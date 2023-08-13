import axios from 'axios';
import React, { useEffect } from 'react'
import VideoCard from '../../../components/card/VideoCard';
import { useState } from 'react';
import { useVideos } from 'contexts/videos-context';
import { useFilter } from 'contexts/filter-context';

const CardItems = () => {

    // const [videoCardItem, setVideoCardItem] = useState([]);

    const {allVideos} = useVideos();
    
    const {filteredSearch} = useFilter();

    return (
        <>
            {
                filteredSearch.map((el, i) => {
                    return (
                        <VideoCard
                            details = {el}
                        />
                    )
                })
            }
            </>
    )
}

export default CardItems