const Users = require('../models/users');

exports.Singup = (req, res, next) => {
    const email = 'de1n@mail.com'
    const password = '12345'
    const imageUrl = 'adbs'
    const role = 'user'

    const userr = new Users({
        email,
        password,
        imageUrl,
        role
    });

    userr.save()
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            error.status = 404
            console.log(error)
            next(error)
        })
}