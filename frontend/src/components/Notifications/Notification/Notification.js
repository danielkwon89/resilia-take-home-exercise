const Notification = ({notification}) => {
    return (
        <article className={'notification'}>
            <h4>{notification && notification.title}</h4>
            <p>{notification && notification.description}</p>
        </article>
    )
}

export default Notification