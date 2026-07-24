/**
 * Animated car driving up a curvy road that spans the whole hero — entering
 * bottom-left, weaving up through the empty corridor between the heading and the
 * booking form, and exiting top-right. Built as a responsive full-bleed SVG; the
 * car follows the road via SMIL <animateMotion rotate="auto"> so it banks with
 * the curve and always noses in its direction of travel. Desktop only.
 */
export default function HeroCar() {
  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* A sleek, near-horizontal highway across the open top band (below the
              nav, above the card) with a gentle rightward incline — clean and
              modern, clear of all content, ends run off-screen. */}
          <path
            id="hero-road"
            d="M -80 176 C 320 166, 640 150, 860 144 C 1090 138, 1330 132, 1560 124"
          />
        </defs>

        {/* Road surface + dashed centre lane */}
        <g opacity="0.9">
          <use href="#hero-road" stroke="#cbd5e1" strokeWidth="9" strokeLinecap="round" />
          <use href="#hero-road" stroke="#e6eaf1" strokeWidth="6" strokeLinecap="round" />
          <use
            href="#hero-road"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeDasharray="14 20"
            strokeLinecap="round"
          />
        </g>

        {/* Car — follows the road and banks with it */}
        <g>
          <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
            <mpath href="#hero-road" />
          </animateMotion>

          {/* Offset so the wheels ride on the path point */}
          <g transform="translate(-38 -30)">
            <ellipse cx="38" cy="31" rx="30" ry="2.3" fill="#0f172a" opacity="0.08" />
            {/* body: short trunk (left/rear) → cabin → long hood (right/front) */}
            <path
              d="M3 25 L3 21 Q3 19 6 18.5 L6 16 Q6 15 8 15 L16 15 L24 7 Q26 6 30 6 L44 6 Q47 6 49 8.5 L54 15 L70 16 Q73.5 16.5 73.5 20 L73.5 23 Q73.5 25 71.5 25 L3 25 Z"
              fill="#f97316"
            />
            <path d="M4 24 L72 24" stroke="#ea580c" strokeWidth="1.4" />
            {/* windows */}
            <path d="M17.5 14 L24.5 7.5 L29 7.5 L29 14 Z" fill="#dbeafe" />
            <path d="M31 7.5 L44 7.5 L49 13.5 L31 13.5 Z" fill="#dbeafe" />
            {/* details: headlight (front/right), taillight (rear/left), handle */}
            <circle cx="71.5" cy="19" r="1.5" fill="#fde68a" />
            <circle cx="4.8" cy="19.5" r="1.1" fill="#dc2626" />
            <rect x="36" y="18" width="6" height="1.3" rx="0.6" fill="#ea580c" />
            {/* rear wheel */}
            <g>
              <circle cx="21" cy="25" r="6" fill="#1e293b" />
              <circle cx="21" cy="25" r="2.6" fill="#94a3b8" />
              <rect x="20.5" y="19.5" width="1" height="11" fill="#475569" />
              <rect x="15.5" y="24.5" width="11" height="1" fill="#475569" />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 21 25"
                to="360 21 25"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </g>
            {/* front wheel */}
            <g>
              <circle cx="55" cy="25" r="6" fill="#1e293b" />
              <circle cx="55" cy="25" r="2.6" fill="#94a3b8" />
              <rect x="54.5" y="19.5" width="1" height="11" fill="#475569" />
              <rect x="49.5" y="24.5" width="11" height="1" fill="#475569" />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 55 25"
                to="360 55 25"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
