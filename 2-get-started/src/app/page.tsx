import Image from "next/image";
// import homeImg from "../../public/images/home.jpg";

export default function Home() {
  return (
    <div className="min-h-screen p-24 text-3xl">
      Home Page
      <Image
        src={"/images/home.jpg"}
        alt="car factory"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
