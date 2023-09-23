import React from 'react';
import {useParams} from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const {roomId} = useParams()

    const myMeeting = async (element) => {
        const appID = 95740126;
        const serverSecret = "aed4e3095ca59d8d7aa14db56ad2c0fb";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),  "Sahana");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        })
    }

    return <div><div ref={myMeeting}/></div>;
};

export default RoomPage;