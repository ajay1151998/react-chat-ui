import React from 'react';
import ContactAvatar from './ContactAvatar';
import ContactLastMessage from './ContactLastMessage';
import ContactName from './ContactName';
import { Link } from 'react-router-dom';
function ContactTab(props) {
  const { image, name, chatlog, id } = props.contact;

  let length = chatlog.length;

  const noMessage = {
    text: ' 0 message Conversation not initiated',
  };
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="contact-tab" s>
        <div>
          {' '}
          <ContactAvatar image={image} />
        </div>

        <div style={{ marginLeft: '16px' }}>
          <ContactName name={name} />

          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
          />
        </div>
      </div>
    </Link>
  );
}

export default ContactTab;
