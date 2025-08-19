function stableInternships(interns, teams) {
  // preprocessing
  // create map of team -> intern currently picked
  const teamToInternPicked = {};
  // stack of unmatched interns to process
  const freeInterns = interns.map((_, i) => i);
  // tracking current intern choices
  const internChoices = new Array(interns.length).fill(0);
  // index is team, key is intern, value is rank of intern for that team
  const teamInternRankings = teams.map(team => {
    const internToRanking = {};
    team.forEach((intern, rank) => internToRanking[intern] = rank);
    return internToRanking;
  });

  while (freeInterns.length) {
    const internIdx = freeInterns.pop(),
          internRankings = interns[internIdx];
    const teamWanted = internRankings[internChoices[internIdx]];
    
    // saved current choice, advance to next for next iteration if necessary
    internChoices[internIdx]++;
    
    // give its top choice if available 
    if (!(teamWanted in teamToInternPicked)) {
      teamToInternPicked[teamWanted] = internIdx;
      continue;
    }
    
    // if not available, check team rankings of the current and picked intern
    const previouslyChosenInternIdx = teamToInternPicked[teamWanted],
          previouslyChosenInternRank = 
            teamInternRankings[teamWanted][previouslyChosenInternIdx],
          currentInternRank = teamInternRankings[teamWanted][internIdx];
    
    // give winner the team and push loser back on unmatched list
    if (previouslyChosenInternRank < currentInternRank) {
      freeInterns.push(internIdx);
    } else {
      freeInterns.push(previouslyChosenInternIdx);
      teamToInternPicked[teamWanted] = internIdx;
    }
  }

  const result = Object.entries(teamToInternPicked).map(([team, intern]) => {
    return [intern, +team];
  });
  return result;
}

// Do not edit the line below.
exports.stableInternships = stableInternships;
