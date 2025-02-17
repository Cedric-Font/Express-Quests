const database = require("../../database");

const getUsers = (req, res) => {
    database
      .query("select * from users")
      .then(([users]) => {
        res.json(users); // use res.json instead of console.log
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(200);
      });
  };
  const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
  

  database
  .query("select * from users where id = ?", [id])
  .then((users) => {
    if (users[0] != null && id !== 0) {
      res.json(users[0]);
    } else {
      res.sendStatus(404);
    }
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
};

const postUsers = (req, res) => {
    const { firstname, lastname, email, city, language } = req.body;
    database
    .query(
      "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, email, city, language]
    )
    .then(([result]) => {
      // wait for it
      res.status(201).send({ id: result.insertId });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
}

const upDateUsers = (req, res) => {

  const id = parseInt(req.params.id);
  const { firstname, lastname, email, city, language } = req.body;

  database
    .query(
      "update users set firstname = ?, lastname = ?, email = ?, city = ?, language = ? where id = ?",
      [firstname, lastname, email, city, language, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      res.sendStatus(500);
    });
}

const deleteUsers = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("delete from users where id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

  

  module.exports = {
    getUsers,
    getUsersById,
    postUsers,
    upDateUsers,
    deleteUsers,
  };