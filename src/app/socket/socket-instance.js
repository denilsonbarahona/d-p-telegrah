const WEBSOCKET = process.env.socket;
const socket = new WebSocket(`ws:${WEBSOCKET}`);

export default socket;
