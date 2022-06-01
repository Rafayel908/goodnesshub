export class DropdownModel<T = any> {
  public name: string;
  public value: T;

  constructor(name: string, value: T) {
    this.name = name;
    this.value = value;
  }
}
