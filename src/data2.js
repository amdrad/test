// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData1(url) {
  if (!cache.has(url)) {
    cache.set(url, getData1(url));
  }
  return cache.get(url);
}

async function getData1(url) {
  if (url === '/Dev/anothers') {
    return await getAnother();
  } else if (url === '/Dev/bio') {
    return await getBio1();
  } else {
    throw Error('Not implemented');
  }
}

async function getBio1() {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  return `This is another version of DevSHACK`;
}

async function getAnother() {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  return [{
    id: 13,
    title: 'Adam Bussdieker',
    year: 1
  }, {
    id: 12,
    title: 'Steve Spackman',
    year: 2
  }, {
    id: 11,
    title: 'Stuart Nelson',
    year: 3
  }, {
    id: 10,
    title: 'Kurt Allred',
    year: 4
  }, {
    id: 9,
    title: 'Tien Cu',
    year: 5
  }, {
    id: 8,
    title: 'Gerson Ortega',
    year: 6
   
  }];
}
