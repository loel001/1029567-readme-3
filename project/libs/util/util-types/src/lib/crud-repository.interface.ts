export interface CRUDRepository<E, I, R> {
  findById(id: I): Promise<R | null>;
  create(item: E): Promise<R>;

  update(id: number, item: E): Promise<R>;
  destroy(id: I): Promise<void>;
}
