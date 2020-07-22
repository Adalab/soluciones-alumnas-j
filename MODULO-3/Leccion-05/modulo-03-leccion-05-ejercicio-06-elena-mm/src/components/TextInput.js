import React from 'react';

class TextInput extends React.Component {

constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
}
    handleText(event) {
        const inputValue = event.target.value;
        this.props.getInformation(inputValue);
    }

    render() {
        return(
            <form>
                <textarea onChange={this.handleText}></textarea>
            </form>
        )
    }
}


export default TextInput;