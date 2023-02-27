export async function someFunction() {
  return Promise.resolve('someData')
}

const globalForSomeFunction = global as unknown as { someValue: string }

export const someValue = globalForSomeFunction.someValue || await someFunction();

if (process.env.NODE_ENV !== 'production') globalForSomeFunction.someValue = someValue
