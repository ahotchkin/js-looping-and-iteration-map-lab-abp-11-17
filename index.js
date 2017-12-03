// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(drivers){
    return drivers.toLowerCase()
  })
}

function nameToAttributes(names){
  return names.map(function(name){
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
    return {firstName: fName, lastName: lName}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${name} is from ${hometown}`
  })
}

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh'  },
  { name: 'Sammy',   hometown: 'New York'    },
  { name: 'Sally',   hometown: 'Cleveland'   },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby',   hometown: 'Tampa Bay'   }
];

  // { name: 'Bobby',   hometown: 'Pittsburgh'  }
  //   'Bobby is from Pittsburgh'
