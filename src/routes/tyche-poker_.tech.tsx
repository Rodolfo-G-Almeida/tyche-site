import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ScanLine, Cpu, Layers, PlayCircle, Code2, Gauge, LayoutDashboard, RefreshCw,
  Usb, Network, Wifi, Bluetooth, Radio, Zap, Building2, Dices, Video, CalendarDays, Trophy, Users,
} from "lucide-react";
import boardImg from "@/assets/pulsedeck-board.jpg";

const DEMO_URL = "https://www.instagram.com/tychepoker/";

export const Route = createFileRoute("/tyche-poker_/tech")({
  head: () => ({
    meta: [
      { title: "Tyche Tech | Sistema de transmissão profissional de poker" },
      { name: "description", content: "Tyche Tech é o sistema para transmissão profissional de poker: leitura RFID das cartas, reconhecimento em tempo real, integração com OBS, baixa latência e dashboard web." },
      { property: "og:title", content: "Tyche Tech | A nova geração da transmissão de poker" },
      { property: "og:description", content: "Tecnologia para transformar qualquer transmissão, em uma profissional." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/tyche-poker/tech" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tyche-poker/tech" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Tyche Tech",
        brand: { "@type": "Brand", name: "Tyche Tech" },
        category: "Sistema de transmissão de poker",
        description: "Sistema completo para transmissão profissional de poker: mesa, cartas, câmeras, overlays, identificação automática, placa de captura, software e streaming.",
        url: "/tyche-poker/tech",
        manufacturer: { "@type": "Organization", name: "Tyche Tech" },
      }),
    }],
  }),
  component: TycheTechPage,
});

const tycheTechTheme = {
  "--brand": "#5e9890",
  "--brand-foreground": "#06201d",
  "--ring": "#5e9890",
} as CSSProperties;

const GREEN = "#5e9890";

const features = [
  { icon: ScanLine, title: "Captura automática das cartas", text: "Leitores integrados à mesa identificam cada carta no instante em que ela é distribuída." },
  { icon: Cpu, title: "Reconhecimento em tempo real", text: "Processamento imediato de mãos, jogadores e ações, sem intervenção manual." },
  { icon: Layers, title: "Integração com OBS", text: "Overlays e fontes prontas para entrar direto na sua cena de transmissão." },
  { icon: PlayCircle, title: "Streaming para YouTube", text: "Saída pronta para YouTube, Twitch e Kick com sincronia de áudio e vídeo." },
  { icon: Code2, title: "API aberta", text: "Endpoints REST para gráficos personalizados, estatísticas e integrações de terceiros." },
  { icon: Gauge, title: "Baixa latência", text: "Pipeline otimizado para que o gráfico acompanhe a ação da mesa em tempo real." },
  { icon: LayoutDashboard, title: "Dashboard Web", text: "Controle total da transmissão pelo navegador: jogadores, blinds, mãos e overlays." },
  { icon: RefreshCw, title: "Atualizações OTA", text: "Firmware atualizado remotamente, sem desmontar a mesa nem interromper a operação." },
];

const flow = [
  { label: "Mesa", icon: Dices },
  { label: "Leitores RFID", icon: Radio },
  { label: "Controladora Tyche", icon: Cpu },
  { label: "Software", icon: LayoutDashboard },
  { label: "OBS", icon: Layers },
  { label: "YouTube · Twitch · Kick", icon: PlayCircle },
];

const specs = [
  { icon: Usb, label: "USB-C" },
  { icon: Network, label: "Ethernet" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Bluetooth, label: "Bluetooth" },
  { icon: RefreshCw, label: "Firmware OTA" },
  { icon: Code2, label: "API REST" },
  { icon: Gauge, label: "Baixa latência" },
  { icon: Zap, label: "Reconhecimento instantâneo" },
  { icon: Radio, label: "Compatível com RFID" },
  { icon: Layers, label: "Compatível com OBS" },
];

const audiences = [
  { icon: Building2, label: "Clubes de Poker" },
  { icon: Dices, label: "Cassinos" },
  { icon: Video, label: "Criadores de Conteúdo" },
  { icon: CalendarDays, label: "Eventos" },
  { icon: Users, label: "Ligas" },
  { icon: Trophy, label: "Campeonatos" },
];

function TycheTechPage() {
  const reduce = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div style={tycheTechTheme} className="bg-white text-[#0a201c]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#04100e] text-white">
        <img
          src={boardImg}
          alt="Render 3D da placa controladora Tyche Tech"
          width={1536}
          height={1024}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04100e]/85 via-[#04100e]/80 to-[#04100e]" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `radial-gradient(50% 45% at 70% 25%, ${GREEN}33 0%, transparent 70%)` }}
        />
        {!reduce &&
          [0, 1, 2, 3, 4, 5].map((i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute hidden h-1.5 w-1.5 rounded-full md:block"
              style={{ background: GREEN, left: `${12 + i * 14}%`, top: `${20 + (i % 3) * 22}%`, boxShadow: `0 0 14px ${GREEN}` }}
              animate={{ y: [0, -26, 0], opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}

        <div className="container-x relative grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em]"
              style={{ color: GREEN }}
            >
              Tyche Tech · Projeto Tyche
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl"
            >
              A nova geração da transmissão de poker.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg text-white/70"
            >
              Tecnologia para transformar qualquer transmissão, em uma profissional.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-[#06201d] transition hover:-translate-y-0.5"
                style={{ background: GREEN, boxShadow: `0 18px 50px -14px ${GREEN}aa` }}
              >
                Solicitar demonstração <ArrowRight size={18} />
              </a>
              <a href="#sistema" className="btn-ghost-dark">Ver o que o sistema faz</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <motion.img
              src={boardImg}
              alt="Placa controladora Tyche Tech em destaque"
              width={1536}
              height={1024}
              animate={reduce ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="w-full rounded-3xl border border-white/10 shadow-2xl"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-y-8 rounded-3xl blur-3xl"
              style={{ background: `${GREEN}44` }}
            />
          </motion.div>
        </div>
      </section>

      {/* O QUE O SISTEMA FAZ */}
      <section id="sistema" className="section">
        <div className="container-x">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
              O que o sistema faz
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Mesa, cartas, câmeras e overlays em um único fluxo.
            </h2>
            <p className="mt-4 text-muted-foreground">
              O Tyche Tech conecta hardware e software numa cadeia só: identificação automática das cartas,
              placa de captura, controle e streaming — pronto para entrar no ar.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.article
                  key={f.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
                  className="rounded-2xl border border-[#dce9e6] bg-white/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#a9ccc6] hover:shadow-[0_24px_60px_-30px_rgba(94,152,144,0.6)]"
                >
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "#e8f2f0", color: GREEN }}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="section bg-[#f1f7f5]">
        <div className="container-x">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>Como funciona</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Da mesa ao streaming, sem etapas manuais.</h2>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {flow.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: reduce ? 0 : 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="relative flex flex-col items-center rounded-2xl border border-[#dce9e6] bg-white p-6 text-center"
                >
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="mt-3 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "#e8f2f0", color: GREEN }}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="mt-4 text-sm font-semibold">{s.label}</span>
                  {i < flow.length - 1 && (
                    <ArrowRight
                      size={18}
                      aria-hidden
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#8db8b1] lg:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ESPECIFICAÇÕES */}
      <section id="especificacoes" className="section">
        <div className="container-x">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>Especificações</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Hardware e software pensados para operação real.</h2>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {specs.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-[#dce9e6] bg-white/70 px-5 py-4 backdrop-blur"
                >
                  <Icon size={18} style={{ color: GREEN }} />
                  <span className="text-sm font-medium">{s.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IDEAL PARA */}
      <section id="para-quem" className="section bg-[#f1f7f5]">
        <div className="container-x">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-3xl font-bold md:text-4xl"
          >
            Ideal para quem leva a mesa a sério.
          </motion.h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#dce9e6] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(94,152,144,0.55)]"
                >
                  <span
                    className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl"
                    style={{ background: "#e8f2f0", color: GREEN }}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="text-lg font-semibold">{a.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-[#04100e] py-24 text-white md:py-32">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `radial-gradient(55% 55% at 50% 45%, ${GREEN}2e 0%, transparent 70%)` }}
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
            Leve suas transmissões para outro nível.
          </motion.h2>
          <motion.a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={reduce ? {} : { scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-bold text-[#06201d]"
            style={{ background: GREEN, boxShadow: `0 0 80px -14px ${GREEN}, 0 20px 60px -22px ${GREEN}` }}
          >
            Solicitar demonstração <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
