import Link from "next/link";
import { socials } from "@/lib/constant";
import MenuLinks from "./menu-links";

const ProfileSection = () => {
  return (
    <section className="flex h-screen w-full flex-col justify-center space-y-10 px-5 py-20 lg:fixed lg:w-[35%] lg:justify-between lg:space-y-3 lg:px-0">
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

      <MenuLinks />

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
