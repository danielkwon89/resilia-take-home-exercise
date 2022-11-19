const Button = ({text, callback}) => {
    return (
        <p className={'button'} onClick={callback}>{text}</p>
    )
}

export default Button