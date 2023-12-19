const io = require('socket.io');
const Cache = require('memory-cache');
const { PrismaClient } = require('@prisma/client');
// Import necessary functions or dependencies

async function handleRoot(req, res) {
  // Handle root endpoint logic
  res.json('Welcome TO express');
}

async function handleNewOrder(req, res) {

  const layers =req.body.layers
  const order = req.body.data.order
  console.log(order);
  layers.forEach((hash) => {
      io.to('city.'+hash).emit('new_order_event', {
          "order":order
      });
  });

  res.send('ok')
}

module.exports = { handleRoot, handleNewOrder };