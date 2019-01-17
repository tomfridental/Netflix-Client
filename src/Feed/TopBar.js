import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import logo from '../_Imgs/topbar_logo.png'
import userAvatar from '../_Imgs/useravatar.png'
import ddmAvatar from '../_Imgs/ddm_useravatar.png';
import SearchBar from './SearchBar';

export default class TopBar extends Component {

    state = {
        stickyBar: false,
        displayDropDownMenu: false,
        keepDropDownMenu: false,
        displaySettingsDDM: false,
        keepSettingsDDM: false,
        displayNotifications: false,
        keepNotifications: false,
        activeSearch: false
    }

    componentDidMount() {
        document.addEventListener('scroll', this.stickyTopBar);
    }

    stickyTopBar = () => {
        if (window.scrollY > 10 && !this.state.stickyBar) {
            this.setState({ stickyBar: true })
        }

        if (window.scrollY < 10 && this.state.stickyBar) {
            this.setState({ stickyBar: false })
        }
    }

    showDDM = () => {
        this.setState({ displayDropDownMenu: true, displaySettingsDDM: false, displayNotifications: false })
    }

    hideDDM = (e) => {
        setTimeout(() => {
            this.setState({ displayDropDownMenu: false })
        }, 300)
    }

    keepDDM = () => {
        this.setState({ keepDropDownMenu: true })
    }

    unKeepDDM = () => {
        this.setState({ keepDropDownMenu: false })
    }

    showSettingsDDM = () => {
        this.setState({ displaySettingsDDM: true, displayDropDownMenu: false, displayNotifications: false })
    }

    hideSettingsDDM = () => {
        setTimeout(() => {
            this.setState({ displaySettingsDDM: false })
        }, 300)
    }

    keepSettingsDDM = () => {
        this.setState({ keepSettingsDDM: true })
    }

    unKeepSettingsDDM = () => {
        this.setState({ keepSettingsDDM: false })
    }

    showNotifications = () => {
        this.setState({ displayNotifications: true, displayDropDownMenu: false, displaySettingsDDM: false })
    }

    hideNotifications = () => {
        setTimeout(() => {
            this.setState({ displayNotifications: false })
        }, 300)
    }

    keepNotifications = () => {
        this.setState({ keepNotifications: true })
    }

    unKeepNotifications = () => {
        this.setState({ keepNotifications: false })
    }

    showSearchBar = () => {
        this.setState(prevState => ({activeSearch: !prevState.activeSearch}))
    }

    render() {
        return (
            <Wrapper status={this.state.stickyBar}>
                <RightBox>
                    <LogoDiv>
                        <Logo src={logo} />
                    </LogoDiv>

                    <LinkDiv>דף הבית</LinkDiv>
                    <LinkDiv>סדרות</LinkDiv>
                    <LinkDiv>סרטים</LinkDiv>
                    <LinkDiv>נוספו לאחרונה</LinkDiv>
                    <LinkDiv>הרשימה שלי</LinkDiv>

                    <SmallLink
                        onMouseEnter={this.showDDM}
                        onMouseOut={this.hideDDM}
                    >
                        <FontAwesomeIcon icon="sort-down" style={{ marginRight: '.5rem', marginTop: '-.2rem', pointerEvents: 'none' }} />
                        דפדוף
                    </SmallLink>

                    <DropDownMenu
                        show={this.state.displayDropDownMenu}
                        onMouseEnter={this.keepDDM}
                        onMouseLeave={this.unKeepDDM}
                        keep={this.state.keepDropDownMenu}
                    >
                        <DDMLink>דף הבית</DDMLink>
                        <DDMLink>סדרות</DDMLink>
                        <DDMLink>סרטים</DDMLink>
                        <DDMLink>נוספו לאחרונה</DDMLink>
                        <DDMLink>הרשימה שלי</DDMLink>
                    </DropDownMenu>
                </RightBox>

                <LeftBox>
                    <Search>
                        <SearchIcon show={this.state.activeSearch} onClick={this.showSearchBar}>
                            <FontAwesomeIcon icon="search" />
                        </SearchIcon>
                        {this.state.activeSearch && 
                        <SearchBar showSearchBar={this.showSearchBar}/>}
                    </Search>

                    <Notifications
                        onMouseEnter={this.showNotifications}
                        onMouseLeave={this.hideNotifications}
                    >
                        <FontAwesomeIcon icon="bell" style={{ pointerEvents: 'none' }} />
                        <NotificationDD
                            onMouseEnter={this.keepNotifications}
                            onMouseLeave={this.unKeepNotifications}
                            show={this.state.displayNotifications}
                            keep={this.state.keepNotifications}
                        >
                        </NotificationDD>
                    </Notifications>

                    <Settings
                        onMouseEnter={this.showSettingsDDM}
                        onMouseLeave={this.hideSettingsDDM}
                    >
                        <Avatar src={userAvatar} />
                        <Sort>
                            <FontAwesomeIcon icon="sort-down" />
                        </Sort>
                        <SettingsDDM
                            show={this.state.displaySettingsDDM}
                            keep={this.state.keepSettingsDDM}
                            onMouseEnter={this.keepSettingsDDM}
                            onMouseLeave={this.unKeepSettingsDDM}
                        >
                            <Accounts>
                                <SingleAccount>
                                    <SAAvatar>
                                        <SAImg src={ddmAvatar} />
                                    </SAAvatar>
                                    <SAName>Ortal</SAName>
                                </SingleAccount>
                                <Manage>
                                    נהל פרופילים
                                </Manage>
                            </Accounts>

                            <SettingsList>
                                <SingleOption>חשבון</SingleOption>
                                <SingleOption>מרכז העזרה</SingleOption>
                                <SingleOption>יציאה מ-Netflix</SingleOption>
                            </SettingsList>
                        </SettingsDDM>
                    </Settings>
                </LeftBox>
            </Wrapper>
        )
    }
}

//CSS//

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
height: 6rem;
background-color: ${props => props.status ? 'black' : 'transparent'};
color: white;
position: ${props => props.status ? 'sticky' : 'relative'};
top: 0;
z-index: 3;
margin-bottom: 35vw;
transition: background-color 0.5s ease;
`
const RightBox = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
height: 100%;
position: relative;
`

const LogoDiv = styled.div`
margin: 0 4rem;
width: 10rem;
height: 3.5rem;
cursor: pointer;
`

const Logo = styled.img`
width: 100%;
height: 100%;
`

const LinkDiv = styled.div`
cursor: pointer;
font-size: 1.3rem;
margin-left: 2rem;
transition: 500ms;

&:hover{
    opacity: 0.7;
}

@media only screen and (max-width: 885px) {
display: none;
}
`

const SmallLink = styled.div`
display: none;
cursor: pointer;
font-size: 1.3rem;
margin-left: 2rem;
font-weight: 600;

@media only screen and (max-width: 885px) {
display: flex;
}
`

const DropDownMenu = styled.div`
position: absolute;
right: 6vw;
top: 8rem;
width: 30rem;
display: ${props => props.show || props.keep ? 'flex' : 'none'};
flex-direction: column;
border-top: 3px solid white;
`

const DDMLink = styled.div`
height: 6rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
cursor: pointer;
background-color: rgba(0,0,0, .9);
transition-duration: 200ms;

&:hover{
    background-color: rgba(0,0,0, .85);
}
`

const LeftBox = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
height: 100%;
margin-left: 3.5rem;
position: relative;
`

const Search = styled.div`
font-size: 2.2rem;
font-weight: 600;
margin-left: 2.5rem;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
position: relative;
/* overflow: visible; */
`

const SearchIcon = styled.div`
display: ${props => props.show ? 'none' : 'flex'};
justify-content: center;
align-items: center;

`

const Notifications = styled(Search)`

`

const NotificationDD = styled.div`
display: ${props => props.show || props.keep ? 'flex' : 'none'};
width: 40rem;
height: 10rem;
border-top: 3px solid white;
background-color: rgba(0,0,0, .9);
position: absolute;
top: 6rem;
left: 0;
`

const Settings = styled.div`
height: 3.2rem;
margin-left: 2rem;
cursor: pointer;
display: flex;
flex-direction: row-reverse;
align-items: center;
font-size: 1.6rem;
`

const Avatar = styled.img`
width: 3.2rem;
height: 3.2rem;
margin-left: 1rem;
pointer-events: none;
`

const Sort = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: -1rem;
pointer-events: none;
`

const SettingsDDM = styled.div`
position: absolute;
top: 7rem;
left: 0;
width: 16.4rem;
background-color: rgba(0,0,0, .9);
display: ${props => props.show || props.keep ? 'flex' : 'none'};
flex-direction: column;
`

const Accounts = styled.div`
width: calc(100% - 3rem);
display: flex;
flex-direction: column;
padding: 1.5rem;
border-bottom: .1rem solid rgba(225,225,225, .25);
`

const SingleAccount = styled.div`
display: flex;
flex-direction: row-reverse;
height: 4rem;
align-items: center;
`

const SAAvatar = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const SAImg = styled.img`
width: 3rem;
height: 3rem;
`

const SAName = styled.div`
display: flex;
align-items: center;
margin-right: 1rem;
font-size: 1.3rem;
font-weight: 400;

&:hover{
    text-decoration: underline;
}
`

const Manage = styled.div`
margin-top: 1rem;
width: 100%;
display: flex;
justify-content: flex-end;
font-size: 1.2rem;
font-weight: 400;
align-items: center;

&:hover{
    text-decoration: underline;
}
`

const SettingsList = styled.div`
width: calc(100% - 3rem);
padding: 1.5rem;
display: flex;
flex-direction: column;
`

const SingleOption = styled.div`
width: 100%;
display: flex;
align-items: center;
height: 2.5rem;
font-size: 1.3rem;
font-weight: 600;
direction: rtl;

&:hover{
    text-decoration: underline;
}
`