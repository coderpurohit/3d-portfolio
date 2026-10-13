import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { useInView } from "../hooks/use-in-view";
import { useLimitedWebGL } from "../hooks/use-limited-webgl";

type TechBallProps = {
  name: string;
  icon?: string;
};

const TechPill = ({ name }: { name: string }) => (
  <div className="flex h-28 w-28 items-center justify-center">
    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[#1d1836]/80 px-3 text-center text-[11px] font-bold text-white shadow-lg shadow-primary/30">
      {name}
    </div>
  </div>
);

const TechBall = ({ name, icon }: TechBallProps) => (
  <div className="w-28 h-28 flex items-center justify-center">
    <div
      className="relative w-24 h-24 rounded-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 32% 28%, #efe6d4 0%, #ddd0b8 52%, #c4b49a 100%)",
        boxShadow: [
          "inset 5px 5px 12px rgba(255, 248, 235, 0.28)",
          "inset -8px -10px 16px rgba(55, 42, 28, 0.22)",
          "0 12px 20px -8px rgba(0, 0, 0, 0.4)",
        ].join(", "),
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-3 left-5 h-5 w-7 rounded-full bg-[#f5efe3]/25 blur-[2px]"
      />
      <img
        src={icon}
        alt={name}
        className="relative z-10 w-12 h-12 object-contain"
      />
    </div>
  </div>
);

export const Tech = () => {
  const { ref, isInView } = useInView();
  const limitedWebGL = useLimitedWebGL();
  const use3DBalls = isInView && !limitedWebGL;

  return (
    <SectionWrapper>
      <div className="mb-12 text-center">
        <p className="text-secondary text-[14px] uppercase tracking-[20px]">
          Skills
        </p>
        <h2 className="mt-4 text-white text-4xl font-black md:text-5xl">
          Core Skills.
        </h2>
      </div>
      <div
        ref={ref}
        className="flex flex-row flex-wrap justify-center gap-6"
      >
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {technology.icon ? (
              use3DBalls ? (
                <BallCanvas icon={technology.icon} />
              ) : (
                <TechBall name={technology.name} icon={technology.icon} />
              )
            ) : (
              <TechPill name={technology.name} />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
