import { ProjectPage } from "@/components/ProjectPage";

export default function TheHeroes() {
  return (
    <ProjectPage
      project={{
        title: "The Heroes",
        tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile App"],
        client: "The Coca-Cola Company × Marvel",
        year: "2023",
        agency: "Subvrsive",
        duration: "6 Weeks",
        role: ["User Experience", "UX Design", "Interaction Design"],
        type: ["Mobile App", "8th Wall", "WebAR"],
        heroImage: "https://framerusercontent.com/images/Wnit3nJ733ebzd0OeeMXnyPA7w.png",
        images: [
          "https://framerusercontent.com/images/x9p5VLPMRdf55Amo3cGCT9GWM.png",
          "https://framerusercontent.com/images/3ZmhFR7MTqMbBz4lmq1iveKSMc.png",
        ],
        overview:
          "The Heroes was a groundbreaking WebAR campaign uniting Coca-Cola and Marvel to create an immersive fan experience. Users could summon iconic Marvel heroes — Iron Man, Wolverine, Deadpool, and Daredevil — into their real world through augmented reality, all tied to the exclusive Coca-Cola × Marvel limited edition collection. The experience bridged physical product packaging with digital storytelling, creating a memorable and shareable interaction for fans across Latin America.",
        challenge:
          "The core challenge was creating a WebAR experience that felt premium and cinematic while remaining accessible on everyday mobile devices with no app download required. The experience needed to faithfully represent beloved Marvel characters in AR while delivering seamless performance across a wide range of devices and browsers. Additionally, the interaction needed to feel intuitive for users of all ages across diverse Latin American markets.",
        solution:
          "Leveraging 8th Wall's WebAR technology combined with high-fidelity 3D character models, we designed a marker-based AR trigger using Coca-Cola × Marvel packaging. Each can or bottle unlocked a specific hero in AR space, creating a collectible mechanic that drove repeat purchases. The UX was streamlined to a single scan flow, minimizing friction while maximizing the wow factor of seeing life-sized Marvel heroes appear in the user's environment.",
        related: [
          { title: "Coke Zero AR Fridge", tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile"], src: "https://framerusercontent.com/images/ZJ8pfsBhevCDG4pIvntToBlmg.png", href: "/works/coke-ar-fridge" },
          { title: "Surreal Burger", tags: ["Generative AI", "Mobile and Desktop"], src: "https://framerusercontent.com/images/2v5FAJwaWzUwmAETzph6BSi03SQ.webp", href: "/works/surreal-burger" },
        ],
      }}
    />
  );
}
