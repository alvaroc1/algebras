import { CalculatorButton, Calculate } from './index';

export const Number0Button:CalculatorButton = {
    className: 'Number0Button Introduction',
    children: '0',
    value: '0'
};

export const Number1Button:CalculatorButton = {
    className: 'Number1Button Introduction',
    children: '1',
    value: '1'
};

export const Number2Button:CalculatorButton = {
    className: 'Number2Button Introduction',
    children: '2',
    value: '2'
};

export const Number3Button:CalculatorButton = {
    className: 'Number3Button Introduction',
    children: '3',
    value: '3'
};

export const Number4Button:CalculatorButton = {
    className: 'Number4Button Introduction',
    children: '4',
    value: '4'
};

export const Number5Button:CalculatorButton = {
    className: 'Number5Button Introduction',
    children: '5',
    value: '5'
};

export const Number6Button:CalculatorButton = {
    className: 'Number6Button Introduction',
    children: '6',
    value: '6'
};

export const Number7Button:CalculatorButton = {
    className: 'Number7Button Introduction',
    children: '7',
    value: '7'
};

export const Number8Button:CalculatorButton = {
    className: 'Number8Button Introduction',
    children: '8',
    value: '8'
};

export const Number9Button:CalculatorButton = {
    className: 'Number9Button Introduction',
    children: '9',
    value: '9'
};

export const DecimalButton:CalculatorButton = {
    className: 'DecimalButton Introduction',
    children: '.',
    value: '.'
}

export const DivisionButton:CalculatorButton = {
    className: 'DivisionButton Combinator',
    children: '÷',
    value: ' / '
};

export const MultiplicationButton:CalculatorButton = {
    className: 'MultiplicationButton Combinator',
    children: '×',
    value: ' * '
};

export const SubtractionButton:CalculatorButton = {
    className: 'SubtractionButton Combinator',
    children: '-',
    value: ' - '
};

export const AdditionButton:CalculatorButton = {
    className: 'AdditionButton Combinator',
    children: '+',
    value: ' + '
};

export const OpenParenthesisButton:CalculatorButton = {
    className: 'OpenParenthesisButton Introduction',
    children: '(',
    value: '('
};

export const ClosedParenthesisButton:CalculatorButton = {
    className: 'ClosedParenthesisButton Introduction',
    children: ')',
    value: ')'
};

export const ClearButton:CalculatorButton = {
    className: 'ClearButton Elimination',
    children: 'C',
    onClick: event => {
        event.SetCalculations(['']);
    }
};

export const EqualsButton:CalculatorButton = {
    className: 'EqualsButton Elimination',
    children: '=',
    onClick: event => {
        const output = Calculate(event.CurrentValue);
        if (isNaN(output)) {
            event.ReplaceCurrentValue('Invalid operation');
        }
        else {
            event.PushCalculation(output.toString())
        }
    }
};

export const BasicButtons:CalculatorButton[][] = [
    [
        Number7Button,
        Number8Button,
        Number9Button,
        OpenParenthesisButton,
        ClosedParenthesisButton,
    ],
    [
        Number4Button,
        Number5Button,
        Number6Button,
        MultiplicationButton,
        DivisionButton,
    ],
    [
        Number1Button,
        Number2Button,
        Number3Button,
        AdditionButton,
        SubtractionButton,
    ],
    [
        ClearButton,
        Number0Button,
        DecimalButton,
        EqualsButton,
    ]
];