import express from "express";

const app = express();



app.use(express.json());


app.get("/api", (req, res) => {
    req
    res.status(200).send("Brr Brr patapim");
 console.log("hhdhdhdhd");
});

const valasz = (res:any, req:any) =>{

}
export default app;