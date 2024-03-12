// write basic express boilerplate code
// with express.json() middleware

const app = require(express);
const {createTodo, updateTodo} = require("./types")

app.use(express.json());


// body {
//     title: String
//     description
// }


app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsePayload = createPayload.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg:"Wrong Inputs",
        })
        return;
    }
    // put it into mongodb

})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
    const updatePaload = req.body;
    const parsePayload = updateTodo.safeParse(updatePaload);
    if (!parsePayload.success)(
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
    )
    return;
})

