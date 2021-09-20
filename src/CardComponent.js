import React from "react";
import {Card, Image} from '@shopify/polaris';
import ButtonComponent from "./ButtonComponent";


export default function CardComponent(props){
    const {imageData} = props
    console.log(imageData)
    return (
    <Card>
        <Card.Section>
            <Image src={imageData.hdurl} alt=''/>
        </Card.Section>
        <Card.Section>
            <Card.Header><h2>{imageData.title} - {imageData.date}</h2></Card.Header>
            <Card.Section ><p>{imageData.explanation}</p></Card.Section>
            <ButtonComponent />
        </Card.Section>
    </Card>)
}