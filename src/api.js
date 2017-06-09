const url = 'https://erodionov-adidas-fake-api.now.sh/';

export const get = path => (
  fetch(url + path).then(r => r.json())
);

export const imageLink = (img, height = 512) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${img.id}/zoom/${img.fileName}?sh=${height}`;
