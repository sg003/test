import React from 'react';
import {useParams} from 'react-router-dom';


const RoomPage = () => {
    const {roomId} = useParams()
    return <h1>Room {roomId}</h1>;
};

export default RoomPage;