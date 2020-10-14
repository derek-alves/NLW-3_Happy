import express, { response } from 'express';
import './database/connection';

const app = express();


app.use(express.json());

app.post('orphanages',(request,response)=>{
  return response.json({message:'Cadastrado com sucesso'})
})

app.listen(3333);