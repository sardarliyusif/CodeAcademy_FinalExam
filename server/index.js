const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
dotenv.config()

const {Schema}=mongoose;

const cardSchema=new Schema(
    {
        title:{type:String},
        description:{type:String},
        imageUrl:{type:String}
    },
    {timestamps:true}
)

const Cards=mongoose.model("cards",cardSchema)
const app=express()
app.use(cors())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("<h1>Salam Yusif</h1>")
})

//Butun cardlar
app.get("/cards",(req,res)=>{
    Cards.find({},(err,card)=>{
        if(!err){
            res.send(card)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//Id-ye gore card

app.get("/cards/:id",(req,res)=>{
    const {id}=req.params
    Cards.findById(id,(err,card)=>{
        if(!err){
           if(card){
            res.send(card)
           }else{
            res.status(404).json({message:"Bele mehsul yoxdur"})
           }
        }else{
            res.status(500).json({message:err})
        }
    })
})


//Add card

app.post("/cards",(req,res)=>{
    const user=new Cards({
        title:req.body.title,
        description:req.body.description,
        imageUrl:req.body.imgUrl
    })
    user.save()
    res.send({message:"Card Yarandi"})
})

//Delete card

app.delete("/cards/:id",(req,res)=>{

    const {id}=req.params
    Cards.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Mehsul Silindi")
            
        }else{
            res.status(404).json({message:err})
        }
    })
})

const url=process.env.CONNECTION_URL
const PORT=process.env.PORT

mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
    console.log("DB connect");
        app.listen(PORT,()=>{
            console.log("Server start");
        })
    }
})