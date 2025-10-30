const express = require(express);
const app = express();

app.get('/', ()=>{
    res.json({message:"contact manager api is running"});
});

app.listen(5000,(req, res)=>{
    console.log('server is running in 5000 port');
});