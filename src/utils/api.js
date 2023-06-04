/**
 * use serializinf functions to model the data as you'd live
 * or to fetch additional data you might need (useful for relational fields)
 */

function serializeImage(image) {
  if (!image) return null;
  console.log('entro serializeImage');
//  console.log(image);
  const path = process.env.NEXT_PUBLIC_API_URL;
  const image1 = image.data.attributes.formats.large;
  //console.log('url');
  //console.log(image1);
  const src = image1?.url ? `${path}${image1.url}` : null;

  return {
    alt: image1?.alternativeText ?? null,
    width: image1?.width ?? null,
    height: image1?.height ?? null,
    src,
  };
}

function serializeTopFeatures(slice) {
  return {
    ...slice,
    features: slice?.features?.map((feature) => ({
      ...feature,
      icon: serializeImage(feature?.icon),
    })),
  };
}

function serializeHero(slice) {
  //console.log('entro serializeHero');
  return {
    ...slice,
    image: serializeImage(slice?.images),
  };
}

function mergeDataDeps(sliceData, extendedData) {
  return Object.assign({}, sliceData, extendedData);
}

/**
 * basic switch case of all available slices
 * will allow use to structure data as we want
 */
export async function checkRequiredData(slice) {
  switch (slice?.__component) {
    case 'slices.top-features':
      return mergeDataDeps(slice, await serializeTopFeatures(slice));
    case 'slices1.hero':
      return mergeDataDeps(slice, await serializeHero(slice));
    default:
      return slice;
  }
}

/**
 * retrieve & map over slices to serialize them
 */
async function getDataDependencies(json) {
  console.log('entro');
  //console.log(json.data.attributes.slices1);
  //console.log(json.slices1);
  const slices = await Promise.all((json.data.attributes?.slices1 ?? [])?.map(checkRequiredData));
  //console.log('slices');
  //console.log(slices);
  return {
    ...json,
    slices,
  };
}

/**
 * initial API call to get page data
 * it depends on the type 'universals', 'homepage', 'article', etc.
 * & slug value
 */
export async function fetchPage(slug) {
  //const global = await fetchGlobal();

  //var url = `${process.env.NEXT_PUBLIC_API_URL}/api/${slug ? `${slug}?populate=deep` : ''}`;
  //console.log('url');
  //console.log(url);
  //console.log(slug);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${slug ? `${slug}?populate=deep` : ''}`);
  const json = await res.json();
  //console.log(json);
  //const data = slug ? json?.[0] : json;
  const data = json;

  const extendedData = await getDataDependencies(data);

  return {
    //...global,
    ...extendedData,
  };
}

/**
 * fetch available pages to be built beforehand
 */
export async function fetchPaths({ type }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${type}`);
  const json = await res.json();
  const filteredJson = json?.filter(({ slug }) => slug !== '404');

  return filteredJson?.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
}

/**
 * fetch global type data (eg: navigation)
 */
export async function fetchGlobal() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/global`);
  const data = await res.json();

  return data;
}
