//Dentro de um objeto, não existe a palavra this (não podemos escrever 'this' dentro de um objeto, é inválido), 
//ou seja, em uma arrow function, dentro de um objeto, ele pegará o escopo global.
//Caso seja em uma função padrão, ele pegará o escopo do objeto (ou seja, suas propriedades).

const person = {
  name: 'gugu',
  greetings() {
    console.log('[funcao]', this); //Neste caso, o contexto atual é o objeto JS
  },
  greetingsArrow: () => {
    console.log('[arrow]', this); // {}
    const f = function () {
      console.log('[funcInsideArrow]', this) //O 'this' da Arrow (vazio) será sobrescrito pelo 'this' da função, logo será o global Object [global]
    };
    f();
  }
}

person.greetings(); //Irá retornar o objeto.
person.greetingsArrow(); //Irá retornar o escopo global

//Caso tenha uma Arrow function dentro de uma função, 
//pegará o escopo da própria função, justamente porque a função é o nível superior à Arrow.
//E como a função se encontra no escopo global, logo, será global

const arrowInsideFunc = function () {
  let a = 10;
  console.log('funcComArrow', this); //Object [global]

  const arrow = () => {
    console.log('[arrowInsideFunc]', this); //Object [global]
  }
  arrow();
}

arrowInsideFunc();

//Dentro de uma classe já funciona de outra maneira, 
//visto que a própria classe é um escopo!

class Person {
  constructor(name) {
    this.name = name;
  }

  funcao() {
    console.log('[funcao]', this); //Person
  };

  arrow = () => {
    console.log('[arrow]', this); //Person
  };

  arrowDentroDeFuncao() {
    const arrow = () => console.log('[arrowDentroDeFuncao]', this);  //Person
    arrow();
  }

  funcaoDentroDeArrow = () => {
    function funcao() {
      console.log('[funcaoDentroDeArrow]', this); //undefined (Pois o escopo em que a funcao se encontra é o escopo da Arrow)
    }
    funcao();
  };

}

const p = new Person('teste');

p.arrow();
p.funcao();
p.arrowDentroDeFuncao();
p.funcaoDentroDeArrow();