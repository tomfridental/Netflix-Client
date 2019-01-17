import React from 'react';
import styled from 'styled-components';


export default () => {

    return (
        <Wrapper>
            <Box>
                <Soc> 
                    <Icon><i class="fab fa-facebook"></i></Icon>
                    <Icon><i class="fab fa-instagram"></i></Icon>
                    <Icon><i class="fab fa-youtube"></i></Icon>
                </Soc>
                <Links>
                   <LinkDiv> <Link>שמע וכתוביות</Link> </LinkDiv>
                   <LinkDiv> <Link>תיאור קולי</Link> </LinkDiv>
                   <LinkDiv><Link>מרכז העזרה</Link> </LinkDiv>
                   <LinkDiv> <Link>כרטיסי מתנה</Link> </LinkDiv>
                   <LinkDiv> <Link>מרכז המדיה</Link> </LinkDiv>
                   <LinkDiv>  <Link>קשרי משקיעים</Link> </LinkDiv>
                   <LinkDiv>   <Link>דרושים</Link> </LinkDiv>
                   <LinkDiv>   <Link>תנאי שימוש</Link> </LinkDiv>
                   <LinkDiv>   <Link>פרטיות</Link> </LinkDiv>
                   <LinkDiv>   <Link>הודעות משפטיות</Link> </LinkDiv>
                   <LinkDiv>  <Link>העדפות לגבי קבצי Cookie</Link> </LinkDiv>
                   <LinkDiv>  <Link>מידע על החברה</Link> </LinkDiv>
                   <LinkDiv>  <Link>צור קשר</Link> </LinkDiv>
                </Links>
                
                <Code>קוד שירות</Code>

                <CopyRights>
                © 1997‏-2019 Netflix, Inc.‎
                </CopyRights>
            </Box>
        </Wrapper>
    )
}

//CSS//
const Wrapper = styled.div`
margin-top: 5rem;
width: 100%;
height: 40rem;
background-color: #141414;
display: flex;
justify-content: center;
color: grey;
font-size: .9vw;
`

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
margin-right: 3vw;
width: 80%;
`

const Soc = styled.div`
display: flex;
flex-direction: row-reverse;
`

const Icon = styled.div`
width: 3rem;
height: 3rem;
/* background-color: white; */
font-size: 2.8rem;
margin: 1rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
const LinkDiv = styled.div`
width: 25%;
display: flex;
justify-content: flex-end;
align-items: center;
`

const Links = styled.div`
margin: 2rem 0;
width: 100%;
display: flex;
flex-direction: row-reverse;
flex-wrap: wrap;
`

const Link = styled.div`
cursor: pointer;
direction: rtl;
padding: 1rem;

&:hover{
    text-decoration: underline;
}
`

const Code = styled.div`
border: .1rem solid grey;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 1.5rem;
margin-bottom: 2rem;
cursor: pointer;

&:hover{
    color: white;
}
`

const CopyRights = styled.div`
display: flex;
padding: 1rem 0;
direction: rtl;
`