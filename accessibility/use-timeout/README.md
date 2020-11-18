# useTimeout

`useTimeout`은 timeout을 생성할 수 있는 함수를 반환하며 clean-up 로직을 추상화하였다. 


## Example

```jsx
function Example() {
  // ******************************
  //      without `useTimeout` ⛔️
  // ******************************
  const timeoutId = useRef()

  useEffect(() => {
    timeoutId.current = window.setTimeout(() => {
      console.log(`${someValue} was changed.`)
    }, 1000)
  }, [createTimeout, someValue])


  useEffect(() => () => {
    window.clearTimeout(timeoutId.current)
  }, [])


  // ******************************
  //      with `useTimeout` ✅
  // ******************************
  const createTimeout = useTimeout()

  useEffect(() => {
    createTimeout(() => {
      console.log(`${someValue} was changed.`)
    }, 1000)
  }, [createTimeout, someValue])
}
```

## Props

#### `allowMultipleTimeout`

> `boolean` | defaults to `false`

여러 개의 timeout이 생성돼야 할 때 사용할 수 있음. `false`인 경우 이전 timeout이 실행되기 전에 새로운 timeout을 생성하면 이전 timeout은 삭제된다.

```jsx
// example
function Example() {
  const createTimeout = useTimeout({ allowMultipleTimeout: false })

  useEffect(() => {
    createTimeout(() => {
      console.log('First log')
    }, 1000)
    createTimeout(() => {
      console.log('Second log')
    }, 1000)
  }, [createTimeout])

  // Second log만 출력된다.
}
```
