import { createEvent, createStore } from "effector";

export const $isOpen = createStore<boolean>(false)

export const setIsOpen = createEvent<boolean>()

$isOpen.on(setIsOpen, (_, isOpen) => isOpen)