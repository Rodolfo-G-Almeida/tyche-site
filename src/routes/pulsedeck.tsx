import { createFileRoute, redirect } from "@tanstack/react-router";

/** URL antiga do produto PulseDeck — agora Tyche Tech, sob o Projeto Tyche. */
export const Route = createFileRoute("/pulsedeck")({
  beforeLoad: () => {
    throw redirect({ to: "/tyche-poker/tech", replace: true });
  },
  component: () => null,
});
