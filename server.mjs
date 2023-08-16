import express from 'express';
import cors from 'cors';
import path from'path'
const __dirname = path.resolve();


const app = express();
app.use(express.json())
// app.use(cors())

 

app.get('/profile', (req, res) => {
    res.send('this is profile'+ new Date() )
    console.log("this is profile" , new Date())
})


//http://abcweather.com/weather/karachi?units=metric&side=east&age=23
app.get('/weather/:cityName', (req, res) => { 
    console.log('this is Weather', new Date() )

console.log("req.params.cityName",req.params.cityName)

console.log("req.query.unit",req.query.unit)
console.log("req.query.side",req.query.side)
console.log("req.query.age",req.query.age)

console.log("req.body.name: ",req.body.name)
console.log("req.body.class: ",req.body.class)
console.log("req.body.rollNo: ",req.body.rollNo)




let weatherData ={
    karachi:{
city:"Karachi",
tempInCel:50,
humidity:43,
high:50,
low:11

},london:
{
city:"London",
tempInCel:3,
humidity:43,
high:50,
low:11

},}


let userInputCityName = req.params.cityName.toLowerCase();

console.log("userInputCityName",userInputCityName)

let weatherToSend = weatherData[userInputCityName];

  if(weatherToSend){
    res.send(  weatherToSend) 
  }
 else{
    res
    .status(404)
    .send(`Weather Data is not available for ${req.params.cityName}`);
 }
 

})

app.use(express.static(path.join(__dirname, 'public')))





const PORT = process.env.PORT|| 3002;
app.listen(PORT, () => {
    console.log(`Example SERVER listening on port ${PORT}`)
})