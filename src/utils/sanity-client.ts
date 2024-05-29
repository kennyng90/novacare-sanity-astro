import { createClient } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "7pxqcpcq",
  dataset: "production",
  apiVersion: "2023-03-19",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource | undefined) =>
  builder.image(source as SanityImageSource);
