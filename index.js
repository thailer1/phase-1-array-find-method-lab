// code your solution here
const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: ""},
  ]

  let superbowlWin = (record) =>{
    // console.log(record[0].result)
    let count = 0
    record[count]  
    for(const wins of record){
        if(record[count].result === 'W')return record[count].year
        count++ 
        // wins = [result]
        // console.log(`This is wins this is a win`, wins)
    //    if(find(wins))
    }
  }
  console.log(superbowlWin(record))