import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'uv3redyr',
    dataset: 'production',
    apiVersion: '2023-09-06',
    useCdn: false
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)