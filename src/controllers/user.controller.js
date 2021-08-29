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

export const getUsers = async (req, res) => {
  try {
    const { page, perPage } = req.query
    const settings = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 10
    }
    const users = await User.paginate({}, settings)

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    )
    const userUpdated = await user.save()

    res.status(200).json(userUpdated)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId)

    res.status(200).json({ msg: 'User deleted' })
  } catch (error) {
    res.status(500).json(error)
  }
}
