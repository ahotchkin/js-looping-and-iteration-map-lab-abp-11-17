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

function attributesToPhrase(names, hometowns){
  return names.map(function(name){
    return `${name} is from ${hometown}`
  })
}

  // { name: 'Bobby',   hometown: 'Pittsburgh'  }
  //   'Bobby is from Pittsburgh'
