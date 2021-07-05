const Database = require('./database');

const db = new Database().start();

module.exports = class DataController {
    constructor() { }

    //Get methods 9 - 23

    async getAllUsers() {
        return (await db).users.findAll()
    }
    async getUserById(id) {
        return (await db).users.findOne({ _id: id})
    }
    async createUser(user) {
        return (await db).users.add(user);
    }
    //parece q n tá funcionano 
    async removeUser(id) {
        return (await db).users.findByIdAndRemove({ _id: id});
    }
    async getAllClasses() {
        return (await db).classes.findAll()
    }
    async getClassesById(id) {
        return (await db).classes.findOne({ _id: id})
    }
    async createClasses(user) {
        return (await db).classes.add(user);
    }
    //parece q n tá funcionano 
    async removeClasses(id) {
        return (await db).classes.findByIdAndRemove({ _id: id});
    }
    async getAllLessons() {
        return (await db).lessons.findAll()
    }    
    async getLessonsById(id) {
        return (await db).lessons.findOne({ _id: id})
    }
    async createLessons(user) {
        return (await db).lessons.add(user);
    }
    //parece q n tá funcionano 
    async removeLessons(id) {
        return (await db).lessons.findByIdAndRemove({ _id: id});
    }
    async getAllMessages() {
        return (await db).messages.findAll()
    }    
    async getMessagesById(id) {
        return (await db).messages.findOne({ _id: id})
    }
    async createMessages(user) {
        return (await db).messages.add(user);
    }
    //parece q n tá funcionano 
    async removeMessages(id) {
        return (await db).messages.findByIdAndRemove({ _id: id});
    }
    async getAllContent() {
        return (await db).content.findAll()
    }    
    async getContentById(id) {
        return (await db).content.findOne({ _id: id})
    }
    async createContent(user) {
        return (await db).content.add(user);
    }
    //parece q n tá funcionano 
    async removeContent(id) {
        return (await db).content.findByIdAndRemove({ _id: id});
    }
    async updateUser(user, { classes, nickname, name, bio, email, password, profilePic, level, xp }) {
        const update = async (value) => {
            return (await db).users.update(user._id, value);
        }
        if (classes) {
            return update({ $set: { classes } })
        }
        if (nickname) {
            return update({ $set: { nickname } })
        }
        if (name) {
            return update({ $set: { name } })
        }
        if (bio) {
            return update({ $set: { bio } })
        }
        if (email) {
            return update({ $set: { email } })
        }
        if (password) {
            return update({ $set: { password } })
        }
        if (profilePic) {
            return update({ $set: { profilePic } })
        }
        if (level) {
            return update({ $set: { level } })
        }
        if (xp) {
            return update({ $set: { xp } })
        }
        if (!classes && !nickname && !name && !bio && !email && !password && !profilePic && !level && !xp) {
            throw new Error('tu esqueceu os parametro burro')
        } else {
            return (await db).users.findById(user.id)
        }
    }
    async updateClasse(classe, { lesson, content, discipline, icon, color, bio, users }) {
        const update = async (value) => {
            return (await db).classes.update(classe.id, value);
        }
        if (lesson) {
            return update({ $set: { lesson } })
        }
        if (content) {
            return update({ $set: { content } })
        }
        if (discipline) {
            return update({ $set: { discipline } })
        }
        if (icon) {
            return update({ $set: { icon } })
        }
        if (color) {
            return update({ $set: { color } })
        }
        if (bio) {
            return update({ $set: { bio } })
        }
        if (users) {
            return update({ $set: { users } })
        }
        if (!lesson && !content && !discipline && !icon && !color && !bio && !users) {
            throw new Error('tu esqueceu os parametro burro')
        } else {
            return (await db).classes.findById(classe.id)
        }
    }
}
