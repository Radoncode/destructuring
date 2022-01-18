import { Component } from "react";
import Users from "./Footballer";

class Display extends Component {
    render(){
        return (
            <div>
                <h1>Footballer</h1>
                <Users name="Eric Cantonna" age="74"/>
                <Users name="Zinedine zidane" age="27" />
                <Users name="Roberto Carlos" age="73"/>
                <Users name="Christiano Ronaldo" age="71"/>
            </div>
        )
    }
}

export default Display;