// write basic express boilerplate code
// with express.json() middleware

const express = require("express")
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
app = express();

app.use(express.json());


// body {
//     title: String
//     description
// }


app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg:"Wrong Inputs",
        })
        return;
    }
    // put it into mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created..."
    })

})

app.get("/todos", async function(req, res) {

    const todos = await todo.find({});

    console.log(todos)

    res.json({
        todos
    })

})

app.put("/completed", async function(req, res){
    const updatePaload = req.body;
    const parsePayload = updateTodo.safeParse(updatePaload);
    if (!parsePayload.success)(
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
    )
    await todo.update({
        _id: req.body.id,
    },{
        completed: true,
    })

    res.json("Todo mark as competed...")
})

app.listen(3000)