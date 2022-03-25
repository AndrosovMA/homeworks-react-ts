import React, {ChangeEvent, FC} from "react";
import {Button} from "./Button";

type Props = {
    maxValue: number
    correctInputValue: boolean
    changeMaxValue: (a: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    changeStartValue: (a: ChangeEvent<HTMLInputElement>) => void
    setParameters: () => void
}

export const SettingsCounter: FC<Props> = ({
                                               maxValue, correctInputValue, changeMaxValue,
                                               startValue, changeStartValue, setParameters
                                           }) => {
    return (
        <div className='container-counter'>
            <div className='counter__display set__display'>
                <div>
                    <span className='set__display-value'> max value </span>
                    <input type="number"
                           className={correctInputValue ? 'inputMaxValue' : 'inputMaxValue incorrectInput'}
                           value={maxValue}
                           onChange={changeMaxValue}/>
                </div>
                <div>
                    <span className='set__display-value'> start value </span>
                    <input type="number"
                           className={correctInputValue ? 'inputStartValue' : 'inputStartValue incorrectInput'}
                           value={startValue}
                           onChange={changeStartValue}/>
                </div>
            </div>
            <div className='counter__button'>
                <Button
                       className='reset input_param'
                       disabled={!correctInputValue}
                       action={setParameters}
                       value='setParameters'/>
            </div>
        </div>
    )
}