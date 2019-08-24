import React, {Component} from "react"

import {InputText,TextArea,InputCheckBox,InputRadio,InputSelect,Option,Form} from './form_lib/FormLib'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <InputText
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <InputText
                    value={this.state.lastName} 
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <TextArea 
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
                
                <br />
                
                <label>
                    <InputCheckBox 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>

                <br />
                <label>
                    <InputRadio 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <InputRadio 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                
                <label>Favorite Color:</label>
                <InputSelect 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <Option value="blue">Blue</Option>
                    <Option value="green">Green</Option>
                    <Option value="red">Red</Option>
                    <Option value="orange">Orange</Option>
                    <Option value="yellow">Yellow</Option>
                </InputSelect>
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
                <button>Submit</button>
            </Form>
        )
    }
}

export default App
