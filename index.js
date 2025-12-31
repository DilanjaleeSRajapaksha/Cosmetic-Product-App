import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import jwt from "jsonwebtoken";

const app = express();

app.use(bodyParser.json());


app.use(
    (req,res,next)=>{
        const tokenString = req.header("Authorization")
        
        // "Bearer word ekata psse space ekk tynna definitely... After thet this token we can remove the 'Bearer ' word & space..."
        if(tokenString != null){
            const token = tokenString.replace("Bearer ", "")
            //console.log(token)
            
            jwt.verify(token, "cbc-batch-five#@2025",
                (err,decoded)=>{
                    if(decoded != null){
                        req.user = decoded
                        next()
                    }else{
                        console.log("Invalid token")
                        res.status(403).json({
                            message : "Invalid token"
                        })
                    }
                }
            )
        }else{
            next()
        }
        //next()
    }
)

mongoose
  .connect(
    "mongodb+srv://admin:123@cluster0.iosxcxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

app.use("/products", productRouter);
app.use("/users", userRouter);

/* function successFullyStarted(){
    console.log('Server is running on port 3000');
}

app.listen( 3000, successFullyStarted ) */

//We using get method because take the students if we need....

//...................................................

/*app.get("/",
    (req, res)=>{
        Student.find().then(
            (data)=>{
                res.json(data)
            }
        )
    }
)



app.delete("/",
    (req, res)=>{
        console.log("This is a Delete request.");
    }
)


app.post("/",
    (req, res)=>{
        console.log(req.body);

        

        const student = new Student({
            name : req.body.name,
            age : req.body.age,
            stream : req.body.stream,
            email : req.body.email
        })

        student.save().then(()=>{
            res.json({
                message : "Student added successfully"
            })
        }).catch(()=>{
            res.json({
                message : "Failed to add student"
            })
        })
    }
)
*/

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Me project ek katahri ywanwa nm, "node_modules" kyna folder ek delete krala ywanna.Because aka aye gnna pulwn. package.json ekta ghin, terminal eke "npm install" kyla dunnma aye gnn pulwn "node_modules" folder eka...