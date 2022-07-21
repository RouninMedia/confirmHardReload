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
