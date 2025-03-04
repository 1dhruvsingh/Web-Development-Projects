import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student :{props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}
Student.PropTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}
Student.defaultProps ={
    name: "Guest",
    age: 0,
    isStudent: true,
  }
export default Student