import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage, specialtyHead, getSpecialty } from "@/components/SiteShell";

export const Route = createFileRoute("/disordered-eating-therapy")({
  head: () => specialtyHead("disordered-eating-therapy"),
  component: () => <SpecialtyPage s={getSpecialty("disordered-eating-therapy")} />,
});
