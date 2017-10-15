function reqListener() {
  let data = JSON.parse(this.responseText);
  let listInfo = document.querySelector('.listInfo');
  let container = document.createElement('ul');
  let bio = document.querySelector('.bio');
  let pic = document.querySelector('.pic');

  console.log('data', data);
}
