import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplDataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamDetails()
  }

  getIplTeamDetails = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/ipl')
      const data = await response.json()
      const updatedList = data.teams.map(eachTeam => ({
        id: eachTeam.id,
        name: eachTeam.name,
        teamImageUrl: eachTeam.team_image_url,
      }))
      this.setState({iplDataList: updatedList, isLoading: false})
    } catch (error) {
      console.error('Error fetching IPL teams:', error)
    }
  }

  render() {
    const {iplDataList, isLoading} = this.state

    return (
      <div className="bg-container">
        {/* Header */}
        <div className="iplContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1 className="heaading">IPL Dashboard</h1>
        </div>

        {/* Loader or Team List */}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="iplDetailsContainer">
            {iplDataList.map(eachItem => (
              <li key={eachItem.id}>
                <TeamCard iplDetailsList={eachItem} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
