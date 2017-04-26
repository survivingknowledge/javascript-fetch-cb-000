const token = 'd95700c1980e61c9b2bf21e0d46f8d5eaa7a88e1';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
