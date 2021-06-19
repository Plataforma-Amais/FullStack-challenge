const connection = require('./connection');

const saveAdminMessage = async (message, userId) => {
  await connection()
    .then((db) => db.collection('messages').updateOne(
      { userId },
      { $push: { messages: message } },
      { upsert: true },
    ))
    .catch((err) => err);

  return true;
};

const getChats = async () => {
    const result = await connection()
      .then((db) => db.collection('messages').find().toArray());

    return result;
};

const getMessagesByUserId = async (userId) => {
  const result = await connection()
    .then((db) => db.collection('messages').findOne({ userId }));

  return result;
};

const removeMessagesByUserId = async (userId) => {
  const result = await connection()
  .then((db) => db.collection('messages').deleteOne({ userId }));

return result;
};

module.exports = {
  getMessagesByUserId,
  getChats,
  saveAdminMessage,
  removeMessagesByUserId,
};
