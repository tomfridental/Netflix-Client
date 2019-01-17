import React, { Component } from 'react';
import styled from 'styled-components';
import SingleShow from './SingleShow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ShowListHero from './ShowListHero'

export default class ShowList extends Component {

    state = {
        test: ['https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABd6_GkMMckG1dcOtzt5ogRB1x85mWUlZ7o0o4TRP2OqunLJkCxLOuRMGjJQjERAkCpL9vS3K__73AR35kAxS6tMrUFPkUXpe5PuphaV4rLt55mOs2tmOV_2Htn1PhS-ai0jVw6Gpxg.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQmrBs-n0j9STptXMBIksCP5gqy4okL4VJ370qUi-5zV76gG7HngpQGdwudhKrigCgg8UQukyl8rorXQtz4a-YrR1Sr1eaxmgG6xR2JON2ArelYt6GcJfRmgmKzgsv_HHRRii0yaY88.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABY6xZMddtuXXSCC4BImWS6XDSNZU0TkfSV9aj41yjuB7LGb8EHqb8Mi5YWxjGXpU00106xPKXHJYIOhMuCX-Vr3e-D6lsIJo6SmFMbJOXq04SbZC_7bFYiYDsQUzsD1HkaBlTqNImBY.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQwSDqRCBNbs9pe9aehdAyYxtrmwBcEn2-l83CEJ_dlzrA1mWfZlp0F6awoNNvcW-eYxnv9r42uRha3X7mfiB14ZpRlURDmAJKGiggBSvi6naluxZuHuF-m2i4b_cxPy3nAON1aTUOQ.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcs_3xuxkz7jRgXoBrO3vgNTRWUCE4PDrSfo4Us0It8pJ8e73dt-DFhl1k-8sfY94C7nd1vGHgmZ3FHvcV8oA3AOyjj1iM6rxxyWVSzO0HjbG0mQG428CBPnY8v-sKZr_VFVeq3Pe8o.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABV77SSPjwKKktA68BUks_3cSPUl6uBkeOBZ3IIb77zi8L4yYU7xXtGppMyqCEfDE0UKjwTfzxBVDxZBxQCFxk5MXP_Kw7DHiowvPGcN-8HxK0Vt_Lwfhu_GR2jOM5P6o0MPuSxu_yQ.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSTTwQN72NIxFleObP2P5ldG6oek5w8PcrVE8tZ4-IGysRGYI0-DFW21P4aSDlSaOCvJyfKDrffzHisRhB5YgXqHxf4epkEOfCFcOUVop4TYoJ4zV2k7Ch5-NTWfIEKe6m5Pn4JZpgo.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYf0gyO_OENccDsyUBfHwkqHi-dLsKNwSl65SeOH6FtsEH77YSaVhd39PnLpQjEPOQaXwZsaYTqLchz3D20SCGkRCIHRVscui-v4OfoZbm3OM5Y7AXEcc_9iZxBZponxF2_t1Wt2Wf4.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfJeMw_1UTnHlPf9aD9SNVSCJ5JFyVcY70VWKJsdL73giILEKYM8OXEo2A9yBkPnW7PBGSmFHwjU4dX5I30qb15CLyOcCmsOYsu1Ux1ZhxJkz4zkGEi40zv1mCkflOOdSESybfmcBkM.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABUOLDmjIdt5q6YZRGMsRkrvfvm2UBscpUy_F29EjRXLR8Vn19XZYqhKhy58B4X_DJ1iqnJ3UvRXdEAc55l-D1so3dlHDHX737dtgxzAeZUBR98R-fQcZlNQxqZMzz9nJbtVPWCaxd-4.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcjSlGYJ13ooKoLsxcJ5uHlq3xtAAQNPt1LzYgEq5I4JtjOQPF-RVRV_T0KIIHIGkqqd9mhOz9QqZp50XVNxtqH4aLH_w9pIwQQ8gG5wUyQPNsO6F1oVR-xvEM1PFKfhfQx8jiEaqF0.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfwfiXDnS6Q40dRppUt_rpwrtZYEdHbNQjXhoWFIIkvp2e8I7kkBTIXlx5kamOT3y1fiUQ9yFmZoYxQSgfRqOzfgE_cNojli77fCfK_KysKxiDYVdcZbpGYJKqchq0VVlCAOe-T3bwA.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABca-c2R6RlP3mcVJI0XNEJlph_PrjmTMzonSsSV8d_4st-ckzH7P0DIG-fgrz3gcmZ-XCotdd93xCjs7NhyZ1jiG2D800_wtbxvPJK_U3z9Z_xuCMT5X_r6JSEfHDSQ2b8EYOT2xiLc.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAAAWaFjoIBBlBiw9FK3QtdZXd4mtWrzABN5MI0AraDZVGAtwnKtVkDj2-dCvZ5t8-PCLzky0DD07yfkhNgrL8qxbyE5b4sMq5fX3kz58JWM3QRtAeX7aCjIOzfgTd0sMFXLSshgP49RA.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAAAXNYtOPMlI81_4oeufdetxkOSYq6UQsOwaCjtVGL_7IZLniEYij3B6g8QOX_99Enbwlhn0erFeZMGPrYfSzaYM3cw8v08jEqMd10t0nW4fm1KcoU9kd18fikS7Gs3DfUuVOEcce-Kg.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbi_WT0TsN9QtC0bYMwS7fXZ924U6jQimeyjLmmxcmmcqXjIYK3PTomWVydtr2w69VXnbL1x5T8AIPhQ-80Eqa7-ZzLVQ5MV0iS2nz9BYAhn3DL7IL3qW89AurhKBRv79qgyIyw9MxI.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABdtLGne12Oy9wvKf0QqMeGY7WM-zpKNqJMJ2v4bRyHSPDXVRgsLKyEHuw64gWuL4ntWG9SmSz0S3z7GFlmOXi-UCZKmCxmQ-hWKFtj92cnEdGrsu2gZlMlWkUNzUIq555gBtmuh7Xq5FpzIaP8SF6Je3lcP-C-gpbX9u3LyuiUqKhXBsELmbcg-JFfDxauN3p0zK_8AVMu8.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZgTpIc9iSB3pZllgHUFPrADWeSpgGPpGK3ofoJ2C8eazup-K0BDvHAnMImiKmPTqjjEIzu3WZR8QnqY-23I-6B4sP6MspLxC342SSI_GBuHRinsWjMX84Px6_jtPt-aaDqtoJqZ_uE.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAAAVbvMpnpb-9weL4WU6FT18GZqVS5av5QsnGJskmRkVUJ5QnskdD1xLsK7vHF7t-antOfIeRLn_IPU-MqED2PJa5gpxsZdQTtV2rLWBnv_D3YMRG-rVaDbJza9ijGvvGG8NrZ8-898Q.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYCfyrZdSVQusF_TeJVb1mitPZ1EyULtx6WY7wFOpJ5vh9qap6gP447_ZsLXmzzvPP68FrjaLbdYzrqB6j4o7Qb6wa1RM1bMIddG4uqRmx3kPK-vu5RTCMnTG53jWq9DxyEfe0J8ys0.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAAAepbHKXOwoKuA7ehYWu1pDOX712kyE27NyP1yvL6E_UsuHYYE5bD6f2wwcQaSgfCB7RfFnMVMqtOrULU_lqamxuDGfGiiw3wfEvO7QcpwGIdARW193aCcZ8ESEi2l4N6F4LEwTPC5g.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAAAWzUqh7jQ0eWUFCDfAcXAYTyFbPhaJJqrWVuBsCIfCwcaDhMxtNVU8rbF-nutn7mgn7S6iFZSU7a-prLJK5zCZOlQFvO8HipRKQRIKfxuJuGcWWBGZGtUEOol3wMc_rt2zt78vikCQ.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRQDN3j1RerFbUBEQfD87nuPKwBLqV2tavY9xjEOQKD9WrUMFxoXGiKQc1vKkINdi7nSn0R0tdThq9Rz0nf9avcb19nOvsfeJ3OZ63dCypr4adammpIQNHqz9C4hobreepXvb7jo22U.webp',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABXqXrhAfKAr5boZpbpaUNzxUdbE6IsAj0t4T6Jf3nd5RSDMfCx0K5wNCxn_988PskY-80ei3vxh506L_3dlK4X-7xV5d0Fye9XUVKB2Sm0UgbKWWmYlghw8_GuE1dTQnq1ZeqjEOFA.jpg',
            'https://occ-0-2621-2773.1.nflxso.net/dnm/api/v5/rendition/6a3a1f9331ea05fa44b30e71d65563fd913aef53/AAAABSrGHY95BO6SVhOSPi_3cMETteAh_bjvZMYxX_krY8DWPm7JvRzfbpJRroqW9WLfNCirg89GLEU_8QLXS3347TL2yAzFt5ul6jrW0Z7Z8EFb3pXLBxbUZLOjpNSO7-1I6a37bfU5CUaCIGTW9-IgYtT97loLUoGeDlw9vEbgeyUVu1gtxZse_TKMzcywV-wMmcUkJXIP.jpg'],
        position: 0,
        displayArrows: false
    }

    showArrows = () => {
        this.setState({ displayArrows: true })
    }

    hideArrows = () => {
        this.setState({ displayArrows: false })
    }

    moveLeft = () => {
        this.setState({ position: this.state.position + 1})

        setTimeout(() => {
            let newTest = this.state.test
            for (let i = 0; i < this.props.gridSize; i++) {
                let temp = newTest.shift()
                newTest.push(temp)
            }
            this.setState({
                test: newTest, position: this.state.position - 1
            })
        }, 190)

    }

    moveRight = () => {

        this.setState({ position: this.state.position - 1})

        setTimeout(() => {
            let newTest = this.state.test
            for (let i = 0; i < this.props.gridSize; i++) {
                let temp = newTest.pop()
                newTest.unshift(temp)
            }
            this.setState({ test: newTest, position: this.state.position + 1 })
        }, 190)
    }

    componentDidMount() {
        let newTest = this.state.test
        for (let i = 0; i < this.props.gridSize; i++) {
            let temp = newTest.pop()
            newTest.unshift(temp)
        }
        this.setState({ test: newTest })
    }

    render() {


        return (
            <Wrapper>
                <Box>

                    <Header>{this.props.title}</Header>
                    <ArrowRight
                        onClick={this.moveRight}
                        displayArrows={this.state.displayArrows}
                        onMouseEnter={this.showArrows}
                        onMouseOut={this.hideArrows}>
                        <Arrow active={this.state.displayArrows}>
                            <FontAwesomeIcon icon="angle-right" />
                        </Arrow>
                    </ArrowRight>
                    <Shows position={this.state.position}>

                        {this.state.test.map((show, i) =>
                            <SingleShow
                                key={i}
                                show={show}
                                list={this.props.title}
                                showHero={this.props.showHero}
                                gridSize={this.props.gridSize}
                            />)}

                    </Shows>
                    <ArrowLeft
                        onClick={this.moveLeft}
                        displayArrows={this.state.displayArrows}
                        onMouseEnter={this.showArrows}
                        onMouseOut={this.hideArrows}
                    >
                        <Arrow active={this.state.displayArrows}>
                            <FontAwesomeIcon icon="angle-left" />
                        </Arrow>
                    </ArrowLeft>


                </Box>
                {/* <div ref={showListHero => this.showListHero = showListHero} style={{ position: 'relative' }}>
                        {this.props.title === this.props.heroList &&
                            <ShowListHero heroShow={this.props.heroShow} test={this.showListHero} />
                        }
                    </div> */}
            </Wrapper>
        )
    }
}

//CSS//

const Wrapper = styled.div`
overflow: hidden;
`

const Box = styled.div`
z-index: 1;
margin: 3vw;
display: flex;
flex-direction: column;
align-items: flex-end;
width: calc(100% - 6vw);
position: relative;
`

const Header = styled.div`
font-size: 1.5vw;
font-weight: 600;
height: 2.5vw;
color: white;
direction: rtl;
`


const Shows = styled.div`
height: 100%;
width: 100%;
height: 11vw;
overflow: visible;
white-space: nowrap;
color: white;
display: block;
direction: rtl;
transform: translateX(${props => ((props.position + 1) * 100)}%);
/* transition-duration: 400ms;
transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
transition-delay: 0ms; */
z-index: 2;
position: relative;
transition: ${props => props.position === 0 ? 'transform' : 'transform 400ms cubic-bezier(0.5, 0, 0.1, 1) 0ms'};


@media only screen and (max-width: 1100px) and (min-width: 801px) {
height: 13vw;
}

@media only screen and (max-width: 800px) and (min-width: 501px) {
height: 18vw;
}

@media only screen and (max-width: 500px) {
height: 25vw;
}
`

const ArrowLeft = styled.div`
width: 3vw;
height: 11vw;
background-color: black;
opacity: ${props => props.displayArrows ? '0.7' : '0.3'};
position: absolute;
left: -3vw;
top: 2.5vw;
z-index: 2;
cursor: pointer;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 3vw;

@media only screen and (max-width: 1100px) and (min-width: 801px) {
height: 13vw;
}

@media only screen and (max-width: 800px) and (min-width: 501px) {
height: 18vw;
}

@media only screen and (max-width: 500px) {
height: 25vw;
}
`

const Arrow = styled.div`
display: ${props => props.active ? 'flex' : 'none'};
pointer-events: none;
`


const ArrowRight = styled.div`
width: 3vw;
height: 11vw;
background-color: black;
opacity: ${props => props.displayArrows ? '0.7' : '0.3'};
position: absolute;
right: -3vw;
top: 2.5vw;
z-index: 3;
cursor: pointer;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 3vw;

@media only screen and (max-width: 1100px) and (min-width: 801px) {
height: 13vw;
}

@media only screen and (max-width: 800px) and (min-width: 501px) {
height: 18vw;
}

@media only screen and (max-width: 500px) {
height: 25vw;
}
`


