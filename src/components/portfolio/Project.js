import React, { Component } from 'react'
import { FaCss3 } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa';

export default class Project extends Component {
  state = {
    showInfo: false
  }


  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }

  render() {
    let {name,  picture} = this.props.item;


    return (
          <div className="project">
            <div className="icons">
            <i><FaCss3 /> </i>
            )
        </div>
          <h3>{name}</h3>
          <img src={picture} alt="" onClick={this.handleInfo} />
          <span className="infos"  onClick={this.handleInfo} >
            <i><FaPlusCircle /></i>
          </span>


          {
            this.state.showInfo && (
              <div className="showInfos">
                <div className="InfoContent">
                  <div className="head">
                    <h2>{name}</h2>
                  </div>
                </div>
              </div>
            )
          }

      </div>
    )
  }
}
