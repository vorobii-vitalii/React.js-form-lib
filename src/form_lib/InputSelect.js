import React from 'react'
import FormTag from './FormTag'


class InputSelect extends FormTag {
    render(){
        return (
            <select
                {...this.props}
            >
            {this.props.children}
            </select>
        )
    }
}

export default InputSelect;