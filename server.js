
import express from "express";


const app = express();
const port = 3000;
app.use("/", express.static ("employer"))


//vi tar 3 parameter som ska skickas 

 let shift = "" 
 let dayoff = ""

 let numberofday = 0


// vi måste lägga till endpoint genom app.get för dem parameters:


app.get("/api/:shift/:dayoff", (req, res)=> {
    shift= req.params.shift
    dayoff= req.params.dayoff

    res.send(shift + " " + dayoff)
    numberofday = number +1

    console.log(numberofday)


})



// app.isten som pekar server portnumber :

app.listen(port, ()=>console.log(`app is going on port: http://localhost ${port}`));
