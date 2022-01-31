interface IPrintName {
  age: string,
  printName(): void,

}
abstract class First {
  protected constructor(public name: string) {}

  abstract printName(): void ;
}

class Second extends First implements IPrintName{
  public age: string;
  constructor(name) {
    super(name);
    this.name = name;
  }

  printName(): void {
    console.log('My name is ' + this.name);
  }

  setName<T>(name: T): void {
    this.name = name.toString();
  }

}

const c = new Second('Kate');
c.printName();
c.setName('aaa');
c.printName();