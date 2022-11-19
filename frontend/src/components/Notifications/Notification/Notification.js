import { useState } from "react";
import Button from "../../Button/Button";

const Notification = ({notification}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = (event) => {
        setIsOpen(!isOpen);
    };

    return (
        <article className={'notification'}>
            <h4>{notification && notification.title}</h4>
            {isOpen ? (
                <p className="notification-description">{notification.description}</p>
            ) : (
                <></>
            )}

            {isOpen ? (
                <Button text={'Close'} callback={toggleDescription}/>
            ) : (
                <Button text={'View Details'} callback={toggleDescription}/>
            )}
        </article>
    )
}

export default Notification