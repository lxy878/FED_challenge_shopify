import React, {useState} from "react";
import {Button} from '@shopify/polaris';
import { AiOutlineHeart} from "react-icons/ai";
import { AiFillHeart} from "react-icons/ai";

export default function ButtonComponent(){
    const [isLike, setIsLike] = useState(false)
    return(<Button onClick={()=>{
        if(isLike){
            setIsLike(false)
        }else{
            setIsLike(true)
        }
    }}>
        {isLike? <>< AiFillHeart fill='red'/> <span>Liked</span></>:<>< AiOutlineHeart /> <span>Liked</span></>}
    </Button>)
}