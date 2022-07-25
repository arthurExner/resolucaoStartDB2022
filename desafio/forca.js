class Forca {
  //Autor: Arthur Exner
  constructor(palavraEscolhida){ //construtor da classe que recebe a palavra escolhida para ser descoberta
    this.palavraEscolhida = palavraEscolhida; //atributo que recebe a palavra escolhida
    this.letrasChutadas = []; //atributo que recebe a array de letras chutadas
    this.vidas = 6; //atributo que recebe o numero de vidas 
    this.palavra = Array(palavraEscolhida.length).fill("_"); //atributo que recebe uma array que inicia com "_" os quais serão substituídos a medida que acertam chutes
   }
  
  chutar(letra) { //método que implementa a lógica dos chutes solicitada
    const ehLetraValida = typeof letra === "string"  && letra.length === 1 && isNaN(letra); //validação da letra informada por parâmetro
      if(ehLetraValida){ //se for letra válida executa o restante, se não nada acontece
      const indiceLetra = this.palavraEscolhida.indexOf(letra); //se existir essa letra na string retorna um número > 0, se não retorna -1
      if(indiceLetra < 0 && !this.letrasChutadas.includes(letra)){ //assim sempre que eu chutar uma letra errada nova, irei subtrair uma vida e adicionar a letra à letrasChutadas
        this.vidas--;
        this.letrasChutadas.push(letra);
      }else{
        for(let i=0;i<this.palavraEscolhida.length;i++){//percorro toda a palavra escolhida
          if(this.palavraEscolhida[i] == letra){ //assim substituo os "_" por cada letra certa em seu devido índice na array palavra
            this.palavra[i] = letra;
            if(!this.letrasChutadas.includes(letra)) //assim sempre que chutar uma letra certa nova ela será inserida na array letrasChutadas
              this.letrasChutadas.push(letra);
          }
        }
      } 
    }
  }

  buscarEstado() {
    if(this.vidas===0) return "perdeu"; //se vidas chegarem a zero, retorna perdeu
    if(this.vidas>0 && this.palavra.includes("_")) return "aguardando chute"; //se restarem vidas e "_" a completar, aguarda novo chute
    return "ganhou"; //se chegou até aqui é porque ainda tinha vidas e a array palavras já não inclui "_", então ganhou
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
