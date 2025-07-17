import Image from "next/image";
import { Navbar } from "@/app/components/Navbar";
import ProfileImage from "@/public/fotpil.jpg";
import { TypewriterComponents } from "./components/Typewriter";
import { skills } from "./data/skillData";

export default function Home() {
  return (
    <>
      <main className="bg-white ">
        <div className="container mx-auto border-x-2 border-slate-200 min-h-screen">
          {/* Navbar */}
          <Navbar />
          {/* Section 1 */}
          <section className="mx-auto w-3/4 ">
            <div className="pt-48 flex flex-col gap-3">
              <Image
                src={ProfileImage}
                alt="Profile Image"
                width={150}
                height={150}
                className="rounded-full"
              />
              <div className="text-black mt-4">
                <p className="text-4xl font-bold ">
                  <span className="font-normal">Hello, I'm</span> Revanza Hadi
                  Putra.
                </p>
                <div className="text-4xl flex gap-2 font-bold">
                  <p className="font-light">I like </p>
                  <TypewriterComponents words={["Frontend", "Backend", "Design"]} loop={false} typeSpeed={90} />
                </div>
                <p className="text-slate-500 mt-4 sm:w-full md:w-3/4">
                  Passionate about building modern and responsive websites. A
                  university student by day, a code explorer and React lover by
                  night. Always eager to learn, collaborate, and turn ideas into
                  real web experiences.
                </p>
              </div>
              <div className="mt-4">
                <p className="flex items-center gap-2 text-green-700 bg-green-100 rounded-full px-4 py-3 text-sm font-medium w-fit">
                  <span className="border p-0.5 rounded-full border-green-700 animate-pulse ">
                    <svg
                      className="w-2 h-2 fill-current text-green-500 "
                      viewBox="0 0 8 8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                  </span>
                  Available for new project
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mt-20 w-3/4 mx-auto pb-5">
            <p className="text-black text-2xl font-bold">About</p>
            <p className="mt-4 text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur architecto, iste aspernatur nesciunt est optio aperiam
              consequuntur similique consequatur ad aliquam itaque nam autem
              aliquid aut nostrum neque sint dolore?
            </p>
            <p className="mt-4 text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur architecto, iste aspernatur nesciunt est optio aperiam
              consequuntur similique consequatur ad aliquam itaque nam autem
              aliquid aut nostrum neque sint dolore?
            </p>
            <div className="w-full border-b-2 border-slate-200 mx-auto mt-6"></div>
          </section>

          {/* Section 3 */}
          <section className="w-3/4 mx-auto mt-20">
            <h1 className="text-black text-2xl font-bold">Experience</h1>
            <div className="flex flex-col gap-6 mt-4 ">
              <div className="grid md:grid-cols-3 ">
                <p className="text-black opacity-40">
                  August 2024 - Januari 2025
                </p>
                <p className="text-slate-600 font-semibold ">
                  Independet Study at NF Academy
                </p>
              </div>
              <div className="grid md:grid-cols-3">
                <p className="text-black opacity-40">March 2025 - July 2025</p>
                <p className="text-slate-600 font-semibold ">
                  Independet Study at Celerates
                </p>
              </div>
              <div className="grid md:grid-cols-3">
                <p className="text-black opacity-40">
                  August 2024 - Januari 2025
                </p>
                <p className="text-slate-600 font-semibold ">VSGA</p>
              </div>
            </div>
            <div className="w-full border-b-2 border-slate-200 mx-auto mt-6"></div>
          </section>

          {/* Section 4 */}
          <section className="mt-20 w-3/4 mx-auto">
            <h1 className="text-black text-2xl font-bold mb-4">Current Tech Stack</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {skills.map((skill) => (
                <div className="group flex flex-col p-5 rounded-2xl bg-gray-100 items-center cursor-pointer relative" key={skill.id}>
                  <div className="w-30 max-w-full group-hover:-translate-y-3 transition">{skill.svg}</div>
                  <p className="text-black font-bold opacity-0 group-hover:opacity-100 duration-300 absolute bottom-1">{skill.name}</p>
                </div>
              ))}
            </div>
            <div className="w-full border-b-2 border-slate-200 mx-auto mt-6"></div>
          </section>
        </div>
      </main>
    </>
  );
}
