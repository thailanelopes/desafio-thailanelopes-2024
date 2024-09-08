export function verificaAnimalValido(animal) {
  const animaisValidos = ["LEAO", "LEOPARDO", "CROCODILO", "MACACO", "GAZELA", "HIPOPOTAMO"];
  return animaisValidos.includes(animal);
}
  
  export function calculaEspacoLivre(recinto, tamanhoAnimal, quantidade) {
    const espacoNecessario = tamanhoAnimal * quantidade;
    return recinto.tamanhoTotal - espacoNecessario;
  }



  