import Image from "next/image";
import Header from "./home/Header";
import Demos from "./home/Demos";

export default function Home() {
  return (
    <main>
      <Header />
      <Demos />
    </main>
  );
}
