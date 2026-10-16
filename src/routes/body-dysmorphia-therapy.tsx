import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage, specialtyHead, getSpecialty } from "@/components/SiteShell";

export const Route = createFileRoute("/body-dysmorphia-therapy")({
  head: () => specialtyHead("body-dysmorphia-therapy"),
  component: () => <SpecialtyPage s={getSpecialty("body-dysmorphia-therapy")} />,
});
