import { createEvent } from 'effector'

export const changedEmail = createEvent<string>()
export const changedPassword = createEvent<string>()
export const changedRepeatedPassword = createEvent<string>()
export const changedName = createEvent<string>()

export const resetForm = createEvent()
export const register = createEvent()
