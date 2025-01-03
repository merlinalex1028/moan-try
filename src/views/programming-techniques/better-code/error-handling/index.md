# Error Handling

**:x: Bad Code**

some one like to use `try-catch` and only catch the error and do nothing with it or just log it to the console.

```ts
async function fetchData() {
  try {
    const data = await fetch('https://api.example.com/data')
    return data.json()
  }
  catch (error) {
    console.error(error)
  }
}
```

this is a bad practice because we are not handling the error properly.

**:white_check_mark: Good Code**

only log the error is not wrong every time, but we should do something with the error.

```ts
async function fetchData(options = {}) {
  // get the data is critical or not and set the default value to true
  const { isCritical = true } = options

  try {
    const response = await fetch('/api/data')
    // check if the response is ok, if not throw an error
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  }
  catch (error) {
    // log the error
    console.error('Data fetch failed:', error)

    if (isCritical) {
      // if the data is critical, throw an custom error and pass the original error as a cause
      throw new ApiError('Failed to fetch critical data', { cause: error })
    }
    else {
      // if the data is not critical, return a fallback value
      return { type: 'fallback', data: [] }
    }
  }
}
```
