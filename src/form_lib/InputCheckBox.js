import React from 'react'
import FormTag from './FormTag'

class InputCheckBox extends FormTag {
    render(){
        return (
            <input 
                type="checkbox" 
                {...this.props}
            />
        )
    }
}

export default InputCheckBox;