// Write your code here
import './index.css'

const MatchCard = props => {
  const {team} = props

  return (
    <li className="match-card">
      <p className="match-card-team">{team.competingTeam}</p>
      <img
        src={team.competingTeamLogo}
        alt={`competing team ${team.competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-text">{team.result}</p>
      <p
        className={`match-card-text ${
          team.matchStatus === 'Won' ? 'match-status-won' : 'match-status-lost'
        }`}
      >
        {team.matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
