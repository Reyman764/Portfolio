import aboutPhoto from "@/assets/photos/reyman-about.jpg";

function AboutMe() {
  return (
    <>
      <section id="aboutme">
        <div className="relative flex pt-14 pb-14 pr-16 pl-16 md:pr-28 md:pl-28 flex-col w-full gap-8 bg-zinc-900 border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left tracking-wide">
            <h2 className="text-1xl font-extralight text-primary-foreground">
              About
            </h2>
            <h1 className="text-4xl font-extrabold">About Me</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-3 shrink-0">
              <div className="relative w-56 sm:w-64">
                <div className="absolute inset-0 translate-x-2 translate-y-2 border-2 border-zinc-800" />
                <div className="relative border-2 border-zinc-700 overflow-hidden bg-zinc-950">
                  <img
                    src={aboutPhoto}
                    alt="Reyman Khadgi"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <span className="font-mono text-xs text-zinc-500 tracking-wide">
                [ Lalitpur, Nepal ]
              </span>
            </div>

            <div className="flex flex-col items-baseline text-left w-full md:w-2/3">
              <p className="text-1xl text-zinc-300 leading-relaxed">
                I'm Reyman, a BSc. CSIT student at Nagarjuna College of IT
                (Tribhuvan University), based in Lalitpur, Nepal. I work
                across the full stack — React and TypeScript on the
                frontend, Node.js/Express and SQL on the backend — building
                software that solves real problems rather than just sitting
                in a repo. During my internship at Prabhu Group, I built a
                full-stack resort booking platform from the ground up, and
                outside of coursework I keep shipping personal projects like
                an inventory tracker for a local Samsung retailer. I'm a
                quick learner who enjoys teamwork, and I like seeing a
                project through from a rough idea to something people
                actually use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
