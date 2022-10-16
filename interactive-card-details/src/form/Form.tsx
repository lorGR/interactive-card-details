import DoubledStyledInput from "./DoubledStyledInput"
import StyledInput from "./StyledInput"




const Form = () => {
    return (
        <form className="form">
            <StyledInput inputType="text" inputPlaceHolder="e.g JaneAppleseed" labelDetails="cardholder name" />
            <StyledInput inputType="number" inputPlaceHolder="e.g 1234 5678 9123 0000" labelDetails="card number" />
            <DoubledStyledInput />
            <button type="submit">Confim</button>
        </form>    
    )
}

export default Form