import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    const reactArray = "Welcome.".split("")
    
    return(
        <Wrapper>
            {reactArray.map((item, index) => (
                <span key = {index}>{item}</span>
            ))}
        </Wrapper>
    )
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-50px)  skewX(5deg) rotateZ(10deg); filter: blur(8px)}
    100% {opacity: 1; transform: translateY(0);}
`

const Wrapper = styled.span`
    display: inline-block;
    
    span{
        // font-size: 5rem;
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    
    span:nth-child(n){
        animation-delay: 0.1s;
    }
    span:nth-child(2){
        animation-delay: 0.2s;
    }
    span:nth-child(3){
        animation-delay: 0.3s;
    }
    span:nth-child(4){
        animation-delay: 0.4s;
    }
    span:nth-child(5){
        animation-delay: 0.5s;
    }
    span:nth-child(6){
        animation-delay: 0.6s;
    }
    span:nth-child(7){
        animation-delay: 0.7s;
    }
    span:nth-child(8){
        animation-delay: 0.8s;
    }
`