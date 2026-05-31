import { ProjectPage } from "@/components/ProjectPage";

export default function SurrealBurger() {
  return (
    <ProjectPage
      project={{
        title: "Surreal Burger",
        tags: ["Generative AI", "Mobile and Desktop"],
        client: "McDonald's",
        year: "2023",
        agency: "Hogarth Worldwide",
        duration: "8 Weeks",
        role: ["User Experience", "UI Design", "Creative Direction"],
        type: ["Mobile", "Desktop", "Generative AI"],
        heroImage: "https://framerusercontent.com/images/2v5FAJwaWzUwmAETzph6BSi03SQ.webp",
        images: [
          "https://framerusercontent.com/images/4jEYzgwJYufmIx6AaieXk4Bnw.png",
          "https://framerusercontent.com/images/wEDnQcCWfbbeaA94C1FT2h9xJ0.jpg",
        ],
        overview:
          "Surreal Burger was a generative AI campaign for McDonald's that invited users to reimagine the iconic Big Mac through the lens of AI-generated surrealist art. Participants could describe their ideal surreal burger and watch the AI transform their words into stunning, dreamlike burger visuals. The campaign blurred the lines between food, art, and technology — generating massive social engagement and cementing McDonald's position at the frontier of creative AI marketing.",
        challenge:
          "The challenge was designing an experience that made generative AI feel accessible and delightful for mainstream consumers — not just tech enthusiasts. The output needed to feel consistently on-brand for McDonald's while allowing for wild creative expression from users. Managing content moderation at scale and ensuring the AI outputs were always visually stunning and shareable were critical design and product constraints.",
        solution:
          "We designed a streamlined prompt-to-image experience with guardrails that kept outputs on-brand. A curated set of style prompts helped guide users toward higher-quality results, while the UI emphasized shareability — each generated image came pre-framed with McDonald's branding for instant social sharing. The backend pipeline used fine-tuned diffusion models trained on brand-appropriate visual references, ensuring every output felt distinctly on-brand regardless of the input prompt.",
        related: [
          { title: "Coke Zero AR Fridge", tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile"], src: "https://framerusercontent.com/images/ZJ8pfsBhevCDG4pIvntToBlmg.png", href: "/works/coke-ar-fridge" },
          { title: "The Heroes", tags: ["Augmented Reality", "Artificial Intelligence", "8th Wall", "Mobile App"], src: "https://framerusercontent.com/images/Wnit3nJ733ebzd0OeeMXnyPA7w.png", href: "/works/the-heroes" },
        ],
      }}
    />
  );
}
