import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage, specialtyHead, getSpecialty } from "@/components/SiteShell";

export const Route = createFileRoute("/confidence-self-esteem-therapy")({
  head: () => specialtyHead("confidence-self-esteem-therapy"),
  component: () => <SpecialtyPage s={getSpecialty("confidence-self-esteem-therapy")} />,
});
