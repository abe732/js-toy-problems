// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
// Examples
// Input	Output
// roundCount:
// 1	[ "r", "p", "s" ]
// roundCount:
// 2	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:
// 0	[ ]

function rockPaperPermutation (args) {
  if (args === undefined) {
    args = 3;
  } 
  if (args === 0) {
    return [];
  }
  
  let outcomes = [];
  let playedSoFar = [];
  const plays = ['r', 'p', 's'];
  
  let combos = function(roundsToGo) {
    if( roundsToGo === 0 ){
      outcomes.push( playedSoFar.slice().join("") );
      return;
    }
    for (let i=0; i < plays.length; i++ ){
      playedSoFar.push(plays[i])
      combos(roundsToGo-1);
      playedSoFar.pop();
    };
  }
  
  combos(args);
  return outcomes;
};