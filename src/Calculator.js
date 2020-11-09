import React from 'react';

class Calculator extends React.Component {
    render() {
        return (
            <>
                <span>{this.props.valueExhibited}</span>
                <br/>
                <button onClick={() => this.props.write('7')}>7</button>
                <button onClick={() => this.props.write('8')}>8</button>
                <button onClick={() => this.props.write('9')}>9</button>
                <br />
                <button onClick={() => this.props.write('4')}>4</button>
                <button onClick={() => this.props.write('5')}>5</button>
                <button onClick={() => this.props.write('6')}>6</button>
                <br />
                <button onClick={() => this.props.write('1')}>1</button>
                <button onClick={() => this.props.write('2')}>2</button>
                <button onClick={() => this.props.write('3')}>3</button>
                <br />
                <button onClick={() => this.props.clean()}>C</button>
                <button onClick={() => this.props.write('0')}>0</button>
                <button onClick={() => this.props.write('.')}>.</button>
                <br />
                <button onClick={() => this.props.write('+')}>+</button>
                <button onClick={() => this.props.write('-')}>-</button>
                <button onClick={() => this.props.write('*')}>*</button>
                <button onClick={() => this.props.write('/')}>/</button>
                <br />
                <button onClick={() => this.props.evaluate()}>=</button>
            </>
        );
    }
}

export default Calculator;