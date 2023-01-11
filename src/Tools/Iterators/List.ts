
export default class List<T>
{
  private items: Array<T>;

  constructor() {
      this.items = [];
  }

  filterBy(item: T): T | Array<T> {
    return this.items.filter((values: T) => {
      return item === values
    })
  }

  add(value: T): void
  {
      this.items.push(value);
  }

  addRange(value: Array<T>): void
  {
    value.forEach(element => {
      this.items.push(element);
    });
  }

  delete(value: T): void
  {
      let index = this.items.indexOf(value);
      this.items.splice(index, 1);
  }

  clean(): void {
    this.items = [];
  }

  size(): number
  {
    return this.items.length;
  }

  mapToArray(): Array<T> {
    return this.items;
  }
}

