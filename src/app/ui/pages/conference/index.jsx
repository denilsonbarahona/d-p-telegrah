import React, {useEffect} from "react";
import { useSelector} from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Emit, ListenMessage } from "@/app/socket/socket-instance";
import { getAnswer, setRemoteAnswer, setICECandidate, getPreOffer } from "@/app/webRTC";
import openSocket, { sendAnswer, sendPreOffer } from "@/app/socket/socket-actions";

import {Container, Header, Aside, Main, LocalVideo, RemoteVideo} from "./conference.style";

const Conference = () => {
    const navigate = useNavigate();
    const {isLoaded, user } = useSelector((state) => state.auth);
    const [ searchParams ] = useSearchParams();

    const getOffer = async () => {;
        const preOffer = await getPreOffer(user.id, searchParams.get("receiver"));
        sendPreOffer(user.id, searchParams.get("receiver"), preOffer, Emit);
    };

    useEffect(() => {
        if (!isLoaded) navigate("/login");
        openSocket(user?.id, Emit);
      }, [isLoaded]);

    useEffect(() => {
        if (searchParams.get("request")) {
            getOffer();
        }
    } , []);
    
    useEffect(() => {
        ListenMessage(async(message)=>{
            const { offer, sender, type, answer, candidate } = JSON.parse(message.data);
            if (type === "offer") {
              const myAnswer = await getAnswer(offer, user.id, sender);
              sendAnswer(user.id, sender, myAnswer, Emit);
            }
            
            if (type === "answer") {
              setRemoteAnswer(answer);
            }
      
            if (type === "candidate") {
              setICECandidate(candidate);
            }
          } );
    }, []);

    return (
        <Container>
           <Header>
                Header
           </Header>
           <Main>
             <LocalVideo id="video" />
             <RemoteVideo id="videoRemote" />
           </Main>
           <Aside>side</Aside>
        </Container>
    );
};

export default Conference;