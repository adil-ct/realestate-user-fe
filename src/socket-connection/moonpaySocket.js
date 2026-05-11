
import io from "socket.io-client";

// Static imports
import { SOCKET_URL } from "constants/env";

const userId = localStorage.getItem("userId");
export const moonpaySocket = io.connect(`${SOCKET_URL}?path=moonpay&userId=${userId}`);

// Moonpay socket logs
moonpaySocket.on("connect", () => {
    console.log("moonpay socket connected from upper level", moonpaySocket?.connected);
});
moonpaySocket.on("error", (error) => {
    console.log("socket_error", error);
});
moonpaySocket.on("disconnect", (data) => {
    console.log("socket_disconnect", data);
});