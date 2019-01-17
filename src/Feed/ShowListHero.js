import React, { Component } from 'react';
import styled from 'styled-components';

export default class ShowListHero extends Component {

    componentDidMount(){
        window.scrollTo({
            top: this.props.test.offsetTop + '30vw', 
            block: 'end',
            behavior: "smooth"
        })
    }

    render(){
        console.log(this.props.test)
        return (
            <Wrapper bg={this.props.heroShow}>

            </Wrapper>
        )
    }
}

//CSS//
const Wrapper = styled.div`
margin-top: 1vw;
width: 97vw;
height: 35vw;
/* background-color: white; */
background: url(${props => props.bg});
background-size: cover;
position: relative;
`