# Async Await

## Scenario One

**:x: Bad Code**

```ts
async function init() {
  const user = await fetchUserData()
  const post = await fetchPostData()
  const notice = await fetchNoticeData()
}
```

if one of the fetch functions takes a long time to complete, the other fetch functions will be blocked. so we can use `Promise.all` to solve this problem.

**:white_check_mark: Good Code**

```ts
async function init() {
  const [user, post, notice] = await Promise.all([
    fetchUserData(),
    fetchPostData(),
    fetchNoticeData()
  ])
}
```

the `Promise.all` function will wait for all promises to be resolved and return an array of results.

but some situations we need to run the fetch functions in order

> [!WARNING]
>
> 1.  next fetch function depends on the previous fetch function result
> 2.  some fetch functions will modify some global state at the same time
> 3.  and so on
