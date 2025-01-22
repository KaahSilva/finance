import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index() {
    const users = await User.query().preload('transation')
    return users
  }
  async store({ request }: HttpContext) {
    const { name, email, password, cpf, phone } = await request.validateUsing(createUserValidator)
    const user = await User.create({ name, email, password, cpf, phone })
    return user
  }
  async show({ params }: HttpContext) {}
  async update({ params, request }: HttpContext) {}
  async destroy({ params }: HttpContext) {}
}
