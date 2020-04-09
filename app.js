const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
//create function
const makeChart = (games, targetTeam)=>{
  //create an unordered list
const ulParent = document.createElement('ul');
//iterate through each game
for (let game of games){

//for each game, create an 'li'
  const gameLi = document.createElement('li');
  //for each li, add the score line
  gameLi.innerHTML = getScoreLine(game);
  //for each game, apply either the win or lose class
  gameLi.classList.add(isWinner(game, targetTeam) ? 'win': 'lose');
  //add the list to the unordered list parent
  ulParent.appendChild(gameLi);
}

//return the unordered list
return ulParent;
};

//identifies the winning team
const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam: awayTeam;
  return target.isWinner;
}



const getScoreLine = ({homeTeam, awayTeam}) => {
  const {team: hTeam, points: hPoints} = homeTeam;
  const {team: aTeam, points: aPoints} = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;
    if (aPoints > hPoints){
      scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    }else {
      scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;

}

const chart1 = makeChart(warriorsGames, 'Golden State');
document.body.prepend(chart1);

const chart2 = makeChart(warriorsGames, 'Houston');
document.body.prepend(chart2);