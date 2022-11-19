import { useEffect, useState } from "react";
import Header from './components/Layout/Header';
import NotificationsContainer from './components/Notifications/NotificationsContainer/NotificationsContainer';

function App() {
  const notificationsFromLocalStorage = JSON.parse(localStorage.getItem('notifications')) || []
  const [notifications, setNotifications] = useState(notificationsFromLocalStorage)

  useEffect(() => {
    fetch(`http://localhost:3000/notifications`, {
      method: "GET",
    })
      .then(response => {
        if (!response.ok) return notifications
        else return response.json()
      })
      .then(notificationsData => setNotifications(notificationsData))
      .catch(error => alert(error))
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications))
  }, [notifications])

  return (
    <div className="App">
      <Header/>
      <NotificationsContainer notifications={notifications}/>
    </div>
  );
}

export default App;
