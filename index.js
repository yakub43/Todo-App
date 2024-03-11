// write basic express boilerplate code
// with express.json() middleware

const app = require(express);
const {createPayload} = require("./types")

app.use(express.json());


// body {
//     title: String
//     description
// }


app.post("/todo", function(req, res){
    const createPayload = req.body;

})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){

})

