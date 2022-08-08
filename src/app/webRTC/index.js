import { sendCandidate } from "@/app/socket/socket-actions";
import { Emit } from "@/app/socket/socket-instance";

const webRTCConfig = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
};

let localStream;
let remoteStream;
let peerConnection;


const WebRTCConnection = async(sender, receiver) =>{
    peerConnection = new RTCPeerConnection(webRTCConfig);

    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
           sendCandidate(sender, receiver, event.candidate, Emit);
        }
    };

    remoteStream = new MediaStream();
    document.querySelector("#videoRemote").srcObject = remoteStream;
    document.querySelector("#videoRemote").play();

    if (!localStream){
        localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false});
        document.querySelector("#video").srcObject = localStream;
        document.querySelector("#video").play();
    }
    localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
    });
    peerConnection.ontrack = (event) => {
        if (document.querySelector("#videoRemote").paused)
            document.querySelector("#videoRemote").play();
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });
    };
};


export const setICECandidate = async (candidate) => {
    if (peerConnection) {
        try {
            await peerConnection.addIceCandidate(candidate);      
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log("peerConnection is not defined");
    }
};


export const getPreOffer = async(sender, receiver) => {
    await WebRTCConnection(sender, receiver);
    const preOffer = await peerConnection.createOffer();
    peerConnection.setLocalDescription(preOffer);
    return preOffer;
};

export const getAnswer = async(offer, sender, receiver) => {
    await WebRTCConnection(sender, receiver);
    await peerConnection.setRemoteDescription(offer);
    const answer = await peerConnection.createAnswer();
    peerConnection.setLocalDescription(answer);
    return answer;
};

export const setRemoteAnswer = async (answer) => {
    await peerConnection.setRemoteDescription(answer);
};

