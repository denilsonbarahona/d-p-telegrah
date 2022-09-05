import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector} from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom"; 
import {
  BsPersonCircle,
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillTelephoneXFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill
} from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

import { AddLocalStreamToStore, AddRemoteStreamToStore } from "@Redux/features/webRTC";
import { Emit, ListenMessage } from "@/app/socket/socket-instance";
import { getAnswer, setRemoteAnswer, setICECandidate, getPreOffer, hangUpWenRTCCall } from "@/app/webRTC";
import openSocket, { sendAnswer, sendPreOffer, hangUpCall } from "@/app/socket/socket-actions";

import {
  Container,
  Header,
  Aside,
  Main,
  LocalVideo,
  RemoteVideo,
  ActionsContainer,
  Actions,
  BackwardAction,
  LogoText,
  LogoContainer,
  UserLogoContainer
} from "./conference.style";

let hangUPReceiver = "";

const Conference = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isBufferingAudio, setBufferingAudio ] = useState(true);
    const [isBufferingVideo, setBufferingVideo ] = useState(true);
    const {isLoaded, user } = useSelector((state) => state.auth);
    const { localStream } = useSelector((state) => state.webRTC);
    const [ searchParams ] = useSearchParams();

    const setLocalStream = (stream) => {
     dispatch(AddLocalStreamToStore(stream));
   };

   const setRemoteStream = (stream) => {
     dispatch(AddRemoteStreamToStore(stream));
   };

    const getOffer = async () => {;
        const preOffer = await getPreOffer(
          user.id,
          searchParams.get("receiver"),
          setLocalStream, setRemoteStream
        );
        sendPreOffer(user.id, searchParams.get("receiver") , preOffer, Emit);
    };

    useEffect(() => {
        if (!isLoaded) navigate("/login");
        openSocket(user?.id, Emit);
      }, [isLoaded]);

     useEffect(() => {
        if (searchParams.get("request")) {
          hangUPReceiver = searchParams.get("receiver");
          getOffer();           
        }
    } , []);

    const handleHangUp = () => {
        if ( hangUpWenRTCCall() ) {
          hangUpCall(hangUPReceiver, Emit);
          navigate("/");
        }
    };
    
     useEffect(() => {
        ListenMessage(async(message)=>{
            const { offer, sender, type, answer, candidate } = JSON.parse(message.data);
            hangUPReceiver = sender;
            if (type === "offer") {
              const myAnswer = await getAnswer(offer, user.id, sender, setLocalStream, setRemoteStream);
              sendAnswer(user.id, sender, myAnswer, Emit);
            }
            
            if (type === "answer") {
              setRemoteAnswer(answer, user.id, sender);
            }
            if (type === "candidate") {
              setICECandidate(candidate);
            }
            if (type === "hang-up") {
              if (hangUpWenRTCCall()) {
                navigate("/");
              }
            }
          } );
    }, []);

    return (
        <Container>
           <Header>
                <BackwardAction
                  onClick={handleHangUp}
                  type="button">
                  <BiArrowBack />
                </BackwardAction>
                Header
           </Header>
           <Main>
             <LocalVideo id="video" />
             <RemoteVideo id="videoRemote"/>
             <ActionsContainer>
                  <Actions 
                    onClick={handleHangUp}
                    type="button" bgButton="#c5221f">
                    <BsFillTelephoneXFill />
                  </Actions>
                  <Actions
                    onClick={() => {
                      localStream.getAudioTracks()[0].enabled = !localStream.getAudioTracks()[0].enabled;
                      setBufferingAudio(!isBufferingAudio);
                    }}
                    type="button"
                    bgButton={`${isBufferingAudio? "#3c4043" : "#c5221f"}`}>
                      {isBufferingAudio
                        ? <BsFillMicFill />
                        : <BsFillMicMuteFill /> }
                  </Actions>
                  <Actions
                    onClick={() => {
                      localStream.getVideoTracks()[0].enabled = !localStream.getVideoTracks()[0].enabled;
                      setBufferingVideo(!isBufferingVideo);
                    }}
                    type="button"
                    bgButton={`${isBufferingVideo? "#3c4043" : "#c5221f"}`}>
                      {isBufferingVideo
                        ? <BsFillCameraVideoFill />
                        : <BsFillCameraVideoOffFill /> }
                  </Actions>
              </ActionsContainer>
           </Main>
           <Aside>
              <LogoContainer>
                <img width='50' height='50' alt="telegraph icon" src="https://i.imgur.com/6lugcDA.png" />
                <LogoText>Telegraph</LogoText>
              </LogoContainer>
              <UserLogoContainer>
                <BsPersonCircle />
              </UserLogoContainer>
           </Aside>
        </Container>
    );
};

export default Conference;