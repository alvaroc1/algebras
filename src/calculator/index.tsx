import React from 'react'
import { evaluate } from 'mathjs'
import { BasicButtons } from './buttons'
import './style.css'

export interface CalculatorButton {
    value?: string;
    children: React.ReactNode;
    title?: string;
    onClick?(event: ReactCalculatorHandle): void;
    className?: string;
}

export interface ReactCalculatorHandle {
    Calculations: string[];
    SetCalculations: React.Dispatch<React.SetStateAction<string[]>>;
    PushCalculation(newCurrentValue: string): void;
    CurrentValue: string;
    ReplaceCurrentValue(newCurrentValue: string): void;
    PushCurrentValue(value: string): void;
};

export interface ReactCalculatorProps {
    className?: string;
    id?: string;
    Buttons?: CalculatorButton[][];
    defaultValue?: string;
    onChange?: (v: string) => void
};

export const Calculate = (input:string):number => {
    try {
        const result = evaluate(input);
        return result;
    }
    catch {
        return NaN;
    }
};

export function ReactCalculator(props:ReactCalculatorProps) {
    const [ Calculations, SetCalculations ] = React.useState<string[]>([props.defaultValue || '']);
    const [ ReplaceState, SetReplaceState ] = React.useState(false); // Pressing a key overwrites the value

    const ReactCalculatorRef = React.useRef<HTMLDivElement>(null);

    const CurrentValue = Calculations[Calculations.length - 1];
    const Buttons = props.Buttons || BasicButtons;

    let className = 'ReactCalculator';
    if (props.className) {
        className += ' ' + props.className;
    }

    const PushCalculation = React.useCallback((newCurrentValue:string) => {
        const {onChange} = props
        if (onChange) onChange(newCurrentValue)

        SetCalculations(prevData => {
            const newData = [ ...prevData ];
            newData.push(newCurrentValue);
            return newData;
        });

        SetReplaceState(false);
    }, [props]);

    const ReplaceCurrentValue = React.useCallback((newCurrentValue:string) => {
        SetCalculations(prevData => {
            const newData = [ ...prevData ];
            newData[newData.length - 1] = newCurrentValue;
            return newData;
        });

        SetReplaceState(false);
    }, []);

    const PushCurrentValue = React.useCallback((value:string) => {
        SetCalculations(prevData => {
            const newData = [ ...prevData ];
            newData[newData.length - 1] += value;
            return newData;
        });
        
        SetReplaceState(false);
    }, []);

    const HandleKeyDown = React.useCallback((event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            event.preventDefault();

            const output = Calculate(CurrentValue);
            if (isNaN(output)) {
                ReplaceCurrentValue('Invalid operation');
            }
            else {
                PushCalculation(output.toString());
            }
        }

        return false;
    }, [CurrentValue, PushCalculation, ReplaceCurrentValue]);

    const HandleChange = React.useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
        ReplaceCurrentValue(event.target.value);
    }, [ReplaceCurrentValue]);

    const Handle = React.useMemo(():ReactCalculatorHandle => {
        return {
            Calculations,
            SetCalculations,
            PushCalculation,
            CurrentValue,
            ReplaceCurrentValue,
            PushCurrentValue
        };
    }, [Calculations, CurrentValue, PushCalculation, PushCurrentValue, ReplaceCurrentValue]);

    let maxColumns = 0;
    for (let row of Buttons) {
        if (maxColumns < row.length) {
            maxColumns = row.length;
        }
    }

    const ButtonElements = React.useMemo(() => {
        return Buttons.map(row => {
            return row.map(cell => {
                let colSpan = 1;
                if (cell === row[row.length - 1]) {
                    colSpan = (maxColumns - row.length) + 1;
                }

                return (
                    <button
                        type='button'
                        key={ cell.value || cell.className }
                        className={ cell.className }
                        title={ cell.title }
                        tabIndex={ -1 }
                        style={{
                            gridColumnStart: 'auto',
                            gridColumnEnd: `span ${ colSpan }`
                        }}
                        onClick={ () => {
                            if (cell.onClick) {
                                cell.onClick(Handle);
                            }
                            if (cell.value) {
                                PushCurrentValue(cell.value);
                            }
                        }}
                    >{ cell.children }</button>
                );
            });
        });
    }, [Buttons, Handle, PushCurrentValue, maxColumns]);

    return (
        <div
            ref={ ReactCalculatorRef }
            id={ props.id }
            className={ className }
            data-haschanged={ ReplaceState }
        >

            <input
                readOnly
                className='InputPane'
                value={ CurrentValue.replace('*', '×').replace('/', '÷') }
                onKeyDown={ HandleKeyDown }
                onChange={ HandleChange }
            />

            <div
                className='ButtonPane'
                style={{
                    gridTemplateColumns: `repeat(${ maxColumns }, 1fr)`
                }}
            >
                { ButtonElements }
            </div>
        </div>
    )
}