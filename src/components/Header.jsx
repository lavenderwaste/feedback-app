import PropTypes from 'prop-types'

function Header(props) {

  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor
  }

  return (
    <header style={ headerStyles }>
      <div className="container">
          <h2>{props.customText}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  customText: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  customText: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header

