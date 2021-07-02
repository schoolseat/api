const Database = require('./database');

const db = new Database().start();

module.exports =  class DataController {
    constructor() {}

    //Get methods 9 - 23
    async getAllUsers() {
        return (await db).users.findAll()
    }
    async getUserById(id) {
        return (await db).users.findById(id)
    }
    async getAllClasses() {
        return (await db).classes.findAll()
    }
    async getAllLessons() {
        return (await db).lessons.findAll()
    }
    async getAllContent() {
        return (await db).content.findAll()
    }
    async getAllMessages() {
        return (await db).messages.findAll()
    }
     //Get methods 25 - 75
    async updateUserClasses(user, classes) {
        return (await db).users.update(user.id, { $set: { classes } })
    }
    async updateUserNickName(user, nickname) {
        return (await db).users.update(user.id, { $set: { nickname } })
    }
    async updateUserName(user, name) {
        return (await db).users.update(user.id, { $set: { name } })
    }
    async updateUserBio(user, bio) {
        return (await db).users.update(user.id, { $set: { bio } })
    }
    async updateUserEmail(user, email) {
        return (await db).users.update(user.id, { $set: { email } })
    }
    async updateUserPassword(user, password) {
        return (await db).users.update(user.id, { $set: { password } })
    }
    async updateUserProfilePic(user, profilePic) {
        return (await db).users.update(user.id, { $set: { profilePic } })
    }
    async updateUserLevel(user, level) {
        return (await db).users.update(user.id, { $set: { level } })
    }
    async updateUserStars(user, stars) {
        return (await db).users.update(user.id, { $set: { stars } })
    }
    async updateUserXp(user, xp) {
        return (await db).users.update(user.id, { $set: { xp } })
    }
    async updateClasseLesson(user, lesson) {
        return (await db).classes.update(user.id, { $set: { lesson } })
    }
    async updateClassesContent(user, content) {
        return (await db).classes.update(user.id, { $set: { content } })
    }
    async updateClasseDiscipline(user, discipline) {
        return (await db).classes.update(user.id, { $set: { discipline } })
    }
    async updateClasseIcon(user, icon) {
        return (await db).classes.update(user.id, { $set: { icon } })
    }
    async updateClasseColor(user, color) {
        return (await db).classes.update(user.id, { $set: { color } })
    }
    async updateClasseBio(user, bio) {
        return (await db).classes.update(user.id, { $set: { bio } })
    }
    async updateClasseUsers(user, users) {
        return (await db).classes.update(user.id, { $set: { users } })
    }
}