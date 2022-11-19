import Notification from "../Notification/Notification"

const NotificationsContainer = ({notifications}) => {
    return (
        <section>
            <h2>Notification Center</h2>
            {notifications && notifications.length ? notifications.map(notification => <Notification notification={notification}/>) : <h5>You have no notifications!</h5>}
        </section>
    )
}

export default NotificationsContainer