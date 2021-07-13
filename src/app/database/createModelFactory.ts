import { model as applyModel } from 'mongoose'

import type { BaseSchema } from '@/types/models'

import { Model } from './Model'
import type { Schema } from './Schema'

type GetSchemaType<S> = S extends Schema<infer T>
  ? T extends BaseSchema
    ? T
    : never
  : never

export function createModelFactory<S extends Schema<any>>(
  name: string,
  schema: S,
): Model<GetSchemaType<S>> {
  const model = applyModel(name, schema as any as Schema<GetSchemaType<S>>)
  const instance = new Model<GetSchemaType<S>>(model)

  return instance
}
