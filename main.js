function reqListener() {
  let data = JSON.parse(this.responseText);
  let listInfo = document.querySelector('.listInfo');
  let container = document.createElement('ul');
  let bio = document.querySelector('.bio');
  let pic = document.querySelector('.pic');

  console.log('data', data);


let unorderedList = `
    <li><p>Name:</p><p>${data.name}</p></li>
    <li><p>GitHub URL:</p><a href="${data.html_url}">${data.login}</a></li>
    <li><p>Email:</p><p>mahima.subramanian@gmail.com</p></li>
    <li><p>Company:</p><p>${data.company}</p></li>
    <li><p>Website:</p><a href="${data.blog}">${data.blog}</a></li>
    `
  let story = document.createTextNode(data.bio);

  let profile = `<img src='${data.avatar_url}'>`
    pic.innerHTML = profile;
    container.innerHTML = unorderedList;
    listInfo.appendChild(container);
    bio.appendChild(story);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/Smahima");
req.addEventListener("load", reqListener);
req.send();
