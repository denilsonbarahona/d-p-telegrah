const WEBSOCKET = process.env.socket;
const socket = new WebSocket(`ws:${WEBSOCKET}`);

export const Emit=(message)=>{
    socket.send(message);
};

export const ListenMessage=(callback)=>{
    socket.addEventListener("message", (message)=>{
        callback(message);
    });
};

export default socket;
