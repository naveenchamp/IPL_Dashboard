import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplDetailsList} = props
  const {id, name, teamImageUrl} = iplDetailsList

  return (
    <Link to={`/team-matches/${id}`}>
      <div className="iplDetailTeam">
        <img src={teamImageUrl} alt={name} className="imageIpl" />
        <p className="iplTeamName">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
