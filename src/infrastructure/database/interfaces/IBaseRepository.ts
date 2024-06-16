import { FindOptions } from '../types/find-options.type';
import { QueryOptions } from '../types/query-options.type';

export abstract class IBaseRepository<Entity> {
    abstract findAll(queryOptions?: QueryOptions<Entity>): Promise<Entity[]>;

    abstract create(data: Partial<Entity>): Promise<Entity>;

    abstract update(
        data: Partial<Entity>,
        where?: FindOptions<Entity> | string,
    ): Promise<boolean>;

    abstract findOne(queryOptions?: QueryOptions<Entity>): Promise<Entity>;

    abstract count(queryOptions?: QueryOptions<Entity>): Promise<number>;
}
