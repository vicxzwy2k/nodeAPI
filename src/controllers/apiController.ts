import { Request, Response } from "express";
import { json } from "sequelize";
import { Frases } from "../models/Frase"


 
export const ping = (req:Request, res:Response) =>{
 
    res.json({pong:true})
}
export const random = (req:Request, res:Response) =>{
 
    let nRand: number = Math.floor(Math.random() * 10)
    res.json({number: nRand})
}
 
export const nome = (req:Request, res:Response) =>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome : ${nome}`})
}

export const criarFrase = async (req:Request, res:Response) =>{
    //OS DADOS SERAO RECEBIDOS NO CORPO DA REQUISICAO
    let{autor, txt} = req.body
    let novaFrase = await Frases.create({autor,txt})
    res.json({id: novaFrase.id, autor, txt})
}
export const listarFrases = async(req:Request, res:Response) =>{
    //exibir as frases
    let lista = await Frases.findOne()
    res.json({lista})

}

export const pegarFrase = async(req:Request, res:Response) =>{
    let {id} = req.params

    let frase = await Frases.findByPk(id)

    if(frase){
        res.json({frase})
    } else {
        res.json({erro: 'Frase não existe'})
    }
}

export const editaFrase = async(req:Request, res:Response) =>{
    let {id} = req.params
    let {autor, txt} = req.body
    let frase = await Frases.findByPk(id)
    if(frase){
        frase.autor = autor
        frase.txt = txt

        await frase.save()
        res.json({frase})
    }else {
        res.json({error: 'frase não eexiste'})
    }
}

export const deletarFrase = async(req:Request, res:Response) =>{
    let {id} = req.params

    await Frases.destroy({
        where:{id}
    })
    res.json({})
}