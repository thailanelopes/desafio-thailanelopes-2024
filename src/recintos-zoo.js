import { verificaAnimalValido, calculaEspacoLivre } from './utils.js';
import logger from './logger.js';

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    logger.info(`Analisando recintos para ${quantidade} ${animal}(s)`);

    if (!verificaAnimalValido(animal)) {
      logger.error(`Animal inválido: ${animal}`);
      return { erro: "Animal inválido", recintosViaveis: null };
    }

    if (quantidade <= 0) {
      logger.error(`Quantidade inválida: ${quantidade}`);
      return { erro: "Quantidade inválida", recintosViaveis: null };
    }

    const recintos = [
      { numero: 1, bioma: 'savana', tamanhoTotal: 10, animaisExistentes: [{ especie: 'MACACO', quantidade: 3 }] },
      { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: [] },
      { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: [{ especie: 'GAZELA', quantidade: 1 }] },
      { numero: 4, bioma: 'rio', tamanhoTotal: 8, animaisExistentes: [] },
      { numero: 5, bioma: 'savana', tamanhoTotal: 9, animaisExistentes: [{ especie: 'LEAO', quantidade: 1 }] },
    ];

    const especiarias = {
      LEAO: { tamanho: 3, biomas: ['savana'] },
      LEOPARDO: { tamanho: 2, biomas: ['savana'] },
      CROCODILO: { tamanho: 3, biomas: ['rio'] },
      MACACO: { tamanho: 1, biomas: ['savana', 'floresta'] },
      GAZELA: { tamanho: 2, biomas: ['savana'] },
      HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'] },
    };

    const animalInfo = especiarias[animal];
    if (!animalInfo) {
      logger.error(`Animal inválido: ${animal}`);
      return { erro: "Animal inválido", recintosViaveis: null };
    }

    const recintosViaveis = recintos
      .filter(recinto => {
        const biomaCompativel = animalInfo.biomas.some(bioma => recinto.bioma.includes(bioma));
        const espacoLivre = calculaEspacoLivre(recinto, animalInfo.tamanho, quantidade);
        const animaisExistentes = recinto.animaisExistentes;

        const compatibilidade = animaisExistentes.every(anim => {
          if (anim.especie === animal) return true;
          if (['LEAO', 'LEOPARDO', 'CROCODILO', 'HIPOPOTAMO'].includes(animal) && ['LEAO', 'LEOPARDO', 'CROCODILO', 'HIPOPOTAMO'].includes(anim.especie)) return false;
          if (animal === 'HIPOPOTAMO' && !recinto.bioma.includes('savana e rio')) return false;
          if (animal === 'MACACO' && animaisExistentes.length > 0) return false;
          if (anim.quantidade > 1 && animalInfo.biomas.includes('savana') && anim.especie !== animal) return false;
          return true;
        });

        return biomaCompativel && compatibilidade && espacoLivre >= 0;
      })
      .map(recinto => {
        const espacoLivre = calculaEspacoLivre(recinto, animalInfo.tamanho, quantidade);
        return { numero: recinto.numero, espacoLivre };
      })
      .sort((a, b) => b.espacoLivre - a.espacoLivre)
      .map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivre} total: ${recintos.find(r => r.numero === recinto.numero).tamanhoTotal})`);

    if (recintosViaveis.length === 0) {
      logger.warn('Não há recintos viáveis disponíveis.');
      return { erro: "Não há recinto viável", recintosViaveis: null };
    }

    logger.info(`Recintos encontrados: ${recintosViaveis.join(', ')}`);
    return { erro: null, recintosViaveis };
  }
}

export { RecintosZoo };
