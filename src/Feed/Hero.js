import React from 'react';
import styled from 'styled-components';
import HeroImg from '../_Imgs/hero.png'
import HeroLogo from '../_Imgs/hero_logo.png'

export default () => {

    return (
        <Wrapper>
            <VBox>
                <Logo>
                    <LogoImg src={HeroLogo} />
                </Logo>

                <Buttons>
                    <Button>הפעל</Button>
                    <Button>הרשימה שלי +</Button>
                </Buttons>

                <Description>
                    <Header>עונה 1 זמינה לצפייה</Header>
                    <Text>
                        המכנה המשותף היחיד ביניהם הוא דווקא השוני ביניהם. כשהם לבד, הם מטילים אימה וסובלים מרדיפה. כשהם ביחד
                        - הם טיטאנים.
                        </Text>
                </Description>
            </VBox>

            <Rating>
                +16
            </Rating>
        </Wrapper>
    )
}

//CSS//
const Wrapper = styled.div`
width: 100%;
height: 45vw;
background: url('${HeroImg}');
background-size: cover;
position: absolute;
top: 0;
display: flex;
flex-direction: row-reverse;
`

const VBox = styled.div`
display: flex;
flex-direction: column;
height: 15rem;
width: 36%;
height: 60%;
margin-right: 5rem;
align-items: flex-end;
margin-top: 10vw;
`
const Logo = styled.div`
display: flex;
flex-direction: row-reverse;
width: 90%;
height: 42%;
`

const LogoImg = styled.img`
width: 90%;
height: 100%;
`

const Buttons = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
margin-top: 4rem;
width: 90%;
height: 12%;
`

const Button = styled.button`
border: none;
background-color: rgba(51,51,51,.4);
font-size: 1.4vw;
color: white;
font-weight: 600;
width: 33%;
height: 100%;
margin-left: 1rem;
cursor: pointer;
border-radius: .4rem;

&:hover{
    background-color: white;
    color: black;
}
`

const Description = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items: flex-end;
width: 95%;
color: white;
font-weight: 400;
`

const Header = styled.div`
font-size: 1.6vw;
font-weight: 600;
direction: rtl;
`

const Text = styled.div`
margin-top: .5rem;
font-size: 1.4vw;
font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
direction: rtl;
`

const Rating = styled.div`
position: absolute;
bottom: 17%;
left: 0;
border-right: 3px solid white;
background-color: rgba(51,51,51,.4);
font-size: 1.2vw;
color: white;
width: 5.5%;
display: flex;
justify-content: flex-end;
align-items: center;
padding: .5vw 0;
padding-right: .8vw;
`