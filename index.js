require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


//Configuração do App
const app = express();
app.use(express.json());

//Configuração do Banco de Dados
mongoose.connect(process.env.MONGODB_URL);
const Tarefa = require("./models/tarefa");

//Rotas

//Iserção de tarefas(POST)
app.post("/tarefas", async (req, res) =>{
    try{
        //Coletar os dados do body
        const { titulo, descricao, status } = req.body;
        //Criando um novo documento do Mongo
        const tarefa = new Tarefa({ titulo, descricao, status });
        //Inserir o documento na coleção de tarefas
      await tarefa.save();
      res.status(201).json(tarefa);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu."});
    }

});
//Listagem de todas as Tarefas(GET)
//Listagem(GET)
//Atualização(PUT)
//Remoção(DELETE)

//Escuta de eventos
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});


console.log(process.env.MONGODB_URL);

//Conexão com o Mongo usando a URL
//Criar o modelo de Tarefa
//As rotas GET, POST, PUT e DELETE