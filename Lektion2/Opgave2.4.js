
let string = "Tully hedder i virkeligheden Tully";

function countWords(string) {
    const split = string.split(" ");
    var map = {};
    for (var i = 0; i < split.length; i++) {
      if (map[split[i]] === undefined) {
        map[split[i]] = 1;
      } else {
        map[split[i]]++;
      }
    }
    return map;
  }
  
  function printMap(map) {
    for (let key in map) {
      console.log(key + ": " + map[key]);
    }
  }
  
  printMap(countWords(string));
