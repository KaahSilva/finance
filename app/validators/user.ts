import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(4).maxLength(256),
    cpf: vine.string().trim().minLength(9).maxLength(12),
    phone: vine.string().trim().minLength(11).maxLength(11),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(6),
  })
)
