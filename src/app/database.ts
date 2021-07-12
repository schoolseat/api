import MongoDB from '../database/MongoDB';

interface Methods {
	findAll(): Object;
	findOne(String): Object;
	add(Object): Object;
	findByIdAndRemove(String): Object;
}

const Mongo = new MongoDB({
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

export default async function LoadAll() {
    await Mongo.connect()
    if (!Mongo.users) return;
    return {
        bruteUsers: <Methods>Mongo.users,
        bruteContent: <Methods>Mongo.content,
        bruteClasses: <Methods>Mongo.classes,
        bruteMessages: <Methods>Mongo.messages,
        bruteLessons: <Methods>Mongo.lessons,
    }
}