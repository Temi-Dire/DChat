import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {motion as m} from "framer-motion";

const loadhome = () => {
    const [text, setText] = useState('');
    let index = 0;
    let message = "D-Chat"
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            setText((prevState) => prevState + message[index]);
            index++;
            if (index === message.length - 1) {
                clearInterval(timer);
                setTimeout(() => {
                    navigate('/auth/signup')
                }, 1000)
            }
        }, 200)
    
      return () => {
        clearInterval(timer);
      }
    }, [])
    
    
    return (
      <div className="flex w-full h-screen justify-center items-center font-extrabold text-4xl">
        <m.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}>
            {text}
        </m.h1>
      </div>
    )
  }
  
  export default loadhome