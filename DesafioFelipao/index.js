//Nesse desafio devemos classificar heróis de acordo com a quantidade de XP que eles possuem.
//Para isso,primeirro um array bidmencional com nome e XP de cada Heroi.

let Herois_Xp = [
    {nome: "Hulk" , Xp: 800} ,
    {nome: "wolverine" , Xp: 1050} ,
    {nome: "Homem Aranha" , Xp: 2300} , 
    {nome: "Batman" , Xp: 6200} , 
    {nome: "Mulher Maravilha" , Xp: 7011} ,
    {nome: "Superman" , Xp: 9000} ,
    {nome: "Capitão América" , Xp: 10110} ,
    {nome: "Thor" , Xp: 9200}
];

    //Agora vamos criar uma função que recebe o XP do heroi e retorna a classificação dele.
//As classificações são: Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal e Radiante.
    
function classificarHeroi(xp){
    if (xp < 1000) return "Ferro";
    else if (xp >= 1001 && xp <= 2000) return "Bronze";
    else if (xp >= 2001 && xp <= 5000) return "Prata";
    else if (xp >= 5001 && xp <= 7000) return "Ouro";
    else if (xp >= 7001 && xp <= 8000) return "Platina";
    else if (xp >= 8001 && xp <= 9000) return "Ascendente";
    else if (xp >= 9001 && xp <= 10000) return "Imortal";
    else return "Radiante";
}

    //Agora vamos percorrer o array de heróis e classificar cada um deles, imprimindo o resultado.
   //Para isso, vamos usar o método forEach, pois ele chama uma função (uma função de retorno de chamada) uma vez para cada elemento do array.
    Herois_Xp.forEach(heroi => {
    const classificacao = classificarHeroi(heroi.Xp);
    console.log(`O herói ${heroi.nome} tem ${heroi.Xp} de XP e está na classificação ${classificacao}.`);
});