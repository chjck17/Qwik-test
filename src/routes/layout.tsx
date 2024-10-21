import { component$, } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { About } from "~/components/starter/about/about";
import { Banner } from "~/components/starter/banner/banner";
import { Download } from "~/components/starter/download/download";
import { Explore } from "~/components/starter/explore/explore";
import { Faq } from "~/components/starter/faq/fag";
import { Feature } from "~/components/starter/feature/feature";
import { FeatureStart } from "~/components/starter/feature/featureStart";
import { Footer } from "~/components/starter/footer/footer";
import { Header } from "~/components/starter/header/header";
import { Price } from "~/components/starter/price/price";
// import { Screenshot } from "~/components/starter/screenshot/screenshot";
// import { Testimonial } from "~/components/starter/testimonial/testimonial";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
    <Header />
    <Banner/>
    <FeatureStart/>
    <About/>
    <Feature/>
    <Price/>
    <Explore/>
    {/* <Testimonial/> */}
    {/* <Screenshot/> */}
    <Faq/>
    <Download/>
    <Footer/>
    </>
  )
});
