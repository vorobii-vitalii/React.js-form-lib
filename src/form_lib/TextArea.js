import React from 'react'
import FormTag from './FormTag'

class TextArea extends FormTag {
    render(){
        return (
            <textarea 
                    {...this.props}
            />
        )
    }
}

export default TextArea;