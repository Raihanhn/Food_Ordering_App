import Link from "next/link";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            incidunt veritatis! Quidem numquam tempora natus a animi repudiandae
            ipsam? Doloribus! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Vitae cum ipsum ex beatae optio ad ea repellat
            explicabo modi cumque.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos architecto doloribus numquam suscipit praesentium iure
            ullam minima dolores, illo repellendus!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            href="tel:+46738123123"
            className="text-4xl underline text-gray-500"
          >
            +46738123123
          </a>
        </div>
      </section>
    </>
  );
}
