import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { linkVariant, containerVariant } from "./hamburger-variants";
import { useWindowSize } from "@uidotdev/usehooks";
import { menuLinks } from ".";
import { useLenis } from "@studio-freight/react-lenis";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

interface IProps {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LinkProp {
  menuItem: {
    id: string;
    value: string;
  };
}

const MobileExpandedMenu = (props: IProps) => {
  const { setMenuIsOpen } = props;
  const { width } = useWindowSize();
  const lenis = useLenis();

  useEffect(() => {
    if (width && width >= 768) {
      setMenuIsOpen(false);
    }
  }, [width, setMenuIsOpen]);

  const socialLinks = [
    {
      id: 1,
      name: "X",
      link: "https://www.x.com/PrismDevOrg",
      icon: <BsTwitterX size={24} />,
    },
    {
      id: 1,
      name: "Instagram",
      link: "https://www.instagram.com/prismdevorg",
      icon: <RiInstagramLine size={30} />,
    },
    // {
    //   id: 3,
    //   name: "LinkedIn",
    //   link: "https://www.linkedin.com/in/xyz/",
    //   icon: <FiLinkedin />,
    // },
  ];

  const linkClickHandler = ({ menuItem }: LinkProp) => {
    lenis?.scrollTo(`#${menuItem.id}`, { lerp: 0.05 });
    console.log("clicked");
    setMenuIsOpen(false);
  };

  const MenuLinks = () => {
    return (
      <ul>
        {menuLinks.map((menuItem, index) => {
          return (
            <motion.li
              key={index}
              exit={{
                opacity: 0,
                y: -50,
                transition: {
                  duration: 0.2,
                  delay: index * 0.1,
                  ease: "easeInOut",
                },
              }}
              variants={linkVariant}
              initial="initial"
              animate="visible"
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="text-white text-5xl my-10"
            >
              <p
                onClick={(e) => {
                  linkClickHandler({ menuItem: menuItem } as LinkProp);
                }}
              >
                {menuItem.value}
              </p>
            </motion.li>
          );
        })}
      </ul>
    );
  };

  const SocialLinks = () => {
    return (
      <motion.ul
        exit={{
          opacity: 0,
          y: -50,
          transition: {
            duration: 0.2,
            delay: 0.1,
            ease: "easeInOut",
          },
        }}
        variants={linkVariant}
        initial="initial"
        animate="visible"
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="flex justify-between items-center w-[2rem] mb-10 ml-2"
      >
        {socialLinks.map((item, index) => {
          return (
            <a
              target="_blank"
              key={index}
              rel="noopener noreferrer"
              href={item.link}
            >
              <li>
                <Link className="flex items-center mt-4" href={item.link}>
                  <span className="mr-4">{item.icon}</span>
                </Link>
              </li>
            </a>
          );
        })}
      </motion.ul>
    );
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="visible"
      exit={{
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
      }}
      className="fixed top-0 left-0 h-screen w-screen bg-black z-50 pl-8 pt-24 pb-10 flex flex-col justify-between"
    >
      <MenuLinks />

      <div className="relative w-[20rem] mb-10">
        <SocialLinks />

        {/* phone & email */}
        <div className="mt- mb-4">
          <motion.ul
            exit={{
              opacity: 0,
              y: -50,
              transition: {
                duration: 0.2,
                delay: 0.2,
                ease: "easeInOut",
              },
            }}
            variants={linkVariant}
            initial="initial"
            animate="visible"
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="flex justify-start my-4 w-[24rem]"
          >
            <IoCall size={20} />
            <div className="ml-4">
              <Link
                href={"tel:+918249894413"}
                className="underline-hover-effect-1-black"
              >
                +91 824-989-4413
              </Link>
              <Link
                href={"tel:+918328846256"}
                className="underline-hover-effect-1-black mt-1"
              >
                +91 832-884-6256
              </Link>
            </div>
          </motion.ul>

          <motion.ul exit={{
                  opacity: 0,
                  y: -50,
                  transition: {
                    duration: 0.2,
                    delay: 0.3,
                    ease: "easeInOut",
                  },
                }}
                variants={linkVariant}
                initial="initial"
                animate="visible"
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  ease: "easeInOut",
                }} className="flex h-[3rem] w-[20rem]">
            <HiOutlineMail size={20} />
            <a
              href="mailto:prismdevorg@gmail.com"
              className="underline-hover-effect-1-black uppercase ml-4"
            >
              Prismdevorg@gmail.com
            </a>
          </motion.ul>
        </div>

        {/* calendly link */}
        <motion.p
          exit={{
            opacity: 0,
            y: -50,
            transition: {
              duration: 0.2,
              delay: 0.3,
              ease: "easeInOut",
            },
          }}
          variants={linkVariant}
          initial="initial"
          animate="visible"
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut",
          }}
        >
          <Link
            className="absoulte text-lg mt-20 mb-20 underline-offset-4 underline"
            href="https://calendly.com/gouravkumar21-dev/prism-dev-consultancy"
          >
            Book a Free Call with us.
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MobileExpandedMenu;
