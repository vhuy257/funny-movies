import React, {Component} from 'react';
import { withFormsy  } from 'formsy-react';

class InputTextBox extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        const errorMessage = this.props.errorMessage;
        return (
            <div className="input-wrapper">
                <div className="label text-sm font-bold text-gray-700">
                    <label>{this.props.labelName}</label>
                </div>
                <textarea onChange={this.changeValue} type="text" className={this.props.className} value={this.props.value || ''} />
                <div className="error-message">
                    <span className="text-red-500 text-sm">{errorMessage}</span>
                </div>
            </div>
        )
    }
}

export default withFormsy(InputTextBox);