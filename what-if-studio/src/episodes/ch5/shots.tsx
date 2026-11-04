import React from 'react';
import {
  LightVeil, DrawOn,
  Hero, Pose, poseAt, faceAt, kf, clamp, easeOut, rnd, camT, LOOKS,
  Bedroom, Rooftop, Schematic,
  Foreground, TitleCard, Glow, ShotProps, FONT,
  FloatingTimer, TimerHud
} from '../../engine';

const PIP = LOOKS.pipHood;
const SIS = LOOKS.sis;

// ============================================================================
// S1: Wide Living Room Floor - Pip cross-legged on rug with 12 minutes left
// ============================================================================
export const S1: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 560, 1.15)}>
      <Bedroom t={t} id="ch5_s1" />
      {/* Living room floor rug */}
      <ellipse cx={960} cy={760} rx={360} ry={140} fill="#B45309" stroke="#92400E" strokeWidth={6} opacity={0.6} />
      <g transform="translate(960 730)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 6, spin: 0, headTilt: 4, armL: { a: 45, b: -30 }, armR: { a: 45, b: -30 }, legL: { a: 35, b: -40 }, legR: { a: -35, b: -40 }, expr: 'worried', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-230} timeText="00:11:58" kind="danger" scale={1.2} t={t} />
        <Glow x={0} y={-230} r={420} kind="red" o={0.45} />
      </g>
    </g>
  );
};

// ============================================================================
// S2: Extreme Close-Up - Heart pounding against ribs like a frightened bird
// ============================================================================
export const S2: React.FC<ShotProps> = ({ t, len }) => {
  const pulse = 1 + 0.12 * Math.sin(t * 1.6);
  return (
    <g transform={camT(960, 500, 1.45)}>
      <rect width={1920} height={1080} fill="#0A0C14" />
      <g transform="translate(960 640) scale(1.6)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 0, b: 0 }, armR: { a: 0, b: 0 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#FF334B' }} shadow={0} />
      </g>
      {/* Heart visualizer pulse */}
      <g transform={`translate(960 520) scale(${pulse})`}>
        <path d="M 0 -20 Q -40 -60 -80 -20 Q -100 20 0 90 Q 100 20 80 -20 Q 40 -60 0 -20 Z" fill="#EF4444" opacity={0.35} />
      </g>
      <TimerHud timeText="00:08:44" label="RAPID HEART RATE // 165 BPM" t={t} color="#FF334B" />
    </g>
  );
};

// ============================================================================
// S3: Imagined Danger Flash 1 - Traffic intersection collision
// ============================================================================
export const S3: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Rooftop t={t + 40} />
      {/* Headlights rushing at camera */}
      <circle cx={720} cy={600} r={180} fill="#FEF08A" opacity={0.4} filter="blur(12px)" />
      <circle cx={1200} cy={600} r={180} fill="#FEF08A" opacity={0.4} filter="blur(12px)" />
      <circle cx={720} cy={600} r={40} fill="#FFFFFF" />
      <circle cx={1200} cy={600} r={40} fill="#FFFFFF" />
      <TimerHud timeText="FEARED DISASTER: TRAFFIC COLLISION" label="TARGET FIXATION WORST CASE" t={t} color="#EF4444" />
    </g>
  );
};

// ============================================================================
// S4: Imagined Danger Flash 2 - Space heater sparking near curtains
// ============================================================================
export const S4: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Bedroom t={t + 80} id="ch5_s4" />
      {/* Glowing heater coil */}
      <g transform="translate(960 680)">
        <rect x={-90} y={-110} width={180} height={220} rx={16} fill="#1F2937" stroke="#374151" strokeWidth={6} />
        <line x1={-60} y1={-50} x2={60} y2={-50} stroke="#FF8A3D" strokeWidth={12} strokeLinecap="round" />
        <line x1={-60} y1={0} x2={60} y2={0} stroke="#FF8A3D" strokeWidth={12} strokeLinecap="round" />
        <line x1={-60} y1={50} x2={60} y2={50} stroke="#FF8A3D" strokeWidth={12} strokeLinecap="round" />
      </g>
      <TimerHud timeText="FEARED DISASTER: ELECTRICAL FIRE" label="SHAKING HANDS ACCIDENTAL IGNITION" t={t} color="#FF8A3D" />
    </g>
  );
};

// ============================================================================
// S5: Close-Up 30 Seconds Left - Clarity strikes Pip
// ============================================================================
export const S5: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 500, 1.4)}>
      <Bedroom t={t + 120} id="ch5_s5" />
      <Hero look={PIP} pose={{ x: 960, y: 720, scale: 1.35, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 25, b: -15 }, armR: { a: 25, b: -15 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#38BDF8' }} shadow={0} />
      <FloatingTimer x={960} y={320} timeText="00:00:30" kind="danger" scale={1.3} t={t} />
      <TimerHud timeText="CHOOSE YOUR OWN TARGET" label="BREAKING TARGET FIXATION" t={t} color="#38BDF8" />
    </g>
  );
};

// ============================================================================
// S6: Medium Shot - Pip breathes slow, reaches for phone
// ============================================================================
export const S6: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.25)}>
      <Bedroom t={t + 140} id="ch5_s6" />
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 0, spin: 0, headTilt: -2, armL: { a: 45, b: -30 }, armR: { a: 45, b: -30 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'neutral', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-230} timeText="00:00:18" kind="danger" scale={1.15} t={t} />
      </g>
    </g>
  );
};

// ============================================================================
// S7: Smartphone Keyboard Insert - Typing out confession
// ============================================================================
export const S7: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#0F172A" />
      <g transform="translate(960 540)">
        <rect x={-320} y={-380} width={640} height={760} rx={32} fill="#1E293B" stroke="#334155" strokeWidth={5} />
        {/* Chat recipient */}
        <text x={0} y={-310} fill="#F8FAFC" fontSize={26} fontWeight="800" textAnchor="middle" fontFamily={FONT.title}>
          CHAT // SECRET CRUSH
        </text>
        <line x1={-260} y1={-270} x2={260} y2={-270} stroke="#334155" strokeWidth={2} />

        {/* Typing Bubble */}
        <rect x={-260} y={-160} width={520} height={180} rx={18} fill="#3B82F6" />
        <text x={0} y={-100} fill="#FFFFFF" fontSize={22} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          "Confession: I accidentally wore"
        </text>
        <text x={0} y={-60} fill="#FFFFFF" fontSize={22} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          "mismatched cartoon socks"
        </text>
        <text x={0} y={-20} fill="#FFFFFF" fontSize={22} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          "on our first date..."
        </text>

        {/* Ticking countdown pill on phone */}
        <g transform="translate(0 140)">
          <rect x={-140} y={-25} width={280} height={50} rx={25} fill="#EF4444" />
          <text x={0} y={8} fill="#FFFFFF" fontSize={20} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
            00:00:08
          </text>
        </g>
      </g>
    </g>
  );
};

// ============================================================================
// S8: Message Preview Bubble - Mismatched socks confession
// ============================================================================
export const S8: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#090C14" />
      <g transform="translate(960 540)">
        <rect x={-420} y={-180} width={840} height={360} rx={28} fill="#1E293B" stroke="#3B82F6" strokeWidth={4} />
        <text x={0} y={-80} fill="#93C5FD" fontSize={20} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          INTENTIONAL HARMLESS BLUNDER
        </text>
        <text x={0} y={-10} fill="#FFFFFF" fontSize={32} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
          "I WORE SPONGEBOB SOCKS"
        </text>
        <text x={0} y={50} fill="#E2E8F0" fontSize={22} textAnchor="middle" fontFamily={FONT.ui}>
          "WITH MY DRESS SHOES TO YOUR PARTY"
        </text>
        <rect x={-200} y={90} width={400} height={50} rx={12} fill="#374151" />
        <text x={0} y={122} fill="#34D399" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          PARADOXICAL INTENTION DEPLOYED
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S9: Macro Finger Tapping Send - Clock strikes 00:00:00
// ============================================================================
export const S9: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <rect width={1920} height={1080} fill="#020408" />
      {/* Big glowing SEND button */}
      <g transform="translate(960 540)">
        <rect x={-240} y={-70} width={480} height={140} rx={24} fill="#2563EB" stroke="#60A5FA" strokeWidth={6} />
        <text x={0} y={20} fill="#FFFFFF" fontSize={46} fontWeight="900" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.title}>
          SEND MESSAGE
        </text>
        {/* Pip's finger tapping button right at strike */}
        <ellipse cx={0} cy={-20} rx={48} ry={70} fill="#F6EFE3" stroke="#1D2033" strokeWidth={6} />
      </g>
      <TimerHud timeText="00:00:00" label="STRIKING ZERO // INTENTIONAL RELEASE" t={t} color="#38BDF8" />
      <Glow x={960} y={540} r={650} kind="cool" o={0.5} />
    </g>
  );
};

// ============================================================================
// S10: Hero Burst - Golden sparkles burst from forehead, red vanishes
// ============================================================================
export const S10: React.FC<ShotProps> = ({ t, len }) => {
  const sparkScale = kf(t, [[0, 0.2], [len, 2.5]], easeOut);
  return (
    <g transform={camT(960, 500, 1.35)}>
      <Bedroom t={t + 160} id="ch5_s10" />
      <Hero look={PIP} pose={{ x: 960, y: 720, scale: 1.35, facing: 1, tilt: 0, spin: 0, headTilt: 4, armL: { a: 45, b: -25 }, armR: { a: 45, b: -25 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'happy', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      {/* Golden sparkle particles exploding from forehead */}
      <g transform={`translate(960 360) scale(${sparkScale})`}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle}) translate(0 -90)`}>
            <polygon points="0,-24 7,-7 24,0 7,7 0,24 -7,7 -24,0 -7,-7" fill="#FBBF24" />
          </g>
        ))}
      </g>
      <Glow x={960} y={360} r={550} kind="warm" o={0.5} />
      <TimerHud timeText="TIMER DISSOLVED FOREVER" label="FREEDOM FROM THE CLOCK" t={t} color="#FBBF24" />
    </g>
  );
};

// ============================================================================
// S11: Medium Pip - Smiling in warm relief, life intact
// ============================================================================
export const S11: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.25)}>
      <Bedroom t={t + 180} id="ch5_s11" />
      <Hero look={PIP} pose={{ x: 960, y: 720, scale: 1.25, facing: 1, tilt: 0, spin: 0, headTilt: 2, armL: { a: 20, b: -10 }, armR: { a: -20, b: -10 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'happy', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      <LightVeil id="ch5_s11_veil" lights={[[960, 480, 600]]} o={0.3} />
      <Glow x={960} y={480} r={420} kind="warm" o={0.4} />
    </g>
  );
};

// ============================================================================
// S12: Phone Screen Reply - Crush texts laughing face
// ============================================================================
export const S12: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#0F172A" />
      <g transform="translate(960 540)">
        <rect x={-320} y={-340} width={640} height={680} rx={32} fill="#1E293B" stroke="#334155" strokeWidth={5} />
        <text x={0} y={-270} fill="#F8FAFC" fontSize={26} fontWeight="800" textAnchor="middle" fontFamily={FONT.title}>
          CHAT // SECRET CRUSH
        </text>
        <line x1={-260} y1={-230} x2={260} y2={-230} stroke="#334155" strokeWidth={2} />

        {/* Crush reply bubble */}
        <rect x={-240} y={-160} width={480} height={160} rx={22} fill="#334155" />
        <text x={0} y={-100} fill="#34D399" fontSize={24} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          "Haha I noticed! 😂"
        </text>
        <text x={0} y={-60} fill="#F1F5F9" fontSize={22} fontWeight="600" textAnchor="middle" fontFamily={FONT.ui}>
          "They were actually super cute!"
        </text>

        {/* Reaction Emoji Heart */}
        <text x={180} y={-10} fill="#F43F5E" fontSize={42}>❤️</text>
      </g>
    </g>
  );
};

// ============================================================================
// S13: Hero Direct Address - Pip smiles: would you look in the mirror?
// ============================================================================
export const S13: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 500, 1.35)}>
      <Bedroom t={t + 200} id="ch5_s13" />
      <Hero look={PIP} pose={{ x: 960, y: 720, scale: 1.35, facing: 1, tilt: 0, spin: 0, headTilt: -2, armL: { a: 45, b: -25 }, armR: { a: 45, b: -25 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'happy', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      <Glow x={960} y={480} r={480} kind="warm" o={0.35} />
    </g>
  );
};

// ============================================================================
// S14: Final Cinematic Wide - Dusk skyline, comment prompt card
// ============================================================================
export const S14: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(kf(t, [[0, 960], [len, 980]]), 540, 1.05)}>
      <Rooftop t={t + 100} />
      {/* Title Card Question for Comments */}
      <g transform="translate(960 420)">
        <rect x={-520} y={-110} width={1040} height={220} rx={24} fill="#0F172A" fillOpacity={0.94} stroke="#FBBF24" strokeWidth={3} />
        <text x={0} y={-45} fill="#FBBF24" fontSize={22} fontWeight="800" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.ui}>
          TELL US IN THE COMMENTS
        </text>
        <text x={0} y={25} fill="#F6EFE3" fontSize={46} fontWeight="900" letterSpacing="1px" textAnchor="middle" fontFamily={FONT.title}>
          WOULD YOU LOOK IN THE MIRROR?
        </text>
        <text x={0} y={75} fill="#94A3B8" fontSize={18} textAnchor="middle" fontFamily={FONT.ui}>
          LIKE &amp; SUBSCRIBE FOR MORE STORIES
        </text>
      </g>
    </g>
  );
};
