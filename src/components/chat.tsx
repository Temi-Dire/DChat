interface ChatProps {
    name: string,
    message: string,
    time: string,
}
const Chat: React.FC <ChatProps> = ({name, message, time}) => {
  return (
    <div className='flex justify-between'>
                <div className='bg-red-100 w-10 h-10 rounded-full '></div>
                <div>
                    <h1>{name}</h1>
                    <p>{message}</p>
                </div>
                <div>{time}</div>
            </div>
  )
}

export default Chat

// : {name:string, message:string, time:string}