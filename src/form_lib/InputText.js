import React from 'react'
import FormTag from './FormTag'

class InputText extends FormTag{

    render(){
        return (
            <input 
                type="text" 
                {...this.props}
            />
        )
    }
}


export default InputText;