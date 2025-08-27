import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: [],
    isLoading: true,
    setClr: null,
  }

  backClr = {
    RCB: '#a4261d',
    SH: '#f26d22',
    DC: '#4f5db0',
    CSK: '#f7db00',
    RR: '#da237b',
    MI: '#13418b',
    KKR: '#5755a7',
    KXP: '#d91c1f',
  }

  componentDidMount() {
    this.getPageDetails()
  }

  getPageDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    try {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      const setClr = this.backClr[id]

      const updatedData = {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: {
          umpires: data.latest_match_details.umpires,
          result: data.latest_match_details.result,
          manOfTheMatch: data.latest_match_details.man_of_the_match,
          date: data.latest_match_details.date,
          venue: data.latest_match_details.venue,
          competingTeam: data.latest_match_details.competing_team,
          competingTeamLogo: data.latest_match_details.competing_team_logo,
          firstInnings: data.latest_match_details.first_innings,
          secondInnings: data.latest_match_details.second_innings,
          matchStatus: data.latest_match_details.match_status,
        },
        recentMatches: data.recent_matches.map(matchs => ({
          id: matchs.id,
          umpires: matchs.umpires,
          result: matchs.result,
          manOfTheMatch: matchs.man_of_the_match,
          date: matchs.date,
          venue: matchs.venue,
          competingTeam: matchs.competing_team,
          competingTeamLogo: matchs.competing_team_logo,
          firstInnings: matchs.first_innings,
          secondInnings: matchs.second_innings,
          matchStatus: matchs.match_status,
        })),
      }

      this.setState({teamData: updatedData, isLoading: false, setClr})
    } catch (error) {
      console.error('Error fetching team matches:', error)
    }
  }

  render() {
    const {isLoading, teamData, setClr} = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="iplTeamContain" style={{backgroundColor: setClr}}>
            <img
              src={teamData.teamBannerUrl}
              alt="team banner"
              className="iplImage"
            />
            <p className="lastMatch">Latest Match</p>
            <LatestMatch latestMatchDetails={teamData.latestMatchDetails} />

            <p className="recent">Recent Matches</p>
            <ul className="recentMatches">
              {teamData.recentMatches.map(match => (
                <MatchCard key={match.id} team={match} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
