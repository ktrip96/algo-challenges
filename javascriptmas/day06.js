function getRandomNumberOfTacos() {
  const randomNumber = Math.floor(Math.random() * 10)
  let tacosArray = ['Sorry, no tacos for you today']
  if (randomNumber !== 0) tacosArray = new Array(randomNumber).fill('🌮')
  /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */

  return tacosArray // replace this empty tray array
}

getRandomNumberOfTacos()
