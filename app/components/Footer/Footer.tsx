import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface SocialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLinks[] = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "https://www.facebook.com",
    width: 10,
  },
  {
    imgSrc: "/assets/footer/insta.svg",
    link: "https://www.instagram.com",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/twitter.svg",
    link: "https://www.twitter.com",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/linkedin.svg",
    link: "https://www.linkedin.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "About Us",
    link: ["Our Story", "Our Mission", "Our Team", "Careers"],
  },
  {
    id: 2,
    section: "Help & Support",
    link: ["FAQs", "Contact Us", "Student Guide", "Mentor Guide"],
  },
  {
    id: 3,
    section: "Resources",
    link: [
      "Blog",
      "Success Stories",
      "Free Resources",
      "Learning Materials",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-paleblue py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

          {/* COLUMN-1: Logo & Intro */}
          <div className="sm:col-span-6 lg:col-span-5">
            <div className="flex flex-shrink-0 items-center">
              <Image src="/assets/logo/logo.svg" alt="logo" width={214} height={66} />
            </div>
            <h3 className="text-base text-darkgray mt-5 mb-4 lg:mb-8">
              Empowering students with world-class online tuition for a brighter tomorrow.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <Link href={item.link} key={i}>
                  <div className="bg-white h-12 w-12 shadow-xl rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                    <Image
                      src={item.imgSrc}
                      alt={`social-${i}`}
                      width={item.width}
                      height={20}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN-2/3/4: Links */}
          {products.map((product) => (
            <div key={product.id} className="sm:col-span-2">
              <p className="text-midnightblue text-lg font-semibold mb-6">
                {product.section}
              </p>
              <ul>
                {product.link.map((link, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      href="/"
                      className="text-darkgray text-base font-normal hover:text-ultramarine"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Rights Reserved & Policies */}
        <div className="border-t border-gray-blue pt-6 md:flex items-center justify-between">
          <h4 className="text-darkgray opacity-75 text-sm text-center md:text-start">
            &copy; 2023 A&H Classes. All rights reserved.
          </h4>
          <div className="flex gap-5 mt-4 md:mt-0 justify-center md:justify-start">
            <h4 className="text-darkgray opacity-75 text-sm">
              <Link href="/" target="_blank">
                Privacy Policy
              </Link>
            </h4>
            <div className="h-5 w-0.5 bg-darkgray opacity-50"></div>
            <h4 className="text-darkgray opacity-75 text-sm">
              <Link href="/" target="_blank">
                Terms & Conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
