import jokes from './data/jokes.js'

const randomJoke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)]
}

export default randomJoke
