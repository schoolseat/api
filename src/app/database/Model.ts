import type {
  FilterQuery,
  UpdateQuery,
  ModelUpdateOptions,
  QueryOptions,
  Query,
  Model as ModelType,
} from 'mongoose'

import type { BaseSchema } from '@/types/models'

export class Model<T extends BaseSchema> {
  #model: ModelType<T>

  constructor(model: ModelType<T>) {
    this.#model = model
  }

  get model(): ModelType<T> {
    return this.#model
  }

  add(document: T): Promise<T> {
    return this.model.create(document)
  }

  async remove(id: string): Promise<any> {
    return this.model.findOneAndDelete({ _id: id } as any)
  }

  async findOne(
    conditions: FilterQuery<T>,
    projection?: string,
    options: QueryOptions = {},
  ): Promise<T | null> {
    return this.model.findOne(conditions, projection, options)
  }

  async findAll(
    filter: FilterQuery<T> = {},
    projection?: string,
    options: QueryOptions = {},
  ): Promise<T[]> {
    return this.model.find(filter, projection, options)
  }

  async update(
    filter: FilterQuery<T>,
    doc: UpdateQuery<T> = {},
    options: ModelUpdateOptions = {},
  ): Promise<Query<any, T>> {
    return this.model.updateOne(filter, doc, options)
  }
}
