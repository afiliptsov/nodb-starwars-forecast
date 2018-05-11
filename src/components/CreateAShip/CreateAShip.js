import React,{Component} from "react";

import axios from "axios";

export default class CreateAShip extends Component{
constructor(){
    super();
    this.state = ({
        shipArray: [
            {
                name: "fffds",
                maxSpeed: 44,
                crew: 1,
                cargoCapacity: 455,
                id: 0
            }
        ]

    });

    this.componentDidMount = this.componentDidMount.bind(this);
    this.createAShip = this.createAShip.bind(this);

}

componentDidMount(){
    axios.get("http://localhost:3001/api/ships").then(response => {
        this.setState({
            shipArray: response.data
        })
    })
}
    createAShip(name, maxSpeed, crew, cargoCapacity){
    axios.post("http://localhost:3001/api/ships", { name,maxSpeed,crew,cargoCapacity}).then(response=>{
        console.log(response);
        this.setState({
            shipArray: response.data
        })
    })
}

    render(){
        console.log(this.state.shipArray);
        return (
        <div className="create-ship-class">
        <button onClick={()=>this.createAShip("name",23,5,10,3)}></button>
            <input type="Name" ></input>
            <input type="Max speed"></input>
            <input type="Crew"></input>
            <input type="Cargo Cap"></input>

        
        
        
        </div>
        )

    }




}