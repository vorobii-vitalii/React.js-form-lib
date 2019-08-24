import React from 'react'
import FormTag from './FormTag'

class Form extends FormTag{

    render(){
        return (
            <form {...this.props}>
                {this.props.children}
            </form>
        )
    }
    
} 

export default Form;