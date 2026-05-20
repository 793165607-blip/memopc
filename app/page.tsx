import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Record } from "@/components/sections/Record";
import { Companion } from "@/components/sections/Companion";
import { MeetYourself } from "@/components/sections/MeetYourself";
import { Cloud } from "@/components/sections/Cloud";
import { Echo } from "@/components/sections/Echo";
import { Privacy } from "@/components/sections/Privacy";
import { Closing } from "@/components/sections/Closing";

const Divider = () => <div className="divider" />;

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Divider />
      <Philosophy />
      <Divider />
      <Record />
      <Companion />
      <Divider />
      <MeetYourself />
      <Divider />
      <Cloud />
      <Echo />
      <Divider />
      <Privacy />
      <Divider />
      <Closing />
      <Footer />
    </main>
  );
}
