const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Google Assistant AI Bot Made By The Shadid')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Google is READY!")});
}
module.exports = keepAlive;
