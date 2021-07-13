import {
  Model,
  Document,
  SchemaOptions,
  ExtractMethods,
  SchemaDefinition,
  DocumentDefinition,
  Schema as MongooseSchema,
} from 'mongoose'

import { schemaConfig } from '@/config/schema'

export class Schema<
  DocType = Document,
  M extends Model<DocType, any, any> = Model<any, any, any>,
  SchemaDefinitionType = undefined,
  TInstanceMethods = ExtractMethods<M>,
> extends MongooseSchema<DocType, M, SchemaDefinitionType, TInstanceMethods> {
  constructor(
    definition?: SchemaDefinition<DocumentDefinition<SchemaDefinitionType>>,
    options?: SchemaOptions,
  ) {
    super(definition, {
      ...schemaConfig,
      ...options,
    })
  }
}

export type { Model, Document }
