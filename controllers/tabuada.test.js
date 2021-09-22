const sinon = require('sinon');

const tabuadaController = require('./tabuada');

describe('tabuada controller', () => {
  it('list', () => {
    const numeros = [];
    for (let i = 0; i <= 100; i++) {
      numeros.push(i);
    }

    let res = {
      render: function() {}
    };

    let mock = sinon.mock(res);

    mock.expects('render').once().withArgs('tabuada/list', { numeros });
    tabuadaController.list({}, res);
  })

  it('calculates times tables', () => {
    const tabuadas = [];
    const num = 1;

    for (let i = 1; i <=10; i++) {
      tabuadas.push({
        num,
        i,
        result: num * i
      });
    }

    let res = {
      render: function() {}
    };

    let mock = sinon.mock(res);

    mock.expects('render').once().withArgs('tabuada/tabuada', {
      num,
      tabuadas
    });

    tabuadaController.tabuada({params: { num: 1 }}, res);
  })
})
