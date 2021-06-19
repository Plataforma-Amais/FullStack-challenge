import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import AdminChatCard from './AdminChatCard';

export default function AdminChatContainer({ chats }) {
  const emptyChats = 'Nenhuma conversa por aqui.';

  return (
    <section className="admin-chats-container">
      { (chats.length < 1)
        ? <h4>{ emptyChats }</h4>
        : chats.map((chat) => (
          <Link
            to={ {
              pathname: `/admin/chats/${chat.userId}`,
              state: { user: chat.nickname },
            } }
            key={ chat.userId }
            style={ { textDecoration: 'none' } }
          >
            <AdminChatCard chat={ chat } />
          </Link>
        )) }
    </section>
  );
}

AdminChatContainer.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.any),
};

AdminChatContainer.defaultProps = {
  chats: [],
};
