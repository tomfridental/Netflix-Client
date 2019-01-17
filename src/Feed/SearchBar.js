import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SearchBar extends Component {

    state = {
        hideSlide: false
    }

    componentDidMount() {
        document.addEventListener('click', this.hideBar)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.hideBar)
    }

    hideBar = (e) => {
        if (!this.SearchBar.contains(e.target)) {
            this.setState({hideSlide: true})
            setTimeout(() => {
                this.props.showSearchBar()
            },250)
        }
    }


    render() {

        return (
            <Wrapper ref={SearchBar => this.SearchBar = SearchBar}>
                <Input placeholder="כותרים, אנשים, ז'אנרים" hideSlide={this.state.hideSlide}/>
                <FontAwesomeIcon icon="search" style={{ position: 'absolute', right: '.7rem', top: '.7rem' }} />
            </Wrapper>
        )
    }
}

//CSS
const Wrapper = styled.div`
display: flex;
position: relative;
border: 1px solid white;
font-size: 2rem;
`

const Input = styled.input`
width: 21rem;
height: 3rem;
font-size: 1.4rem;
border: none;
background-color: rgba(0,0,0, .9);
direction: rtl;
padding-right: 4rem;
color: white;
animation-name: ${props => props.hideSlide ? 'slideBack' : 'slide'};
animation-duration: 400ms;

&:focus {
    outline: 0;
}

@keyframes slide {
  0%   {width: .1rem;}
  100% {width: 21rem;}
}

@keyframes slideBack {
  0%   {width: 21rem;}
  100% {width: .1rem;}
}

`