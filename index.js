const express = require('express');
const app = express();
app.listen(8080, () => console.log('listening at port 6969'));
//app.use(express.static('website'));

app.get('/test', (req, res) => {
    res.status(200).send({
        Tminh: 'nigga',
        realorfake: 'real'
    })
});