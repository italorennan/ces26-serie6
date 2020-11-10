import React from 'react';

class Calculator extends React.Component {
    render() {
        return (
            <>
                <div class="display">{this.props.valueExhibited}</div>
                <br/>
                <button class="number" onClick={() => this.props.write('7')}>7</button>
                <button class="number" onClick={() => this.props.write('8')}>8</button>
                <button class="number" onClick={() => this.props.write('9')}>9</button>
                <button class="operator" onClick={() => this.props.write('+')}>+</button>
                <br />
                <button class="number" onClick={() => this.props.write('4')}>4</button>
                <button class="number" onClick={() => this.props.write('5')}>5</button>
                <button class="number" onClick={() => this.props.write('6')}>6</button>
                <button class="operator" onClick={() => this.props.write('-')}>-</button>
                <br />
                <button class="number" onClick={() => this.props.write('1')}>1</button>
                <button class="number" onClick={() => this.props.write('2')}>2</button>
                <button class="number" onClick={() => this.props.write('3')}>3</button>
                <button class="operator" onClick={() => this.props.write('*')}>*</button>
                <br />
                <button class="number" onClick={() => this.props.clean()}>C</button>
                <button class="number" onClick={() => this.props.write('0')}>0</button>
                <button class="number" onClick={() => this.props.write('.')}>.</button>
                <button class="operator" onClick={() => this.props.write('/')}>/</button>
                <br />
                <button class="eval" onClick={() => this.props.evaluate()}>=</button>
            </>
        );
    }
}

export default Calculator;