import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cmn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
