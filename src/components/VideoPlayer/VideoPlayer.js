import React, { Component } from 'react';
// import { faPlay, faPause, faExpand, faComment } from "@fortawesome/free-solid-svg-icons";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import './VideoPlayer.css'

export default class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      paused: true,
      muted: false,
      length: null,
      formattedLength: null,
      currentTime: 0,
      comments: [],
    }
  }

  play() {
    this.duration()
    const v = document.getElementById("v")
    // const play_pause = document.querySelector(".play_pause")

    this.setState({
      paused: !this.state.paused
    })

    if (this.state.paused === true) {
      v.play()
      this.setState({
        paused: false
      })
    } else {
      v.pause();
      this.setState({
        paused: true
      })
    }
  }

  duration() {
    let dur = document.getElementById("v").duration;
    dur = dur.toFixed()

    this.setState({
      length: dur,
    })

    return dur;
  }

  currentTime() {
    let cur = document.getElementById("v").currentTime;
    cur = cur.toFixed()

    this.setState({
      currentTime: cur,
    })
    if (parseInt(this.state.currentTime) === parseInt(this.state.length)) {
      this.setState({ paused: true })
    }

    return cur;
  }

  customTime() {
    const time_range = document.querySelector(".time_range");
    document.getElementById("v").currentTime = time_range.value

    this.setState({
      currentTime: time_range.value
    })
  }

  componentDidMount() {
    this.currentTimeInterval = setInterval(() => this.setState({ currentTime: this.currentTime() }), 10)
    this.durationInterval = setInterval(() => this.setState({ length: this.duration() }), 10)
  }

  // componentDidUpdate() {
  //   // this.setState({ comments: this.props.comments })
  //   console.log(this.props.comments)
  // }

  componentWillUnmount() {
    clearInterval(this.currentTimeInterval)
    clearInterval(this.durationInterval)
  }
  
  render() {
    let width=window.innerWidth
    if (width > 800) { width = 750 }
    return (
      <>
        <div className="VideoPlayer visible" >

          <video id="v" width={width} height="auto">
            <source src={this.props.src} type="video/mp4" />
          </video>

          <div className="controls">

            <button onClick={this.play.bind(this)} className="play_pause_button">
              <FontAwesomeIcon icon={this.state.paused ? faPause : faPlay} />
            </button>

            <div>
              <input
                type="range"
                className="time_range"
                onChange={this.customTime.bind(this)}
                value={this.state.currentTime}
                step={0.1}
                min={0}
                max={this.state.length}
              />
            </div>
            {/* <Section className='comments'>
              {content}
            </Section> */}

          </div>

          {/* <FontAwesomeIcon icon={faExpand} /> */}

        </div>
      </>
    )
  }
}

