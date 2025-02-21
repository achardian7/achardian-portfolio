import Carousel from "@/components/carousel";
import StackTag from "@/components/stack-tag";
import projects from "@/lib/constant";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const project = projects.find((project) => project.slug === slug);
  return (
    <div>
      <header className="border-b border-blue-900 px-3 py-3 lg:px-0">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{project?.title}</h1>
          <div className="flex items-center gap-3">
            <Link
              href={`${project?.repo}`}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-emerald-600/10 p-2 text-emerald-600 hover:bg-emerald-600/25"
            >
              <FaGithub className="size-6" />
              Source
            </Link>
            <Link
              href={`${project?.link}`}
              className="font-semibold text-emerald-600 hover:underline"
              target="_blank"
            >
              Preview
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto my-10 max-w-5xl px-3 lg:px-0">
        <Carousel images={project?.images as string[]} />
        <p className="my-3 text-base text-white">{project?.description}</p>
        <div className="flex flex-wrap items-center gap-5">
          {project?.techStacks.map((stack) => (
            <StackTag key={stack} stack={stack} />
          ))}
        </div>
        <div className="my-5">
          <h2 className="mb-3 text-xl text-white">Features</h2>
          <ul className="space-y-1 px-5">
            {project?.features.map((feature, i) => (
              <li key={i} className="list-disc text-gray-400">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
