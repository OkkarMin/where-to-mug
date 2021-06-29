import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo
        title="Which Room Free | NTU"
        description="Ever wonder which tutorial rooms are 'free'? Which-room-free is here to help you determine which tutorial rooms are free and which are not 😊"
        canonical="https://whichroomfree.ml"
        openGraph={{
          type: "website",
          url: "https://whichroomfree.ml",
          site_name: "Which Room Free",
          title: "Which Room Free | NTU",
          description:
            "Ever wonder which tutorial rooms are 'free'? Which-room-free is here to help you determine which tutorial rooms are free and which are not 😊",
          images: [
            {
              url: "/meta_image.png",
              width: 1200,
              height: 630,
              alt: "Image of two students with a blue question mark in background",
            },
          ],
        }}
        // see https://stackoverflow.com/questions/53685817/obtain-a-good-big-large-image-in-rich-link-preview-in-telegram
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
