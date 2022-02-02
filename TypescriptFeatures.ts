interface IData<T> {
  age: T,
  name: string,
  printName: PrintNameType,
  setName: SetNameType
}

type SetNameType = (name: string) => any
type PrintNameType = () => any


abstract class First {
  protected constructor(public name: string) {}

  abstract printName(): void;
  abstract setName(name: string): void
}

class Second extends First implements IData<string>{
  public age: string;
  public name: string;
  constructor(name) {
    super(name);
    this.name = name;
  }

  printName(): void {
    console.log('My name is ' + this.name);
  }

  setName(name: string):void {
    this.name = name.toString();
  }
}

const c = new Second('Kate');
c.printName();
c.setName('aaa');
c.printName();