import React, {ChangeEvent, useState} from "react";
import {SettingsCounter} from "./SettingsCounter";
import {Button} from "./Button";


export function Counter() {

    const setLocalStorageMaxValue = (value: number) => {
        let stringNumber = String(value)
        localStorage.setItem('maxValue', stringNumber)
    }
    const getLocalStorageMaxValue = () => {
        let value = localStorage.getItem('maxValue');
        return Number(value)
    }

    const [maxValue, setMaxValue] = useState<number>(6);
    const [startValue, setStartValue] = useState<number>(0)

    const [displayValue, setDisplayValue] = useState<number>(0);
    const [isMaxValue, setIsMaxValue] = useState<boolean>(false);
    const [correctInputValue, setCorrectInputValue] = useState(true);

    const incrementValueCounter = () => {
        if (displayValue === maxValue - 1) {
            setIsMaxValue(true)
        }
        setDisplayValue(displayValue + 1)
    }
    const resetValueCounter = () => {
        setDisplayValue(0);
        setIsMaxValue(false);
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = Number(e.currentTarget.value);

        if (currentValue < 0 && currentValue > -2) {
            setMaxValue(currentValue)
            setCorrectInputValue(false);
        } else if (currentValue > startValue) {
            setMaxValue(currentValue)
            setCorrectInputValue(true);
        } else if (currentValue === startValue) {
            setMaxValue(currentValue);
            setCorrectInputValue(false);
        } else if (currentValue < startValue) {
            setCorrectInputValue(false);
        }
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = Number(e.currentTarget.value);

        if (currentValue < 0 && currentValue > -2) {
            setCorrectInputValue(false);
            setStartValue(currentValue)
        } else if (currentValue > maxValue) {
            setCorrectInputValue(false);
        } else if (currentValue === maxValue) {
            setStartValue(currentValue);
            setCorrectInputValue(false);
        } else if (currentValue < maxValue && currentValue > -2) {
            setStartValue(currentValue);
            setCorrectInputValue(true);
        }
    }
    const setParameters = () => {
        resetValueCounter();
        setDisplayValue(startValue);
    }

    return (
        <div className='wrapper'>
            <div className='container-counter'>
                <div className={correctInputValue ? 'counter__display' : 'counter__display incorrectDisplay'}>
                    <div>
                        <span className={!isMaxValue ? 'display__number' : 'display__numberEnd'}>
                            {correctInputValue ? displayValue : <div className='incorrectDisplay'>Incorrect value</div>}
                        </span>
                    </div>
                </div>
                <div className='counter__button'>
                    <Button disabled={isMaxValue}
                            action={incrementValueCounter}
                            value='inc'
                            className='inc'/>
                    <Button value='reset'
                            className='reset'
                            action={resetValueCounter}
                    />
                </div>
            </div>

            <SettingsCounter maxValue={maxValue}
                             correctInputValue={correctInputValue}
                             changeMaxValue={changeMaxValue}
                             startValue={startValue}
                             changeStartValue={changeStartValue}
                             setParameters={setParameters}/>
        </div>
    )
}



