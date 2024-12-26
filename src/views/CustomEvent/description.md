# CustomEvent

## Usage

create an self-defined event

```ts
const customEvent = new CustomEvent('myCustomEvent', {
  detail: {
    someDetail: 'This is some detail'
  }
})
```

dispatch the event

```ts
window.dispatchEvent(customEvent)
```

listen for the event

```ts
window.addEventListener('myCustomEvent', (event) => {
  console.log(event.detail.someDetail)
})
```

## Description

```ts
const event = new CustomEvent(type, eventInit)
```

- `type`: A string representing the name of the event.
- `eventInit`: An object containing the following properties:
  - `bubbles`: A boolean indicating whether the event bubbles up through the DOM or not.default is false.
  - `cancelable`: A boolean indicating whether the event is cancelable.default is false.
  - `detail`: Any data you want to pass along with the event.

## Example
