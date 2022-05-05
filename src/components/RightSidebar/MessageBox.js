import React, { useEffect, useState } from 'react';
import LeftChatBubble from './LeftChatBubble';
import { useDispatch } from 'react-redux';
import RightChatBubble from './RightChatBubble';
import MessageInput from './MessageInput';
import { addNewMessage } from '../../actions/contact';
import ProfileHeader from '../LeftSidebar/ProfileHeader';
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);
  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: '12:00',
      sender: 'me',
      message_id: length + 1,
    };
    dispatch(addNewMessage(object, props.user.id));
    // updatelength
    setLength(object.message_id);

    setChat([...chat, object]);
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} />
        </div>
        {chat.length === 0 && (
          <p className="no-message-alert">NO MESSAGES FOUND</p>
        )}
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"Ajay"}
                  image={
                    "data:image/jpeg;base64,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"
                  }
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        )}

        <MessageInput newMessageHandler={updateMesssages} user={props.user} />
      </div>
    </>
  );
}

export default MessageBox;
