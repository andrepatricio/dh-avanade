const app = require('express')();

app.get('/', (req, resp) => {
    resp.send('Olá')
})

app.listen(3000, () => {
    console.log("rodando")
})