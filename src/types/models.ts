export interface BaseSchema {
  _id: string
  createdAt: string
  updatedAt: string
}

export interface User extends BaseSchema {
  password: string
  email: string
  name: string
  nickname?: string
  profilePic?: string
  bornDate: string
  bio: string
  stars: string
  level: string
  xp: string
}

export interface Lesson extends BaseSchema {
  deadline: string
  title: string
  content: string
  text: string
  activityLink: string
}

export interface Content extends BaseSchema {
  title: string
  content: string
  text: string
  classe: string
}

export interface Classe extends BaseSchema {
  number?: number
  discipline: string
  icon: string
  color: string
  bio: string
  users: string[]
  lessons: string[]
  contents: string[]
}

export interface Notification extends BaseSchema {
  to: User
  content: string
  data: {
    route: string
    props: object
  }
}
