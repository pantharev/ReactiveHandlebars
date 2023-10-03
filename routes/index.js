var express = require('express');
var router = express.Router();

let todos = [
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Go to the store and buy groceries."
  },
  {
    "id": 2,
    "title": "Wash car",
    "description": "Go to the car wash and wash the car."
  },
  {
    "id": 3,
    "title": "Clean house",
    "description": "Go to the house and clean the house."
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
  res.render('index', { title: 'Express' });
});


router.get("/todos", (req, res) => {
  res.json(todos);
});

router.post("/todos", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  let todo = {
    id: todos.length + 1,
    title: title,
    description: description
  };
  
  todos.push(todo);
  res.json(todo);
});

module.exports = router;
