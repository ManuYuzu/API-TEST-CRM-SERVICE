import Customer from '../models/customer.model'

export const createCustomer = async (req, res) => {
  try {
    const { name, surname, photo } = req.body
    const customer = new Customer({ name, surname, photo })
    customer.creator = req.userId
    const customerCreated = await customer.save()

    res.status(201).json(customerCreated)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getCustomers = async (req, res) => {
  try {
    const { page, perPage } = req.query
    const settings = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 10
    }
    const customers = await Customer.paginate({}, settings)

    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId)
      .populate('creator')
      .populate('updater')

    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.customerId,
      req.body,
      { new: true }
    )
    customer.updater = req.userId
    const customerUpdated = await customer.save()

    res.status(200).json(customerUpdated)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.customerId)

    res.status(200).json({ msg: 'Customer deleted' })
  } catch (error) {
    res.status(500).json(error)
  }
}
