// import { socketIo } from "socket.io-client";

const messageWrapper = document.querySelector("#chat-message-wrapper");
const messageInput = document.querySelector("#message");
const roomInput = document.querySelector("#room");
const form = document.querySelector("#form");
const joinRoomBtn = document.querySelector("#join-room-btn");

// const socket = socketIo("http://localhost:5500");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = messageInput.value;
  const room = roomInput.value;

  if (message === "") return;

  sendMessage(message);

  messageInput.value = "";
});

joinRoomBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

function sendMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageWrapper.appendChild(messageDiv);
}
