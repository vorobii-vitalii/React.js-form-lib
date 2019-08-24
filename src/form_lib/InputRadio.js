import React from 'react'
import FormTag from './FormTag'

class InputRadio extends FormTag {

    render(){
        return (
            <input 
                type="radio"
                {...this.props}
            />
        )
    }
}

export default InputRadio;