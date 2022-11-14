import * as React from "react"
import * as  RI from "react-icons/ri";
import IMG1 from '../../images/cemetery/1c-IMG_9910.jpg'
import IMG2 from '../../images/cemetery/7-IMG_9070.jpg'
import IMG3 from '../../images/cemetery/14-20180205_122325_HDR.jpg'
import IMG4 from '../../images/cemetery/13-IMG_8507.jpg'
import IMG5 from '../../images/cemetery/12-IMG_867478.jpg'

import { FaStar } from 'react-icons/fa'
import {GiStarsStack} from 'react-icons/gi'



const ImagesArray = [
  { image: IMG1, },
  { image: IMG2, },
  { image: IMG3, },
  { image: IMG4, },
  { image: IMG5, }
]



 class SlideshowBanner extends React.Component {
    constructor() {
      super();
      this.state = {
        width: window.innerWidth/200,
        currIndex: 3,
        BannerSlides: [
          { image: IMG1, },
          { image: IMG2, },
          { image: IMG3, },
          { image: IMG4, },
          { image: IMG5, }
        ],
      }
      
    }

    componentDidUpdate(){
      //this.setState({width: window.innerWidth/200})
      //console.log()
    }

    incrementIndex = () => {
      if(this.state.currIndex + 1 <= this.state.BannerSlides.length - 1){
        this.setState({ currIndex: this.state.currIndex + 1 })
      } else {  this.setState({ currIndex: 0 }) }
    }

    decrementIndex = () => {
      console.log(this.state)
      if(this.state.currIndex - 1 >= 0){
        this.setState({ currIndex: this.state.currIndex - 1 })
      } else {  this.setState({ currIndex: this.state.BannerSlides.length - 1 }) }
    }

    render() {
      return (
        <React.Fragment>
          <div className="banner-wrapper flex flow-col center filler-height-500 bg-blue">
            <img src={this.state.BannerSlides[this.state.currIndex].image} />

           {/* 
            <div className="banner-selector-wrapper" >
              <div className="banner-selector-line" >
                {this.state.BannerSlides.map((element, index) => {
                  return (
                    <div  className="banner-select-line-circle flex center" key={index + 1}
                          style={{backgroundColor: this.state.currIndex === index ?  'var(--saratoga-white)' : 'inherit' }}>
                      <img src={element.image} key={index + 1}/>
                    </div>
                  )
                })}
                <RI.RiArrowRightSFill fontSize={'3rem'} color="#fff" value={{cursor: 'pointer'}} onClick={() => this.decrementIndex()}   />
                <RI.RiArrowLeftSFill fontSize={'3rem'} color="#fff" value={{cursor: 'pointer'}} onClick={() => this.incrementIndex()}   />
              </div>
            </div>   
            */}
            <div className="ribbon-wrapper">
              <div className="ribbon">
               
                <svg viewBox="0 0 40 2"><path d="M0 0 Q 20 2.75, 40 0" /></svg>
                <div className="ribbon-content">
                  <GiStarsStack  fontSize="2.0em" />
                  Hello Welcome to The World
                  <GiStarsStack  fontSize="2.0em" />
                </div>
                <svg viewBox="0 0 40 2"><path d="M0 0 Q 20 2.75, 40 0" /></svg>
              </div>
            </div>
            <svg viewBox="0 0 40 2" fill="#fff" style={{width: 'fit-content'}}><path d={`M0 0 Q 20 2.75, 40 0`} /></svg>
            <div className="banner-filler"/>
          </div>        
        </React.Fragment>

      )
    }
}


export default SlideshowBanner