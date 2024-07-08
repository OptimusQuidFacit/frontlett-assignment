import Cofound from "@/components/Cofound";
import EIR from "@/components/EIR";
import EquityJobs from "@/components/EquityJobs";
import Featured from "@/components/Featured";
import Focus from "@/components/Focus";
import Hero from "@/components/Hero";
import Innovators from "@/components/Innovators";
import InvestorsNetwork from "@/components/InvestorsNetwork";
import Letsbuild from "@/components/Letsbuild";
import Network from "@/components/Network";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import Resources from "@/components/Resources";
import ServiceIncubation from "@/components/ServiceIncubation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white w-full">
      <Hero/>
      <section className="bg-lightgrey">
        <Quote/>
        <Network/>
        <Focus/>
        <Innovators/>
        <ServiceIncubation/>
        <Portfolio/>
        <Cofound/>
        <EIR/>
        <InvestorsNetwork/>
        <EquityJobs/>
        <Resources/>
        <Featured/>
        <Letsbuild/>
      </section>
    </main>
  );
}
