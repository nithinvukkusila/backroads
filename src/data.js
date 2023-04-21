import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#abour",
    text: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 2,
    href: "https://facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 3,
    href: "https://instagram.com",
    icon: "fab fa-instagram",
  },
];

export const services = [
  {
    id: 1,
    icon: "fab fa-wallet fa-fw",
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia. ",
  },
  {
    id: 2,
    icon: "fab fa-wallet fa-fw",
    title: "EndLess Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia. ",
  },
  {
    id: 3,
    icon: "fab fa-wallet fa-fw",
    title: "Amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia. ",
  },
];

export const tours = [
  {
    id: 2,
    image: tour2,
    date: new Date("YYYY-MM-DD"),
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: 6,
    price: "$2100",
  },
  {
    id: 3,
    image: tour3,
    date: new Date("YYYY-MM-DD"),
    title: "Kenya Highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: 6,
    price: "$2100",
  },
  {
    id: 4,
    image: tour4,
    date: new Date("YYYY-MM-DD"),
    title: "Explore Hong Kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: 6,
    price: "$2100",
  },
  {
    id: 5,
    image: tour1,
    date: new Date("YYYY-MM-DD"),
    title: "Best Of Java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: 6,
    price: "$2100",
  },
];
