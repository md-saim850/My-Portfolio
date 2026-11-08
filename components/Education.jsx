
import { GraduationCap, BookOpen, Code2, ArrowUpRight } from "lucide-react";

const education = {
  degree: "Bachelor of Business Administration (BBA)",
  institution: "Padma Government College",
  level: "Honours 1st Year",
  status: "Currently Studying",
  description:
    "Currently pursuing my undergraduate studies in Business Administration, developing knowledge of business, management, and organizational fundamentals.",
};

const learning = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building modern web applications using React, Next.js, Node.js, and Express.js.",
    tag: "Primary Focus",
  },
  {
    icon: BookOpen,
    title: "Data Structures & Algorithms",
    description:
      "Improving problem-solving skills through programming fundamentals, DSA, and competitive programming.",
    tag: "Problem Solving",
  },
  {
    icon: GraduationCap,
    title: "Backend Development",
    description:
      "Learning REST API development, authentication, database management, and server-side architecture.",
    tag: "Continuous Learning",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <GraduationCap size={16} />
            My Background
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Education &{" "}
            <span className="text-neutral-400">
              Learning
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500 dark:text-neutral-400 sm:text-base">
            My academic background and commitment to
            continuously learning new technologies and
            improving my development skills.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Education Card */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-white">
                <GraduationCap size={20} />
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Academic Education
              </h3>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">

              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-neutral-100 blur-3xl dark:bg-neutral-800/40" />

              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                    <GraduationCap
                      size={28}
                      className="text-neutral-800 dark:text-white"
                    />
                  </div>

                  <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-400">
                    ● {education.status}
                  </span>
                </div>

                <p className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {education.level}
                </p>

                <h4 className="text-xl font-bold leading-snug text-neutral-900 dark:text-white">
                  {education.degree}
                </h4>

                <p className="mt-3 text-base font-medium text-neutral-700 dark:text-neutral-300">
                  {education.institution}
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                  {education.description}
                </p>

                <div className="mt-6 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 dark:text-neutral-400">
                      Academic Status
                    </span>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      1st Year
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Card */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-white">
                <BookOpen size={20} />
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Continuous Learning
              </h3>
            </div>

            <div className="space-y-4">
              {learning.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-white">
                        <Icon size={21} />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-semibold text-neutral-900 dark:text-white">
                            {item.title}
                          </h4>

                          <ArrowUpRight
                            size={17}
                            className="text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          />
                        </div>

                        <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                          {item.description}
                        </p>

                        <span className="mt-4 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
