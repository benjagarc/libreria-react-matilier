import React,{Component} from 'react';

class HelloCC extends Component{

    name:string;
    lastname:string;
    constructor(props: any){
        super(props);
        this.name = (!props.name) ? '-->>' : props.name;
        this.lastname = (!props.lastname) ? '...' : props.lastname;
    }
    render(){
    return <h1>{this.name} {this.lastname}</h1>
    }
}

export default HelloCC;