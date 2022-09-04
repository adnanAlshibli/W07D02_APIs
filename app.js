const express = require("express");

const app = express();

const port = 5000;

app.use(express.json());

const todos = [
    { todo: " wake up", isCompleted: false },
     { todo: "Eat Breakfast", isCompleted: false },
    
    ];

    app.get("/todos",(req,res)=>{
        res.status(200);
        res.json(todos);
    })
    
    app.post("/create/todo",(req,res)=>{
        const newObj = {todo:req.body.todo,isCompleted:req.body.isCompleted}
        
        todos.push(newObj);
        
        res.status(201);
        
        res.json(newObj);
    })
    
    app.put("/update/todo/:name",(req,res)=>{
        let update={};
        const name = req.params.name;
        for(i=0;i<todos.length;i++){
            if(name===todos[i].todo){
                todos[i].todo=== req.body.todo;
                todos[i].isCompleted===req.body.isCompleted;
                update=todos[i];
            }
        }
        res.status(201);
        res.json(update);
        //res.send("update work");
    })
    
    app.delete("/delete/todo/:name",(req,res)=>{
        let delet= {}
        const name = req.params.name;
        for (i=0;i<todos.length;i++){
            if(name===todos[i].todo){
                delet=todos.splice(i,1);
            }
        } 
        res.status(201);
        res.json(delet);
        //res.send("delete work")
    })
    
    app.put("/complete/todo/:name",(req,res)=>{
        let complete={};
        const name = req.params.name;
        for(i=0;i<todos.length;i++){
            if(name === todos[i].todo){
                todos[i].isCompleted=true;
            }
        }
        res.status(201);
        res.json(complete);
        //res.send("completed work");
        
    })
    
    app.listen(port,()=>{
        console.log(`Example app listening at http://localhost:${port}`);
    })