// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    umpires,
    manOfTheMatch,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match">
        <div className="latest-match-header">
          <p className="latest-match-team">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-team-logo"
        />
      </div>
      <div className="latest-match-header2">
        <h1 className="latest-match-stat">First Innings</h1>
        <p className="latest-match-stats">{firstInnings}</p>
        <h1 className="latest-match-stat">Second Innings</h1>
        <p className="latest-match-stats">{secondInnings}</p>
        <h1 className="latest-match-stat">Man Of The Match</h1>
        <p className="latest-match-stats">{manOfTheMatch}</p>
        <h1 className="latest-match-stat">Umpires</h1>
        <p className="latest-match-stats">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
