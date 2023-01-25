
const { hashSync, genSaltSync, compareSync, compare } = require('bcrypt');
const { sign } = require('jsonwebtoken')
const DbUser = require('../controlers/userControler');

module.exports = {
    createDataUser: (req, res) => {
        const body = req.body;
        console.log(body);
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        const dataBase = DbUser.getInstaceUser();
        const result = dataBase.createUser(body);

        result
            .then(data => {
                if(!data){
                    return res.status(400).json({
                        success: 0,
                        message: "Bad Request"
                    });
                }

                return res.status(200).json({
                    success: "Data Berhasil Di tambahkan",
                    data: data
                  });
            })
            .catch(err => {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            });
    },


    login: (req, res) => {
        const body = req.body;
        const dataBase = DbUser.getInstaceUser();
        const result = dataBase.getUserByEmail(body);

        result
            .then(data => {
                if(!data) {
                    return res.json({
                        success: 0,
                        data: "Invalid email or password"
                      });
                }

                const user = compareSync(body.password, data.password);
                if(user) {
                    data.password = undefined;
                    const jsontoken = sign({ data: data }, "qwe1234", {
                        expiresIn: "1h"
                    })
                    return res.json({
                        success: 1,
                        user: data,
                        message: "login successfully",
                        token: jsontoken
                    });
                }else{
                    return res.json({
                        success: 0,
                        data: "Invalid email or password"
                    });
                }
            })
            .catch(err => {
                console.log(err)
            });
    },


    getUserById: (req, res) => {
        const { id } = req.params;
        const dataBase = DbUser.getInstaceUser();
        const result = dataBase.getUserById(id)

        result
            .then(data => {
                if(!data) {
                    return res.json({
                        success: 0,
                        data: "User tidak di temukan"
                      });
                }

                data.password = undefined;
                return res.json({
                    success: "data di temukan",
                    data: data
                })
            })
            .catch(err => {
                console.log(err)
            });
    },

    getUsers: (req, res) => {
        const dataBase = DbUser.getInstaceUser()
        const result = dataBase.getAllUser();

        result
            .then(data => {
                return res.json({
                    success: "data di temukan",
                    data: data
                })
            })
            .catch(err => {
                console.log(err)
            });
    },

    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        const dataBase = DbUser.getInstaceUser();
        const result = dataBase.updateUsers(body);

        result
        .then(data => {
            return res.json({
                success: "data berhasil di ubah",
                data: data
            })
        })
        .catch(err => {
            console.log(err)
        });
    },

    deleteUser: (req, res) => {
        const { id } = req.body;

        const dataBase = DbUser.getInstaceUser();
        const result = dataBase.deleteUserById(id)

        result
        .then(data => {

            if(!data){
                return res.json({
                    success: "fail",
                    message: "Record Not Found"
                });
            }

            return res.json({
                success: "data berhasil di Hapus",
                data: data
            })
        })
        .catch(err => {
            console.log(err)
        });
    }
}