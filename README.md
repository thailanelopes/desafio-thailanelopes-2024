# Recintos Zoo
- Recintos Zoo é um sistema que analisa a viabilidade de alocar animais em recintos de um zoológico, considerando compatibilidade de biomas e espaço disponível. O projeto inclui funcionalidades de análise, logging de eventos, testes automatizados, e uma interface CLI para interações simplificadas.

## Visão Geral
Este projeto visa gerenciar e analisar a alocação de animais em recintos de zoológico com base na compatibilidade de biomas e espaço livre disponível. Ele utiliza um conjunto de funções auxiliares para verificar a validade dos inputs, calcular o espaço disponível e definir a viabilidade dos recintos.

## Estrutura do Projeto

- Classe principal para análise dos recintos
- Arquivo de testes automatizados
- Funções auxiliares para validações e cálculos
- Configuração do sistema de logs com Winston
- Interface de linha de comando (CLI) opcional
- Geração de relatórios em PDF opcional
- Arquivo de logs gerados pela aplicação
- Configuração do Node.js e dependências
- Documentação do projeto

## Instale as dependências do projeto:

-  npm install

### Instale o Módulo winston

- npm install winston



## Uso

### Análise de Recintos

- Para analisar a viabilidade de alocar um animal em um recinto, utilizar a interface CLI ou importar a classe RecintosZoo diretamente no código.

## Usando a Interface CLI

- Execute o seguinte comando e siga as instruções para inserir os dados:

-   node src/cli.js

### Usando a Classe Diretamente

- Um exemplo de uso direto no código:

import { RecintosZoo } from './src/recintos-zoo.js';

const zoo = new RecintosZoo();
const resultado = zoo.analisaRecintos('MACACO', 2);

console.log(resultado);


## Testes

- Para rodar os testes, utilize o comando:

-   npm test


## Geração de Relatórios

- O sistema pode gerar relatórios em PDF com os resultados da análise de recintos. Para gerar um relatório, utilizar a função gerarRelatorio:

import { RecintosZoo } from './src/recintos-zoo.js';
import { gerarRelatorio } from './src/relatorio.js';

const zoo = new RecintosZoo();
const resultado = zoo.analisaRecintos('CROCODILO', 1);

gerarRelatorio(resultado);

O relatório será salvo como relatorio_recintos.pdf na raiz do projeto.

## Logs

Os logs vão  ser gerados automaticamente durante a execução da aplicação e podem ser encontrados no arquivo logs/recintos-log.log. Eles contêm informações detalhadas sobre os processos executados, erros encontrados e avisos importantes.

### Níveis de Log
- Info: Informações sobre a análise e operação da aplicação.
- Error: Erros críticos durante a execução.
- Warn: Avisos sobre condições que não interrompem o funcionamento, mas são importantes para o usuário.
