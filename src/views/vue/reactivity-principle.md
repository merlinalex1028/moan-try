# Reactivity Principle

## Proxy

Vue 3 uses ES6 `Proxy` to implement reactivity system. `Proxy` is a new feature in ES6, which can intercept and redefine the operations on objects (such as property lookup, assignment, enumeration, function invocation, etc.). It is a powerful tool for creating custom behaviors for objects.

```js
const obj = {
  a: 1,
}

const p = new Proxy(obj, {
  get(target, property, receiver) {
    console.log('get')
    return Reflect.get(target, property, receiver)
  },
  set(target, property, value, receiver) {
    console.log('set')
    return Reflect.set(target, property, receiver)
  },
  has(target, prop) {
    console.log('has')
    return Reflect.has(target, prop)
  },
  deleteProperty(target, prop) {
    console.log('deleteProperty')
    return Reflect.deleteProperty(target, prop)
  },
})

p.a // get
p.a = 2 // set
'a' in p // has
delete p.a // deleteProperty
```

## Reflect

`Reflect` is a API that provides a way to call object methods in a more flexible way. It is similar to the `Proxy` object, but it is used to call the default behavior of an object.
