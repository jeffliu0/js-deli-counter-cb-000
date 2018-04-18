var katzDeli = []

function takeANumber(lineOfPeople, name){
  lineOfPeople[name] = lineOfPeople.length + 1
  return lineOfPeople.length + 1
}

function nowServing(line){
  if(line.length == 0)
  {
    return "There is nobody waiting to be served!"
  }
  return line.shift()
}

function currentLine(line){
  if(line.length == 0){
    return "The line is currently empty."
  }
  var currLine = "The line is currently: "
  for (var i = 0; i<line.length; i++){
    currLine = currLine + (i + 1 ) + `. ${line[i]}, `
  }
  return currLine
}
