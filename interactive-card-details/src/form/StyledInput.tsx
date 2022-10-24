import React from "react"

interface StyledInputProps {
    inputType: string,
    inputPlaceHolder: string,
    labelDetails: string,
    inputMaxLength?: number
    inputMinLength?: number
}

const StyledInput: React.FC<StyledInputProps> = ({ inputType, inputPlaceHolder, labelDetails, inputMaxLength, inputMinLength }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div className="styled-input">
            <label htmlFor={labelDetails}>{labelDetails.toUpperCase()}</label>
            <input
                type={inputType}
                name={labelDetails}
                id={labelDetails}
                placeholder={inputPlaceHolder}
                maxLength={inputMaxLength}
                minLength={inputMinLength}
                onChange={handleChange}
            />
        </div>
    )
}

export default StyledInput