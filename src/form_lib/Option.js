import React from 'react'
import FormTag from './FormTag'

class Option extends FormTag{
    render(){
        return <option {...this.props}>{this.props.children}</option>
    }
}


export default Option;