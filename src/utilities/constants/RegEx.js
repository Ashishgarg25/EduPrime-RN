const RegEx ={
    alphabet: /^[a-zA-Z]+$/,
    alphabetSpace: /^[a-zA-Z ]*$/,
    number: /^[0-9]+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    mobileNumber: /^[0]?[789]\d{9}$/,
    strongRegex: RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
    password: RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$"),
    alphaNumeric: /^[a-zA-Z0-9]*$/,
    alphaNumericSpace: /^[a-zA-Z0-9 ]*$/,
    alphaNumericSpaceSpecialChar: /^[ A-Za-z0-9_@./#&+-]*$/,
}

export default RegEx;