const DateInput = () => {
    return (
        <div className="date-input">
            <label htmlFor="">EXP DATE (MM/YY)</label>
            <div className="date-fields">
                <input type="number" name="month" id="month" placeholder="MM" minLength={2} maxLength={2} />
                <input type="number" name="year" id="year" placeholder="YY" minLength={2} maxLength={2} />
            </div>
        </div>
    )
}

export default DateInput