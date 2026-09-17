import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Users, Trophy, Radio, Coins, Crown, ArrowRight } from "lucide-react";
import heroTable from "@/assets/tyche-hero-table.jpg";
import goddess from "@/assets/tyche-goddess.png";

const YOUTUBE_URL = "https://www.youtube.com/@TychePoker";

export const Route = createFileRoute("/tyche-poker")({
  head: () => ({
    meta: [
      { title: "Tyche Poker Live | Poker ao vivo com convidados especiais" },
      { name: "description", content: "Tyche Poker Live: transmissões ao vivo de partidas de poker com convidados especiais, mesas exclusivas e produção inspirada nos grandes campeonatos internacionais. Assista no YouTube." },
      { property: "og:title", content: "Tyche Poker Live | Onde estratégia, habilidade e fortuna se encontram" },
      { property: "og:description", content: "Transmissões ao vivo de poker com convidados especiais, mesas exclusivas e cobertura completa. Um projeto da BTS Brasil Produtora." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tyche-poker" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tyche-poker" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWorkSeries",
        name: "Tyche Poker Live",
        description: "Transmissões ao vivo de partidas de poker com convidados especiais, produzidas pela BTS Brasil Produtora.",
        genre: "Poker",
        inLanguage: "pt-BR",
        url: "/tyche-poker",
        sameAs: [YOUTUBE_URL, "https://www.instagram.com/tychepoker/"],
        productionCompany: { "@type": "Organization", name: "BTS Brasil Produtora" },
      }),
    }],
  }),
  component: TychePage,
});

const tycheTheme = {
  "--brand": "oklch(0.63 0.07 175)",
  "--brand-foreground": "#06201d",
  "--ring": "oklch(0.63 0.07 175)",
} as CSSProperties;

const GREEN = "#549b90";
const GOLD = "#5e9890";

const about = [
  { icon: Users, title: "Convidados especiais", text: "Jogadores e personalidades convidados em cada mesa, criando disputas com narrativa própria." },
  { icon: Radio, title: "Transmissão ao vivo", text: "Produção completa de broadcast, com direção de corte, gráficos e cobertura em tempo real." },
  { icon: Trophy, title: "Padrão internacional", text: "Uma experiência inspirada nos grandes eventos mundiais de poker, do primeiro flop à mesa final." },
];

const formats = [
  { icon: Coins, name: "Cash Game", lines: ["Jogadores entram e saem livremente.", "Cada ficha possui valor real.", "Ideal para partidas contínuas."] },
  { icon: Trophy, name: "Torneios — Em breve", lines: ["Formatos de torneio em desenvolvimento.", "Novidades serão anunciadas nos canais oficiais do Tyche."] },
];

const timeline = [
  "Convite dos jogadores",
  "Preparação da mesa",
  "Início da transmissão",
  "Cobertura ao vivo",
  "Mesa final",
  "Campeão",
];

function TychePage() {
  const reduce = useReducedMotion();
  const float = reduce ? {} : { y: [0, -14, 0], rotate: [0, 3, 0] };

  const reveal = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div style={tycheTheme} className="bg-[#04100e] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroTable}
          alt="Mesa de poker premium com feltro verde, fichas e cartas"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04100e]/55 via-[#04100e]/35 to-[#04100e]" />

        {/* fichas / cartas flutuantes */}
        {!reduce && (
          <>
            <motion.div
              aria-hidden
              animate={float}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[6%] top-[22%] hidden h-24 w-24 rounded-full border-4 border-dashed md:block"
              style={{ borderColor: `${GOLD}66`, background: `${GREEN}22`, boxShadow: `0 0 60px ${GOLD}22` }}
            />
            <motion.div
              aria-hidden
              animate={{ y: [0, 18, 0], rotate: [-8, -2, -8] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[8%] top-[18%] hidden h-32 w-22 rounded-xl border md:block"
              style={{ width: "5.5rem", borderColor: `${GOLD}55`, background: "rgba(255,255,255,0.04)", backdropFilter: "blur(6px)" }}
            />
            <motion.div
              aria-hidden
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[14%] right-[16%] hidden h-16 w-16 rounded-full border-4 border-dotted md:block"
              style={{ borderColor: `${GREEN}88` }}
            />
          </>
        )}

        <div className="container-x relative py-28 md:py-40">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display text-4xl font-bold leading-[1.05] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] md:text-6xl"
            >
              Tyche Poker
              <span className="mt-3 block text-2xl font-medium md:text-3xl" style={{ color: GOLD }}>
                Onde estratégia, habilidade e fortuna se encontram.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg text-white/75"
            >
              Transmissões ao vivo de partidas de poker com convidados especiais, mesas exclusivas e uma
              experiência inspirada nos grandes campeonatos internacionais.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-[#06201d] transition hover:-translate-y-0.5"
                style={{ background: GOLD, boxShadow: `0 18px 50px -14px ${GOLD}99` }}
              >
                <Play size={18} fill="currentColor" /> Assistir no YouTube
              </a>
              <a href="#sobre" className="btn-ghost-dark">Conheça o Projeto</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section relative">
        <div className="container-x">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>Sobre o projeto</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Poker ao vivo, entretenimento de alto nível.</h2>
            <div className="mt-6 space-y-4 text-white/70">
              <p>
                O Tyche Poker Live nasceu para reunir jogadores convidados em partidas transmitidas ao vivo,
                proporcionando uma experiência semelhante aos grandes eventos internacionais de poker.
              </p>
              <p>
                Nosso objetivo é unir estratégia, competição e entretenimento em uma produção de alta qualidade,
                aproximando o público da emoção presente nas principais mesas do mundo.
              </p>
              <p>Cada transmissão contará com convidados especiais, partidas exclusivas e cobertura completa.</p>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {about.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.article
                  key={a.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-white/20"
                >
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `${GREEN}26`, color: GREEN }}
                  >
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{a.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUEM É TYCHE */}
      <section id="tyche" className="section relative overflow-hidden" style={{ background: "#06201d" }}>
        <div
          aria-hidden
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: `${GOLD}1f` }}
        />
        <div className="container-x relative grid items-center gap-14 md:grid-cols-2">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-md"
          >
            <div
              className="absolute inset-6 -z-10 rounded-full"
              style={{ background: `radial-gradient(circle, ${GREEN}55 0%, transparent 70%)` }}
            />
            <div className="rounded-[2rem] border p-6" style={{ borderColor: `${GOLD}33`, background: "rgba(255,255,255,0.03)" }}>
              <img
                src={goddess}
                alt="A deusa Tyche, símbolo da fortuna na mitologia grega"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full"
              />
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>Quem é Tyche?</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">A deusa da fortuna.</h2>
            <div className="mt-4 h-px w-24" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
            <div className="mt-6 space-y-4 text-white/70">
              <p>
                Na mitologia grega, Tyche representa a fortuna, a prosperidade e os acontecimentos inesperados
                que podem transformar uma história.
              </p>
              <p>
                Sua figura simboliza equilíbrio entre habilidade e sorte, exatamente como acontece em uma
                partida de poker.
              </p>
              <p>Foi essa inspiração que deu origem ao nome do projeto.</p>
              <p className="text-white/85">
                No Tyche Poker Live acreditamos que grandes jogadas surgem da combinação entre preparo,
                estratégia e oportunidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORMATOS */}
      <section id="cash-game" className="section">
        <div className="container-x">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>Formato de jogo</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Cash Game — a mesa que nunca para.</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {formats.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.article
                  key={f.name}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 p-7 backdrop-blur-xl transition hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-100"
                    style={{ background: `${GOLD}33` }}
                  />
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${GOLD}1f`, color: GOLD }}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{f.name}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/65">
                    {f.lines.map((l) => (
                      <li key={l} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full" style={{ background: GREEN }} />
                        {l}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="como-funciona" className="section" style={{ background: "#06201d" }}>
        <div className="container-x">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>Linha do tempo</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Como funciona uma transmissão.</h2>
          </motion.div>

          <ol className="relative mt-14 space-y-5 md:space-y-6">
            <div
              aria-hidden
              className="absolute left-6 top-2 bottom-2 w-px md:left-7"
              style={{ background: `linear-gradient(180deg, ${GOLD}66, ${GREEN}33, transparent)` }}
            />
            {timeline.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: reduce ? 0 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative flex items-center gap-5"
              >
                <span
                  className="z-10 inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border font-display font-bold md:h-14 md:w-14"
                  style={{ borderColor: `${GOLD}66`, background: "#04100e", color: GOLD }}
                >
                  {i + 1}
                </span>
                <span className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-medium text-white backdrop-blur md:text-lg">
                  {step}
                  {i === timeline.length - 1 && <Crown size={18} className="ml-2 inline" style={{ color: GOLD }} />}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `radial-gradient(60% 60% at 50% 50%, ${GREEN}33 0%, transparent 70%)` }}
        />
        <div className="container-x relative text-center">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-3xl font-bold text-white md:text-5xl"
          >
            Pronto para acompanhar as próximas partidas?
          </motion.h2>
          <motion.a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={reduce ? {} : { scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-bold text-[#06201d]"
            style={{ background: GOLD, boxShadow: `0 0 80px -10px ${GOLD}, 0 20px 60px -20px ${GOLD}aa` }}
          >
            <Play size={22} fill="currentColor" /> Assistir no YouTube
          </motion.a>
        </div>
      </section>

      {/* TYCHE TECH — ÚLTIMA DOBRA */}
      <section id="tyche-tech" className="relative overflow-hidden border-t border-white/10 py-24 md:py-32" style={{ background: "#06201d" }}>
        <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(65% 85% at 85% 50%, ${GREEN}55 0%, transparent 70%)` }} />
        <div className="container-x relative">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Tecnologia para o mercado de poker
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Transforme sua mesa em uma transmissão profissional.
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-white/70">
              A Tyche Tech leva a tecnologia das nossas transmissões para clubes, cassinos, ligas,
              campeonatos, eventos e criadores de conteúdo. Leitura automática de cartas, gráficos em
              tempo real, controle pelo navegador e integração com streaming em uma solução preparada
              para quem quer vender mais patrocínios, ampliar audiência e elevar o padrão da operação.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
              <span className="border-l-2 border-[#5e9890] pl-4">Operação mais ágil</span>
              <span className="border-l-2 border-[#5e9890] pl-4">Experiência visual profissional</span>
              <span className="border-l-2 border-[#5e9890] pl-4">Pronta para crescer com seu negócio</span>
            </div>
            <Link
              to="/tyche-poker/tech"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-[#06201d] transition hover:-translate-y-0.5"
              style={{ background: GREEN, boxShadow: `0 18px 50px -14px ${GREEN}aa` }}
            >
              Conhecer a Tyche Tech <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA STICKY MOBILE */}
      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-4 bottom-4 z-40 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-[#06201d] md:hidden"
        style={{ background: GOLD, boxShadow: `0 16px 40px -12px ${GOLD}cc` }}
      >
        <Play size={18} fill="currentColor" /> Assistir no YouTube
      </a>
    </div>
  );
}
