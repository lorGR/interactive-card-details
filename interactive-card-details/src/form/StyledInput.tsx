interface StyledInputProps {
    inputType: string,
    inputPlaceHolder: string,
    labelDetails: string,
    inputMaxLength?: number
    inputMinLength?: number
}

const StyledInput: React.FC<StyledInputProps> = ({ inputType, inputPlaceHolder, labelDetails, inputMaxLength, inputMinLength }) => {
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
            />
        </div>
    )
}

export default StyledInput