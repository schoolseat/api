export interface User {
  _id: String,
  password: String,
  email: String,
  name: String,
  nickname?: String,
  profilePic?: String,
  bornDate: String,
  bio: String,
  stars: String,
  level: String,
  xp: String,
  classes?: Array<Number>,
}
export interface Lesson {
  _id: String,
  deadline: Date,
  title: String,
  content: String,
  text: String,
  activityLink: String,
}
export interface Content {
  _id: String,
  author: Object,
  to: String,
  content: String,
}
export interface Classe {
  _id: String,
  class: String,
  discipline: String,
  icon: String,
  color: String,
  bio: String,
  teacher: Object,
  school: Object,
  lessons: Array<Number>,
  users: Array<Number>,
  content: Array<Number>,
}
export interface Message {
  _id: String,
  author: Object,
  to: String,
  content: String,
}

export const
  timestampOpts = { // Make Mongoose use Unix time (1 Jan 1970)
    timestamps: true
  };
