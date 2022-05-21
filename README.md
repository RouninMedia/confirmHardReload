# confirmHardReload
An HTML-form-based hack which confirms whether the page has been refreshed or hard reloaded

## HTML
```
<form class="my-form">
 <input class="my-input" type="text" />
</form>
```
_____

## CSS
```
.my-form {
  display: none;
}
```
_____

## JS
```
const confirmHardReload = () => {

  let hardReload = (document.querySelector('.my-input').value === '') ? true : false;

  if (hardReload === true) {

    document.querySelector('input').value = Date.now();

    console.log('This page has been hard reloaded');
  }

  else {

    console.log('This page has been refreshed');
  }
}
```
