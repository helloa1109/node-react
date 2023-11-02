const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, function(){
    console.log('8080');
})

app.use(express.static(path.join(__dirname, 'nodereact/nodereact/build')));

app.get('/', function(요청, 응답){
    응답,sendFile(path.join(__dirname, 'nodereact/nodereact/build/index.html'));
}) 