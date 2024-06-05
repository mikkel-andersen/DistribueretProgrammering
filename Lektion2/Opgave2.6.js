
let string1 = "{([{}])}"
let string2 = "{(([[}]))}"

// Function call 
if (balanceretParanteser(string1)) 
    console.log("Balanceret "); 
else
    console.log("Ikke balanceret "); 

// Function call 
if (balanceretParanteser(string2)) 
    console.log("Balanceret "); 
else
    console.log("Ikke balanceret "); 

function balanceretParanteser(string) {
    let stack = []; 
  
    // Gennemløber string
    for(let i = 0; i < string.length; i++) 
    { 
        let x = string[i]; 
  
        if (x == '(' || x == '[' || x == '{') 
        { 
              
            // Tilføjer element til stacken, hvis den er == ( [ {
            stack.push(x); 
            continue; 
        } 
  
        // If current character is not opening 
        // bracket, then it must be closing.  
        // So stack cannot be empty at this point. 
        if (stack.length == 0) 
            return false; 
              
        let check; 
        switch (x){ 
        case ')': 
            check = stack.pop(); 
            if (check == '{' || check == '[') 
                return false; 
            break; 
  
        case '}': 
            check = stack.pop(); 
            if (check == '(' || check == '[') 
                return false; 
            break; 
  
        case ']': 
            check = stack.pop(); 
            if (check == '(' || check == '{') 
                return false; 
            break; 
        } 
    } 
  
    // Check Empty Stack 
    return (stack.length == 0); 
} 
