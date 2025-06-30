//import BundleSpotlight from "@/components/Shop/ BundleSpotlight";
import FAQAccordion from "@/components/Shop/ FAQAccordion";
import ProductGrid from "@/components/Shop/ ProductGrid";
//import ShippingInfo from "@/components/Shop/ ShippingInfo";
import ShopHeader from "@/components/Shop/ ShopHeader";


export default function ShopPage() {
  return (
    <>
      <ShopHeader />
      <ProductGrid />
      {/* <BundleSpotlight /> */}
      {/* <ShippingInfo /> */}
      <FAQAccordion />
    </>
  )
}
