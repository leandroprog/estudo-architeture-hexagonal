import express from 'express';
const app =  express();

app.get('/cards/:cardNumber/invoices', function (req, res) {

  res.json({
    total: 1000
  })
});

app.listen(3000)