import React from 'react';

const withAuthenticate = MainApplication => Login => 
    class extends React.Component {
        constructor(){
            super();
            this.state= {
                loggedOn: false
            }
        }
        componentDidMount(){
            if((!localStorage.getItem("user")) && (!localStorage.getItem("password"))){
                this.setState({loggedOn: false})
            } else {
                this.setState({loggedOn: true})
            }
        }

        logout = (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('password');
            this.setState({loggedOn: false})
        }
    
        render(){
        return(
        <div>
        {this.state.loggedOn ? <MainApplication logOut={this.logout}/> : <Login />}
        </div>
        )
    }    
}
export default withAuthenticate;