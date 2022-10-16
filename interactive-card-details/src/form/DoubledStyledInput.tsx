import DateInput from "./DateInput"
import StyledInput from "./StyledInput"


const DoubledStyledInput = () => {
    return (
        <div className="doubled-styled-input">
            <DateInput />
            <StyledInput inputType="number" inputPlaceHolder="e.g 123" labelDetails="cvc" inputMaxLength={3} inputMinLength={3} />
        </div>
    )
}

export default DoubledStyledInput