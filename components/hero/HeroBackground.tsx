"use client";

import { motion } from "framer-motion";
import HeroCar from "@/components/hero/HeroCar";

/**
 * Decorative SVG backdrop for the Hero section.
 * Layers (back → front): soft gradient blobs, dot-grid texture, a wave divider
 * that blends into the slate-50 TrustBar below, and an animated car driving a
 * curvy road across the hero (see HeroCar).
 * Purely decorative — never intercepts pointer events, always behind content.
 */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft gradient blobs (kept from the original, now part of the backdrop) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-24 -right-16 w-[520px] h-[520px] rounded-full bg-accent-200/40 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="absolute -bottom-24 -left-16 w-[440px] h-[440px] rounded-full bg-primary-100/50 blur-3xl"
      />

      {/* Dot-grid texture */}
      <svg className="absolute inset-0 h-full w-full text-slate-300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
          <radialGradient id="hero-dot-fade" cx="35%" cy="40%" r="75%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="70%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-dot-mask">
            <rect width="100%" height="100%" fill="url(#hero-dot-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" mask="url(#hero-dot-mask)" opacity="0.5" />
      </svg>

      {/* Wave divider — blends into the slate-50 section below */}
      <svg
        className="absolute bottom-0 left-0 w-full text-slate-50"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 64 C 240 112, 480 112, 720 80 C 960 48, 1200 16, 1440 56 L 1440 120 L 0 120 Z"
        />
      </svg>

      {/* Animated car driving the curvy road across the whole hero (on top of the wave) */}
      <HeroCar />
    </div>
  );
}
