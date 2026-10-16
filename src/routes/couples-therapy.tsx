import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage, specialtyHead, getSpecialty } from "@/components/SiteShell";

export const Route = createFileRoute("/couples-therapy")({
  head: () => specialtyHead("couples-therapy"),
  component: () => <SpecialtyPage s={getSpecialty("couples-therapy")} />,
});
