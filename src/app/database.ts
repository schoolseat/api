import MongoDB from '../database/MongoDB';

const database = MongoDB({
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

const connect = () => {
  return database.connect()
}

const bruteUsers = database.users;
const bruteContent = database.content;
const bruteClasses = database.classes;
const bruteMessages = database.messages;
const bruteLessons = database.lessons;

export { 
  bruteUsers,
  bruteContent,
  bruteClasses,
  bruteMessages,
  bruteLessons,
  connect,
}