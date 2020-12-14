import {
  JokeContainer,
  JokeWrapper,
  JokeSetup,
  JokePunch,
} from './JokeElements'

const Joke = ({ joke }) => {
  return (
    <JokeContainer>
      <JokeWrapper>
        <JokeSetup>{joke.setup}</JokeSetup>
        <JokePunch>{joke.punchline}</JokePunch>
      </JokeWrapper>
    </JokeContainer>
  )
}

export default Joke
