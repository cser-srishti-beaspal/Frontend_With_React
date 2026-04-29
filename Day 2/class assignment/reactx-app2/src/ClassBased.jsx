import {Component} from 'react'

class ClassBased extends Component{
    constructor(){
        super()
        console.log(this)
    }
    render(){
        return <h2>this is the heading from the client based component</h2>
    }
}
export default ClassBased;