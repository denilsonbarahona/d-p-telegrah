import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import MessageDisplay from "@organism/messageDisplay";
import AppLayout from "@template/appLayout";
import SideLayout from "@template/sideLayout";
import openSocket from "@/app/socket/socket-actions";
import {Emit} from "@/app/socket/socket-instance";

const Main = () => {
  const navigate = useNavigate();
  const { showMessageForm } = useSelector((state) => state.messages);
  const { isLoaded, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoaded) navigate("/login");
    openSocket(user?.id, Emit);
  }, [isLoaded]);

  return (
    <AppLayout>
      <SideLayout>
        <Outlet />
      </SideLayout>
      {showMessageForm ? <MessageDisplay /> : <h2>
        {/* <video id="video"></video>
        <video id="videoRemote"></video> */}
        PlaceHolder
        </h2>}
    </AppLayout>
  );
};

export default Main;
