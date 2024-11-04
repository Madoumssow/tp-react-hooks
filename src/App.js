import './App.css';
import React, { Component } from 'react'
import sow from './images/sow.JPG'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Personne: {
        fullName: "Thierno Mamoudou Sow",
        bio: "Développeur passionné par la technologie et l'inovation",
        imgSrc: sow,
        profession: "Développeur Back-End"
      },
      show: false,
      elapsedTime: 0
    }
    this.toggleShow = this.toggleShow.bind(this)
  }
  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
  render() {
    const { Personne, show, elapsedTime } = this.state

    return (
      <div className='App'>
        <h1>Profile App</h1>
        <button onClick={this.toggleShow}>
          {show ? "Masquer le Profil": "Afficher le Profil"}
        </button>
          {show && (
            <div className="profile">
              <img src={Personne.imgSrc} alt={Personne.fullName} />
              <h2>{Personne.fullName}</h2>
              <p>{Personne.bio}</p>
              <h3>Profession : {Personne.profession}</h3>
            </div>
          )}

          <p>Temps écoulé depuis le montage : {elapsedTime} secondes</p>
      </div>
    )
  }
}

export default App;
