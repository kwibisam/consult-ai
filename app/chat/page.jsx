import ChatComponent from "../component/chat";

const Chat = () => {
  const baseUrl = process.env.BASE_URL
  return (
    <ChatComponent baseUrl={baseUrl}/>
  );
};

export default Chat;
