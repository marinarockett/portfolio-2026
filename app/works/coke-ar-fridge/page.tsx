import { ProjectPage } from "@/components/ProjectPage";

export default function CokeARFridge() {
  return (
    <ProjectPage
      project={{
        title: "Coke Zero AR Fridge",
        tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile"],
        client: "The Coca-Cola Company",
        year: "2023",
        agency: "Subvrsive",
        duration: "4 Weeks",
        role: ["User Experience", "UX Design"],
        type: ["Mobile", "8th Wall"],
        heroImage: "https://framerusercontent.com/images/ZJ8pfsBhevCDG4pIvntToBlmg.png",
        images: [
          "https://framerusercontent.com/images/61ngCPrjJz8ZCL8BNvhTC0w6ig.png",
          "https://framerusercontent.com/images/QFVUavPVTvYrFjJehpMHpvYwt0.jpg",
        ],
        overview:
          "As part of Coca-Cola's innovative "TakeATaste" campaign, we developed a cutting-edge WebAR experience that redefined how consumers interact with the iconic Coke Zero Sugar brand. By blending AI-driven object recognition and immersive AR technology, the project transformed everyday refrigerators into interactive, branded portals. Users could unlock exclusive content, redeem rewards, and share their experiences—all while reinforcing Coca-Cola's playful identity and commitment to innovation. This project offered two distinct user journeys, catering to both at-home consumers and in-store shoppers, delivering a seamless and magical experience accessible to diverse audiences in the Latin American market, particularly Mexico.",
        challenge:
          "Coca-Cola sought to engage consumers with a WebAR experience that would integrate effortlessly into their daily lives while elevating their interaction with the Coke Zero brand. Key challenges included designing two distinct user journeys (at-home residential fridges using image recognition, and commercial/in-store fridges using Tap-to-Place mechanics), ensuring the experience was engaging and accessible to a diverse Latin American audience, and supporting a dual-language platform (English and Spanish).",
        solution:
          "We designed a dynamic and immersive WebAR experience that embodied Coca-Cola's commitment to innovation. For at-home users, AI-powered image recognition allowed them to scan their refrigerators, overlaying a 3D Coke-branded fridge in AR. For in-store shoppers, a Tap-to-Place mechanic activated by QR code allowed manual placement of the 3D fridge. The journey culminated in a reward system enabling users to claim a coupon for a free Coke Zero, fostering brand loyalty and repeat engagement.",
        related: [
          { title: "The Heroes", tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile App"], src: "https://framerusercontent.com/images/Wnit3nJ733ebzd0OeeMXnyPA7w.png", href: "/works/the-heroes" },
          { title: "Surreal Burger", tags: ["Generative AI", "Mobile and Desktop"], src: "https://framerusercontent.com/images/2v5FAJwaWzUwmAETzph6BSi03SQ.webp", href: "/works/surreal-burger" },
        ],
      }}
    />
  );
}
