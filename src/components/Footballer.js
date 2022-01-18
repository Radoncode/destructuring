import { Component } from "react";

class Users extends Component  {

    
    render(){
        const { name, age } = this.props;
        return (
            <div>
                <p>Footballer: {name} {age} ans</p>
            </div>
        )
    }
}

export default Users;