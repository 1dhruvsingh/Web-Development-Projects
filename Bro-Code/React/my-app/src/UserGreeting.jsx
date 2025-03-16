
function UserGreeting(props){

    const WelcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const LoginAgain = <h2 className="login-again"> Use a valid username </h2>
   
    if (props.isLoggedIn){
        return WelcomeMessage
    }
    else{
        return LoginAgain
    }
}
 
export default UserGreeting