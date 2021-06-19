import socketClient from 'socket.io-client';

const chat = (ENDPOINT, options) => socketClient(ENDPOINT, options);

export default chat;
