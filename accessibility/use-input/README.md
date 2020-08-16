# useInput

`useInput`은 `<input>` 태그와 함께 사용할 수 있는 접근성(Accessibility) 요소를 제공한다.


## Properties

### withLabel

`<input>`과 `<label>`을 함께 사용할 경우 `<label>`에게는 `htmlFor` 속성을, `<input>`에게는 `aria-labelledby` 속성을 추가해준다.

  ```jsx
  function Component() {
    const { inputProps, labelProps } = useInput({ withLabel: true });

    return (
      <fieldset>
        <label
          // htmlFor 속성이 아래 <input>의 id를 갖는다.
          {...labelProps}
        >
          Name
        </label>
        <input
          // aria-labelledby 속성이 위의 <label>의 id를 갖는다.
          {...inputProps}
          type="text"
          placeholder="Your name is..."
        />
      </fieldset>
    )
  }
  ```

### withDescription

`<input>` 태그에 대한 부연설명이 있는 항목이 있을 경우 해당 항목에 `aria-describedby` 속성을 추가해준다.

  ```jsx
  function Component() {
    const { inputProps, labelProps, descProps } = useInput({
      withLabel: true,
      withDescription: true,
    });

    return (
      <fieldset>
        <label {...labelProps}>
          Name
        </label>
        <input
          // aria-describedby 속성이 아래 <div>의 id를 갖는다.
          {...inputProps}
          type="text"
          placeholder="Your name is..."
        />
        <span {...descProps}>
          Name must be at least 2 characters
        </span>
      </fieldset>
    )
  }
  ```


--- 

## Tips

- `aria-labelledby`와 `aria-label`이 모두 있거나 `aria-labelledby`와 네이티브 HTML `label`이 있는 경우에는 `aria-labelledby` 레이블이 우선순위가 높다.

## References

- https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships