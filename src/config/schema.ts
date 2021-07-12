import type { SchemaOptions } from 'mongoose'

export const schemaConfig: SchemaOptions = {
  // Make Mongoose use Unix time (1 Jan 1970)
  timestamps: true,
}
