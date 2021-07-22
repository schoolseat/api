import { createModelFactory } from './createModelFactory'
import { ClasseSchema } from './schemas/ClasseSchema'
import { ContentSchema } from './schemas/ContentSchema'
import { LessonSchema } from './schemas/LessonSchema'
import { NotificationSchema } from './schemas/NotificationSchema'
import { UserSchema } from './schemas/UserSchema'

export const Users = createModelFactory('Users', UserSchema)

export const Classes = createModelFactory('Classes', ClasseSchema)

export const Contents = createModelFactory('Contents', ContentSchema)

export const Notifications = createModelFactory('Notifications', NotificationSchema)

export const Lessons = createModelFactory('Lessons', LessonSchema)
