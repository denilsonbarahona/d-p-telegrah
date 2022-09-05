import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Placeholder from "@atoms/placeholder";
import MessageDisplay from "@organism/messageDisplay";
import AppLayout from "@template/appLayout";
import SideLayout from "@template/sideLayout";
import openSocket, {sendRejectCall, sendAceptedCall} from "@/app/socket/socket-actions";
import {Emit, ListenMessage} from "@/app/socket/socket-instance";
import {SetBeggingCall, SetReceivingCall } from "@Redux/features/webRTC";

import { NotifyCall, RejectCall, AcceptCall } from "./main.style";

let senderCallBeggining = "";
const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showMessageForm } = useSelector((state) => state.messages);
  const { isLoaded, user } = useSelector((state) => state.auth);
  const { beggingCall, receivingCall } = useSelector((state) => state.webRTC);

  useEffect(() => {
    if (!isLoaded) navigate("/login");
    openSocket(user?.id, Emit);
  }, [isLoaded]);

  useEffect(() => {
    ListenMessage(async (message) => {
      const { sender, type } = JSON.parse(message.data);
      senderCallBeggining = sender;
      if (type === "availability") {
        dispatch(SetReceivingCall(true));
      }

      if (type === "reject-call") {
        alert("Call was rejected");
        dispatch(SetBeggingCall(false));
      }

      if (type === "accept-call") {
        dispatch(SetBeggingCall(false));
        navigate(`/conference?receiver=${sender}&request=true`);
      }
    });
  }, []);

  const handleRejectCall = () => {
    sendRejectCall(user.id, senderCallBeggining, Emit);
    dispatch(SetReceivingCall(false));
  };

  const handleAcceptCall = () => {
    dispatch(SetReceivingCall(false));
    sendAceptedCall(user.id, senderCallBeggining, Emit);
    navigate("/conference");
  };

  return (
    <div>
      {(receivingCall || beggingCall) &&
        <NotifyCall>
          {receivingCall && <>
            you are receiving a call
            <AcceptCall
              onClick={handleAcceptCall}
              type="button">accept?</AcceptCall> or
            <RejectCall
              onClick={handleRejectCall}
              type="button">Reject</RejectCall>
          </>}
          {beggingCall && <>
            waiting for the other user to accept the call
          </>}
        </NotifyCall>
      }
      <AppLayout>
        <SideLayout>
          <Outlet />
        </SideLayout>
        {showMessageForm ? <MessageDisplay /> : <Placeholder />}
      </AppLayout>
    </div>
  );
};

export default Main;
