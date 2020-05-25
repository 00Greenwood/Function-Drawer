class Function {
  constructor() {
    if (this.constructor == Function) {
      throw new Error("Abstract classes can't be instantiate.");
    }
  }

  evaluate(x) {
    throw new Error("Method evaluate() must be implemented.");
  }
}

class ValueFunction extends Function {
  constructor(value) {
    super();
    this.value = value;
  }

  evaluate(x) {
    return this.value;
  }
}

class PowerFunction extends Function {
  constructor(power) {
    super();
    this.power = power;
  }

  evaluate(x) {
    return Math.pow(x, this.power);
  }
}

class AddFunction extends Function {
  constructor(f1, f2) {
    super();
    this.f1 = f1;
    this.f2 = f2;
  }

  evaluate(x) {
    return this.f1.evaluate() + this.f2.evaluate();
  }
}