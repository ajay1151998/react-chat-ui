import React from 'react';

function ContactLastMessage(props) {
  return (
    <div className="contactText">
      <p> {props.chatlog.text}</p>
    </div>
  );
}

export default ContactLastMessage;
