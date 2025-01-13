import PropTypes from 'prop-types'; // Import PropTypes untuk validasi props

const Heading = (props) => {
  return (
    <h1>{props.children}</h1>
  )
}

Heading.propTypes = {
  children: PropTypes.string.isRequired, // Properti 'children' harus berupa string dan wajib diisi
};


export default Heading;