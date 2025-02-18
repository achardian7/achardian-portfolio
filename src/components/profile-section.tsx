import Link from "next/link";
import { links, socials } from "@/lib/constant";

const ProfileSection = () => {
  return (
    <section className="fixed flex h-screen w-[50%] flex-col justify-between space-y-3 py-20">
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl font-bold text-white">Muchammad Ardiansyah</h1>
        <h2 className="text-xl font-semibold text-gray-200">
          Frontend Developer
        </h2>
        <p className="text-gray-400">
          Enthusiastic web developer with a passion <br /> for turning ideas
          into functional and innovative solutions.
        </p>
      </div>

      <div className="flex flex-col space-y-6 text-gray-400">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="group flex w-fit items-center space-x-3 text-[14px] font-bold uppercase tracking-widest hover:text-white"
          >
            <span className="block h-[2px] w-10 bg-gray-400 duration-100 ease-in-out group-hover:w-20 group-hover:bg-white"></span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex space-x-10 text-gray-400">
        {socials.map((social) => (
          <Link key={social.id} href={social.link}>
            <social.Icon className="size-7 hover:text-white" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
