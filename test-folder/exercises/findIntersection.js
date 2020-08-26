function FindIntersection(strArr) {
    var res = [];
    var fisrtArr = strArr[0].split(', ');
    var secondArr = strArr[1].split(', ');
    for(let f of fisrtArr){
        for (let s of secondArr) {
            if(f === s){
                res.push(f);
                break;
            }
        }
    }
    return res.length === 0 ? false : res.join(',');
  }

  console.log(FindIntersection(['1, 3, 5, 7, 9', '0 , 8, 9']))

  