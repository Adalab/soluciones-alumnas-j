# README

![image-20200720205952157](./image-20200720205952157.png)

![image-20200720210001462](./image-20200720210001462.png)

**OnionHater.js**

```jsx
const textareaHandler = ev => {
  const value = ev.target.value;
  if (value.includes('cebolla')) {
    alert('ODIO LA CEBOLLA');
  }
}

class OnionHater extends React.Component {

  render() {
    return (
      <textarea onChange={textareaHandler}></textarea>
    )
  }
}
```

