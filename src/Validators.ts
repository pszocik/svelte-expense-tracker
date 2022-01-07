export const required = (value: string): boolean => {
  return value === '' || value == null
}

export const Validators: { [validatorName: string]: (string) => boolean } = {
  required
}
