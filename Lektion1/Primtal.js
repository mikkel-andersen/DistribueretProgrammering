
function isPrime(n) 
{ 
  
    // Corner cases 
    if (n <= 1) 
        return false; 
    if (n <= 3) 
        return true; 
  
    // This is checked so that we can skip 
    // middle five numbers in below loop 
    if (n % 2 == 0 || n % 3 == 0) 
        return false; 
  
    for (let i = 5; i * i <= n; i = i + 6) 
        if (n % i == 0 || n % (i + 2) == 0) 
            return false; 
  
    return true; 
} 
  
// Function to print primes 
function printPrime(n) 
{ 
    for (let i = 2; i <= n; i++) { 
        if (isPrime(i)) 
            console.log(i + " ");  
    } 
} 

printPrime(10000);