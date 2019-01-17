import React, { Component } from 'react';
// import {Route, Switch } from 'react-router';
// import {BrowserRouter} from 'react-router-dom';
// import {HashRouter} from 'react-router';
import styled from 'styled-components';
import TopBar from './Feed/TopBar';
import Hero from './Feed/Hero';
import ShowList from './Feed/ShowList';
import Footer from './Feed/Footer'
//Font Awsome//
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBell, faSortDown, 
  faChevronDown, faPlay, faThumbsUp, 
  faThumbsDown, faPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faBell, faSortDown, faChevronDown, faPlay, faThumbsUp, faThumbsDown, faPlus, faAngleLeft, faAngleRight)


export default class App extends Component {

  state = {
    titles: ['פופולרי ב-Netflix',
      'הפופולריים כרגע',
      'הרשימה שלי',
      'תוכניות טלוויזיה אמריקאיות'],
    heroShow: null,
    heroList: null,
    gridSize: 2
  }

  showHero = (list, show) => {
    this.setState({heroList: list, heroShow: show})
  }

  componentDidMount(){
    this.changeGridSize()
    window.addEventListener('resize', this.changeGridSize)
  }

  changeGridSize = () => {
    const windowWidth = window.innerWidth
    let gridSize = 2;
    if(windowWidth > 1400) gridSize = 6
    else if (windowWidth > 1100) gridSize = 5
    else if (windowWidth > 800) gridSize = 4
    else if (windowWidth > 500) gridSize = 3
    this.setState({gridSize})
  }


  render() {
    return (

      <Wrapper>
        <TopBar />
        <Hero />
        {this.state.titles.map((title,i) =>
          <ShowList title={title} key={title}
            heroList={this.state.heroList}
            heroShow={this.state.heroShow}
            showHero={this.showHero}
            index={i}
            gridSize={this.state.gridSize}
          />)}
        <Footer />
      </Wrapper>

    )
  }
}


//CSS

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
