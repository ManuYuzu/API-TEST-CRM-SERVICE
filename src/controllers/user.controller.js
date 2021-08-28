import User from '../models/user.model'

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const newUser = new User({
      email,
      password: await User.encryptPassword(password)
    })

    const savedUser = await newUser.save()

    return res.status(200).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
  }
}
