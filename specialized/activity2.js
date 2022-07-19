let stepsWalked
let feetPerStep
let feetPerMile
let  stepsPerMinute 
let  callPerMinuteWalking
let minutesTotal 
let caloriesTotal 
let milesWalked

feetPerMile = 5280
// Typical adult feetPerStep = 2.5
// Typical Adult stepsPerMinute = 70.0
// Typical adult callPerMinuteWalking = 3.5
stepsWalked = (Get) 
milesWalked = stepsWalked  * feetPerStep * (1.0/ feetPerMile)
console. log  (" Miles walked: ") 
console.log (milesWalked)  
console.log  ("\n")
minutesTotal = stepsWalked / stepsPerMinute 
caloriesTotal = minutesTotal * callPerMinuteWalking