const UserDesignModel = require("../models/userModel");

class UserController {
  static getDataUser(req, res) {
    UserDesignModel.find({})
      .then(response => res.status(200).send(response))
      .catch(err => res.status(400).send(err));
  }
  static postDataUser(req, res) {
    let newUser = new UserDesignModel(req.body);
    newUser
      .save()
      .then(newUser => res.status(200).send(newUser))
      .catch(err => res.status(400).send(err));
  }
  static deleteDataUser(req, res) {
    UserDesignModel.remove({
      _id: req.params.id
    })
      .then(value => res.status(200).send(value))
      .catch(err => res.status(400).send(err));
  }
  static updateDataUser(req, res) {
    UserDesignModel.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      req.body
    )
      .then(updated => {
        res.status(200).send(updated);
      })
      .catch(err => {
        console.error(err);
        res.status(400).send(err);
      });
  }
  static getDataUserById(req, res) {
    UserDesignModel.findById({ _id: req.params.id })
      .then(response => res.status(200).send(response))
      .catch(err => res.status(400).send(err));
  }
}

module.exports = UserController;
