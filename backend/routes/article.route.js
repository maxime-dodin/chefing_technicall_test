const express = require('express');
const app = express();
const articleRoute = express.Router();

// Article model
let Article = require('../models/Articles');

// Add Employee
articleRoute.route('/create').post((req, res, next) => {
    Article.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
articleRoute.route('/').get((req, res) => {
    Article.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
articleRoute.route('/read/:id').get((req, res) => {
    Article.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
articleRoute.route('/update/:id').put((req, res, next) => {
    Article.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
articleRoute.route('/delete/:id').delete((req, res, next) => {
    Article.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = articleRoute;