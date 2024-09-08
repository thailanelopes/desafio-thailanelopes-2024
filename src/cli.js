import inquirer from 'inquirer';
import { RecintosZoo } from './recintos-zoo.js';

inquirer
  .prompt([
    { type: 'input', name: 'animal', message: 'Digite a espécie do animal:' },
    { type: 'number', name: 'quantidade', message: 'Digite a quantidade:' },
  ])
  .then((answers) => {
    const zoo = new RecintosZoo();
    const resultado = zoo.analisaRecintos(answers.animal.toUpperCase(), answers.quantidade);
    console.log(resultado);
  });
