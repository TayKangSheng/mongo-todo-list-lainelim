const Todo = require('../models/todo')

// TODO. import TODO Model ;-)
// const Todo = require('../models/todo')

function create (params) {
  Todo.create(params, function (err, item) {
    if (err) {
      console.error(err)
      return
    }
    console.log('new todo created!')
  })
}
function list () {
  Todo.find({}, function (err, items) {
    if (err) {
      console.error(err)
      return
    }
    items.forEach(function (item) {
      console.log(item)
    })
  })
}

  // console log the list of all TODOs
function show (id) {
  Todo.findById(id, function (err, item) {
    if (err) {
      console.error(err)
      return
    }
    console.log(item)
  })
}
function update (id, params) {
  Todo.findByIdAndUpdate((id), (params), {new: true}, function (err, updatedTodo) {
    if (err) {
      console.error(err)
      return
    }
    console.log(updatedTodo)
  })
}
function destroy (id) {
  Todo.findByIdAndRemove((id), function (err, deletedTodo) {
    if (err) {
      console.error(err)
      return
    }
    console.log(deletedTodo)
  })
}

function destroyAll () {
  Todo.remove({}, function (err, deleteAll) {
    if (err) {
      console.error(err)
      return
    }
    console.log(deleteAll)
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
