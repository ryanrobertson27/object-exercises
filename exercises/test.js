

function transformEmployeeData(array) {

    let newArray = array.map(e => {
      let obj = {}
      
      for (i=0; i<e.length; i++){
        let key = e[i][0]
        let value = e[i][1]

        obj[key] = value;
      }
      return obj
      
    })
    return newArray;
    
  

}

let myArray = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]



console.log(transformEmployeeData(myArray))
// transformEmployeeData(myArray);
