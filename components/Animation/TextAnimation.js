import {Text} from 'react-native';
import {useState} from 'react';

function TextAnimation({text}){
    const [showText,setShowText] = useState(false);
    setInterval(()=>{
        return setShowText(!showText);
    },2000);
    if(showText){
        return <Text>{text}</Text>
    }
    return(
        <Text></Text>
    )
    
}

export default TextAnimation;