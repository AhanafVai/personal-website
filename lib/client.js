import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'k29ugrfd',
  dataset: 'production',
  apiVersion: '2022-12-11',
  useCdn: true,
 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);