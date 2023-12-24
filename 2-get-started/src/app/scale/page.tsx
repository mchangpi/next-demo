import scaleImg from "@/../public/images/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steel factory"
      title="Scale your app to infinity"
    />
  );
}
