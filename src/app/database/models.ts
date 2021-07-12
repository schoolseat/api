import { createModelFactory } from './createModelFactory'
import { ClasseSchema } from './schemas/ClasseSchema'
import { ContentSchema } from './schemas/ContentSchema'
import { LessonSchema } from './schemas/LessonSchema'
import { MessageSchema } from './schemas/MessageSchema'
import { UserSchema } from './schemas/UserSchema'

export const Users = createModelFactory('Users', UserSchema)

export const Classes = createModelFactory('Classes', ClasseSchema)

export const Contents = createModelFactory('Contents', ContentSchema)

export const Messages = createModelFactory('Messages', MessageSchema)

export const Lessons = createModelFactory('Lessons', LessonSchema)
