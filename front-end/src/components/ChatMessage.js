import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export default function ChatMessage({ msg, client, admin }) {
  const nickname = (msg.nickname === client)
    ? msg.nickname
    : 'Loja';

  let props;
  if (admin) {
    props = {
      className: (nickname === 'Loja') ? 'chat-msg own-msg' : 'chat-msg',
    };
  }

  if (!admin) {
    props = {
      className: (nickname !== 'Loja') ? 'chat-msg own-msg' : 'chat-msg',
    };
  }

  return (
    <section { ...props }>
      <section data-testid="nickname" className="msg-nickname">
        { nickname }
      </section>
      <section data-testid="text-message" className="msg-content">
        { msg.message }
      </section>
      <section data-testid="message-time" className="msg-timestamp">
        <Moment date={ msg.timestamp } format="HH:mm" />
      </section>
    </section>
  );
}

ChatMessage.propTypes = {
  admin: PropTypes.bool,
  msg: PropTypes.objectOf(PropTypes.any).isRequired,
  client: PropTypes.string.isRequired,
};

ChatMessage.defaultProps = {
  admin: false,
};
