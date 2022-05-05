import React from 'react';

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p>New Conversation</p>
      <span>
        {' '}
        <i onClick={handleClick} className="fas fa-plus"></i>
      </span>
    </div>
  );
}

export default NewConversation;
