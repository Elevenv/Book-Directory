const express = require('express')
var router = express.Router()
const Book = require('../models/schema')

router.get('/',async(req,res)=>{
    try{
        const getBook =  await Book.find()
        res.json(getBook)
        console.log(getBook)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/',async(req,res)=>{
    const dbobj = new Book({
        name : req.body.name,
        author : req.body.author,
        avl : req.body.avl
    })
    try{
        const client_data = await dbobj.save()
        res.json(client_data)
    }catch(err){
        res.send('Error'+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const fbook = await Book.findById(req.params.id)
        res.json(fbook)
    }catch(err){
        res.send('404 Book not found..')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const pbook = await Book.findById(req.params.id)
        pbook.avl = req.body.avl
        const update = pbook.save()
        res.json(pbook)
    }catch(err){
        res.send('404 Book not found..')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const dbook = await Book.findById(req.params.id)
        dbook.delete()
        res.send(dbook+" book deleted")
    }catch(err){
        res.send('404 Book not found..')
    }
})
module.exports = router