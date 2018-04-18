var katzDeli = []

function takeANumber(lineOfPeople, name){
  lineOfPeople[name] = lineOfPeople.length + 1
}

function nowServing(line){
  if(line.length == 0)
  {
    return "There is nobody waiting to be served!"
  }
  return line.shift()
}
