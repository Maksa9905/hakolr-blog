export const maxLength = (maxLength: number) => {
  return new RegExp(`^.{0,${maxLength}}$`)
}
