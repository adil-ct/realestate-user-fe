import io from "socket.io-client";
import { SOCKET_URL } from "constants/env";


const socket = io(SOCKET_URL);

// export const tokenSocket = () => {
//   return io(`${SOCKET_URL}?path=price`);
// };

// export const notificationSocket = (userId) => {
//   return io(
//     `${SOCKET_URL}?path=notification&userId=${userId}`
//   );
// };

socket.on("connect", () => {
  console.log("socket", socket.id);
});
socket.on("error", (error) => {
  console.log("socket_error", error);
});
socket.on("disconnect", (data) => {
  console.log("socket_disconnect", data);
});



export default socket;
