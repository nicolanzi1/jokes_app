import { Card } from 'react-bootstrap'

const Joke = ({ joke }) => {
  return (
    <Card.Body>
      <a href={`/jokes/${joke._id}`}>
        <Card.Title as="div">
          <strong>{joke.setup}</strong>
        </Card.Title>
        <Card.Text as="div">{joke.punchline}</Card.Text>
      </a>
    </Card.Body>
  )
}

export default Joke
