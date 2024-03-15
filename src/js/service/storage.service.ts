import { ID } from "../model/types";

export interface IStorageService<T> {
    create(item: Omit<T, "id">): Promise<T>;
    // read(id: ID): Promise<T>;
    readAll(): Promise<T[]>;
    update(item: T): Promise<void>;
    delete(id: ID): Promise<void>;
}