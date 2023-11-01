import User from '../models/user.model.js'
import bycrypt from 'bcrypt'

export const signup = async (req, res, next) => {
    const { username, password, email } = req.body
    const hashedPassword = bycrypt.hashSync(password, 10);

    try {
        const createUser = await User.create({ username, email, password: hashedPassword })

        res.status(201).json({ message: 'Successfully created' })
    } catch (error) {
        next(error)
    }

}