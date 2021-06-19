import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';

export default function AdminChatCard({ chat }) {
  // const { tokenContext: { token } } = useContext(AppContext);
  const { nickname, messages } = chat;

  const getLatestMessage = () => messages[messages.length - 1].timestamp;

  return (
    <section className="chat-card" data-testid="containerChat">
      <section className="nickname" data-testid="profile-name">
        { nickname }
      </section>
      <section data-testid="last-message">
        <span>Última mensagem às </span>
        <Moment date={ getLatestMessage() } format="HH:mm" />
        <span>.</span>
      </section>
    </section>
  );
}

AdminChatCard.propTypes = {
  chat: PropTypes.objectOf(PropTypes.any).isRequired,
};
