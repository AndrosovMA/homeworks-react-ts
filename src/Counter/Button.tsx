import React, {FC} from "react";

type Props = {
    disabled?: boolean
    action: () => void
    value: string
    className: string
}
export const Button: FC<Props> = ({disabled, action, value, className}) => {
    return (
        <>
            <input type='button'
                   className={className}
                   disabled={disabled}
                   onClick={action}
                   value={value}
            />
        </>
    )
}