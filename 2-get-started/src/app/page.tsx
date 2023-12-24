import homeImg from "@/../public/images/home.jpg";
import Hero from "@/components/hero";

// console.log(homeImg); /* height: 840, width: 1600 */

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
