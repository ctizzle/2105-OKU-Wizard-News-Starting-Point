const express = require("express");
const app = express();
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

app.use(morgan('dev'));
app.use(express.static('public'));



app.get("/", (req, res) => {
  const posts = postBank.list()
  res.send(postList(posts));
  });

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  if (!post.id){
    throw new Error('Not Found')
  } else {
    res.send(postDetails(post));
  } 
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(404);
  res.send("Page not found!");
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
