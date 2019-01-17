import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SingleShow extends Component {

    state = {
        active: false
    }

    showHero = () => {
        this.props.showHero(this.props.list,this.props.show)
    }

    render() {

        return (
            <Box bg={this.props.show} 
            onMouseEnter={() => this.setState({ active: true })} 
            onMouseLeave={() => this.setState({ active: false })}
            active={this.state.active}
            gridSize={this.props.gridSize}
            >


                <Wrapper active={this.state.active}>
                    <Table>

                        <RightRail>
                            <Play><FontAwesomeIcon icon="play"/></Play>
                            <Title>חינוך מיני</Title>
                            <Info>
                                <Status>חדש</Status>
                                <Age>16+</Age>
                                <Length>עונה אחת</Length>
                            </Info>
                            <Text>
                                עורכי דין צריכים להיות פיקחים, ערמומיים ובעלי לשון חלקלקה. לא כולם מוכרחים ללמוד בבית ספר למשפטים נכון?       
                                </Text>
                        </RightRail>

                        <LeftRail>
                           <PaddingBox> <Circle><FontAwesomeIcon icon="thumbs-up"/></Circle> </PaddingBox>
                           <PaddingBox>  <Circle><FontAwesomeIcon icon="thumbs-down"/></Circle> </PaddingBox>
                           <PaddingBox> <Circle><FontAwesomeIcon icon="plus"/></Circle> </PaddingBox>
                        </LeftRail>
                    </Table>
                    <ArrowDown onClick={this.showHero}><FontAwesomeIcon icon="chevron-down"/></ArrowDown>
                </Wrapper>


            </Box>
        )
    }
}

//CSS//
const Box = styled.div`
/* background: url(${props => props.bg}); */
background: url(${props => props.active ? 'https://occ-0-2621-2773.1.nflxso.net/art/d3491/70ac9babca8e283d5fce16dc681edde2b41d3491.webp' : `${props.bg}`});
background-size: cover;
display: inline-flex;
/* width: calc(20% - .5rem); */
width: ${props => props.active ? `calc(${100/props.gridSize*1.8}% - .5rem)` : `calc(${100/props.gridSize}% - .5rem)`};
/* height: 100%; */
height: ${props => props.active ? '170%' : '100%'};
margin: 0 .25rem;
overflow: visible;
cursor: pointer;
color: whitesmoke;
font-size: 1vw;
background-color: white;
vertical-align: top;
transform: ${props => props.active ? 'translate(0, -22%)' : 'none'};
transition-duration: 400ms;
transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
transition-delay: 0ms;
z-index: ${props => props.active ? '99' : '2'};
`

const Wrapper = styled.div`
width: 100%;
height: 96.5%;
/* background: url('https://occ-0-2621-2773.1.nflxso.net/art/d3491/70ac9babca8e283d5fce16dc681edde2b41d3491.webp');
background-size: cover; */
opacity: ${props => props.active ? '1' : '0'};
transition: 1000ms;
display: flex;
flex-direction: column;
padding-bottom: 8px;
`

const Table = styled.div`
display: flex;
align-items: flex-end;
width: inherit;
height: inherit;
`

const Play = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 2.2vw;
height: 2.2vw;
border: 1px solid white;
border-radius: 50%;
margin-bottom: .5vw;
background-color: rgba(0, 0, 0, 0.5);
`

const RightRail = styled.div`
width: 85%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding-right: .5vw;

&:hover ${Play}{
color: red;
}
`

const LeftRail = styled.div`
height: 60%;
width: 15%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
`

const PaddingBox = styled.div`
width: 2.5vw;
height: 2.5vw;
display: flex;
justify-content: center;
align-items: center;
`

const Circle = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: .1rem solid white;
width: 1.8vw;
height: 1.8vw;
border-radius: 50%;
opacity: 0.7;
background-color: rgba(0, 0, 0, 0.5);

&:hover{
    opacity: 1;
    border-width: 2px;
}
`

const ArrowDown = styled.div`
width: 100%;
height: 15%;
display: flex;
justify-content: center;
font-size: 2vw;

&:hover{
    color: red;
}
`

const Title = styled.div`
direction: rtl;
font-size: 1.4vw;
margin-bottom: .5vw;
font-weight: 600;
`

const Info = styled.div`
display: flex;
align-items: center;
margin-bottom: .5vw;
`

const Status = styled.span`
color: lightgreen;
font-weight: 600;
font-size: 1.2vw;
`

const Age = styled.div`
margin-right: .5vw;
border: 1px solid white;
font-weight: 600;
direction: rtl;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.1vw;
padding: .2vw .5vw;
margin-top: .1vw;
`

const Length = styled.span`
margin-right: .5vw;
font-size: 1vw;
font-weight: 600;
`

const Text = styled.div`
font-size: 1vw;
direction: rtl;
display: flex;
width: 100%;
white-space: pre-wrap;
margin-bottom: .5vw;
`