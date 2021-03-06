var katzDeli = []

function takeANumber(lineOfPeople, name){
  lineOfPeople[lineOfPeople.length] = name
  return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(line){
  if(line.length == 0)
  {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if(line.length == 0){
    return "The line is currently empty."
  }
  var currLine = "The line is currently: "
  for (var i = 0; i<line.length; i++){
    if(i == line.length - 1)
      currLine = currLine + (i + 1 ) + `. ${line[i]}`
    else
      currLine = currLine + (i + 1 ) + `. ${line[i]}, `
  }
  return currLine
}
