export interface IBag<T> {
  add(item: T): Promise<string>;
  has(item: T): Promise<boolean>;
  remove(item: T): Promise<boolean>;
}