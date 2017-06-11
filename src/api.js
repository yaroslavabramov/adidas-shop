const url = 'https://erodionov-adidas-fake-api.now.sh/';

export const get = path => (
  fetch(url + path).then(r => r.json())
);

export const post = (path, data) => (
  fetch(url + path, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then(r => r.json())
);
