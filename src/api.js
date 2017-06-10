const url = 'https://erodionov-adidas-fake-api.now.sh/';

export default path => (
  fetch(url + path).then(r => r.json())
);
