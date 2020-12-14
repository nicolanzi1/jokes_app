import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listJokes } from '../../actions/jokeActions'
// import { Link } from 'react-router-dom'
// import { JokeText } from './JokeElements'

const Joke = ({ joke }) => {
  const dispatch = useDispatch()

  const jokeList = useSelector((state) => state.jokeList)
  const { loading, error, jokes } = jokeList

  useEffect(() => {
    dispatch(listJokes())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {jokes.map((joke) => (
            <Col key={joke._id} sm={12} md={6} lg={4} xl={3}>
              <Joke joke={joke} />
            </Col>
          ))}
        </Row>
      )}
      {/* <Link to={`/joke/${joke._id}`}>
        <strong>{joke.setup}</strong>
      </Link>

      <JokeText as="div">
        <div>{joke.punchline}</div>
      </JokeText> */}
    </>
  )
}

export default Joke
