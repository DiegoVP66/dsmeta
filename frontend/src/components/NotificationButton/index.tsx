import NButton from "../../assets/img/notification-icon.svg";

import "./styles.css";

const NotificationButton = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={NButton} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
