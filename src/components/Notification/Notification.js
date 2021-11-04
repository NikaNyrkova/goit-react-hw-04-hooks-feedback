import React from "react";
import PropTypes from "prop-types";

import st from "./Notification.module.css";

const Notification = ({ message }) => (
  <p className={st.notification}>{message}</p>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
