const Button = ({text, callback}) => {
    return (
        <div className={'button'} onClick={callback}>{text}</div>
    )
}

export default Button