const db = require("../models");
const Test = db.Test;

module.exports.delete = (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).send({
            message: "Id can't be null"
        });
        return;
    }
    Test.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Data was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete data with id=${id}. Maybe data was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete data with id=" + id
            });
        });
};

module.exports.update = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).send({
            message: "Id can't be null"
        });
        return;
    }
    Test.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Data was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update data with id=${id}. Maybe data was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating data with id=" + id
            });
        });
}

module.exports.findOne = (req, res) => {
    //Validate request
    var id = req.params.id;
    if (id == null) {
        res.status(400).send({
            message: "Id can't be null"
        });
        return;
    }
    console.log("*******************", Test)
    Test.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving data with id=" + id
            });
        });
}

module.exports.findAll = async(req, res) => {
    Test.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        });

}

module.exports.create = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Save data in the database
    Test.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the data."
            });
        });
};

