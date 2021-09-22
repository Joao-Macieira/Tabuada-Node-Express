const list = (request, response) => {
  const numeros = [];
  for (let i = 0; i <= 100; i++) {
    numeros.push(i);
  }

  response.render('tabuada/list', { numeros });
}

const tabuada = (request, response) => {
  const { num } = request.params;
  const tabuadas = [];

  for (let i = 1; i <=10; i++) {
    tabuadas.push({
      num,
      i,
      result: num * i
    });
  }

  response.render('tabuada/tabuada', {
    num,
    tabuadas
  });
}

module.exports = {
  list,
  tabuada
}
