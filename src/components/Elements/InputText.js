import React, {Component} from 'react';
import { withFormsy  } from 'formsy-react';

class InputText extends Component {
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
                <input onChange={this.changeValue} type="text" className="p-1 w-12" value={this.props.value || ''} />
                <span>{errorMessage}</span>
            </div>
        )
    }
}

export default withFormsy(InputText);