import React from 'react';

function LeftChatBubble({ message, name, image }) {
  return (
    <>
      <div className="message-bubble mbl">
        <img src={image} style={styles.avatar} alt="sender-pic" />{' '}
        <div className="left-bubble ">
          <div className="text-message">
            <p className="name">{name}</p>
            <p className="message">{message.text}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          <div className="bubble-arrow "></div>
        </div>
      </div>
    </>
  );
}
const styles = {
  avatar: {
    width: '49px',
    height: '49px',
    borderRadius: '50%',
    margin: '0 15px',
  },
};
export default LeftChatBubble;
