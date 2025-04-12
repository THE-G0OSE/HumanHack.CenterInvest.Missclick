import {
  ProjectsShowcase,
  HeroSection,
  ImpactStats,
  FeaturedProjects,
  HowItWorks,
} from "@/widgets";

export function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ImpactStats />
      <FeaturedProjects />
      <HowItWorks />
      <ProjectsShowcase />
    </main>
  );
}
