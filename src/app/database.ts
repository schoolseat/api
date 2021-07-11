import MongoDB from '../database/MongoDB';

interface Methods {
	findAll(): Object;
	findOne(String): Object;
	add(Object): Object;
	findByIdAndRemove(String): Object;
}
type Output = {
	bruteUsers: Methods;
	bruteContent: Methods;
	bruteClasses: Methods;
	bruteMessages: Methods;
	bruteLessons: Methods;
}

const Mongo = new MongoDB({
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
async function LoadAll() {
	await Mongo.connect();

	if (!Mongo.users) return;

	const bruteUsers = <Methods>Mongo.users
	const bruteContent = <Methods>Mongo.content;
	const bruteClasses = <Methods>Mongo.classes;
	const bruteMessages = <Methods>Mongo.messages;
	const bruteLessons = <Methods>Mongo.lessons;

	return {
		bruteUsers,
		bruteContent,
		bruteClasses,
		bruteMessages,
		bruteLessons,
	}
}
const {
	bruteUsers,
	bruteContent,
	bruteClasses,
	bruteMessages,
	bruteLessons,
} = <Output> <unknown>LoadAll();

export {
	bruteUsers,
	bruteContent,
	bruteClasses,
	bruteMessages,
	bruteLessons,
}

