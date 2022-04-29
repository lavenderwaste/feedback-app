import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  return (

    //On reverse, if reverse is true then we change the css class to reverse
    //this is a conditional class
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>

    //Now the same but in conditional style
    <div className='card' style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
    }}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
