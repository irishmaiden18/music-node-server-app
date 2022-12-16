import usersModel from "./users-model.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findUserByUsername = async (username) =>
    await usersModel.findOne({username})

export const findUserByCredentials = async (username, password) =>
    await usersModel.findOne({username, password})

export const findAllUsers = async () =>
    await usersModel.find()

export const deleteUser = async (uid) =>
    await usersModel.deleteOne({_id: uid})

export const updateUser =  async(uid, userUpdates) =>
     await usersModel.updateOne({_id: uid},
        {
        $set: {
                username: userUpdates.users.username,
                password: userUpdates.users.password,
                firstName: userUpdates.users.firstName,
                lastName: userUpdates.users.lastName,
                bio: userUpdates.users.bio,
                location: userUpdates.users.location,
                dateOfBirth:userUpdates.users.dateOfBirth,
                dateJoined:userUpdates.users.dateJoined,
                access: userUpdates.users.access
        }
        })

export const findUserById = (uid) =>
    usersModel.findById(uid, {password: false})