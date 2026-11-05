import React from 'react';
import {
  LightVeil, DrawOn,
  Hero, Pose, poseAt, faceAt, kf, clamp, easeOut, rnd, camT, LOOKS,
  Study, Schematic, Rooftop, Bedroom, Stairwell, Kitchen, KitchenIsland,
  Foreground, TitleCard, Glow, ShotProps, FONT,
  FloatingTimer, TimerHud
} from '../../engine';

const PIP = LOOKS.pipHood;
const CEO = LOOKS.suit;
const MO = LOOKS.mo;

// ============================================================================
// S1: News Broadcast Screen - Panic spreads across metropolis
// ============================================================================
export const S1: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <Schematic t={t} id="ch4_s1" />
      <g transform="translate(960 480)">
        <rect x={-450} y={-240} width={900} height={480} rx={22} fill="#180C14" stroke="#EF4444" strokeWidth={3} />
        {/* News Headline Banner */}
        <rect x={-450} y={-240} width={900} height={70} fill="#EF4444" rx={20} />
        <text x={0} y={-195} fill="#FFFFFF" fontSize={26} fontWeight="900" letterSpacing="3px" textAnchor="middle" fontFamily={FONT.ui}>
          BREAKING NEWS // GLOBAL PSYCHOLOGICAL PANIC
        </text>
        <text x={0} y={-70} fill="#F6EFE3" fontSize={42} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
          HARVARD STUDY LEAKED
        </text>
        <line x1={-380} y1={-20} x2={380} y2={-20} stroke="#374151" strokeWidth={2} />
        <text x={0} y={40} fill="#FCA5A5" fontSize={22} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          "STARING AT TIMERS CAUSES THE COLLAPSE"
        </text>
        <rect x={-360} y={85} width={720} height={60} rx={12} fill="#2A121A" />
        <text x={0} y={122} fill="#EF4444" fontSize={20} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
          MASS HYSTERIA REPORTED IN ALL METROPOLITAN ZONES
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S2: Steel Vault Bunker Door - Heavy bolts locking tight
// ============================================================================
export const S2: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Study t={t} id="ch4_s2" />
      {/* Heavy circular vault door */}
      <circle cx={960} cy={540} r={380} fill="#1E293B" stroke="#475569" strokeWidth={16} />
      <circle cx={960} cy={540} r={320} fill="#0F172A" stroke="#334155" strokeWidth={8} />
      {/* Heavy locking spoke bolts */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={i} transform={`translate(960 540) rotate(${angle})`}>
          <rect x={-16} y={-350} width={32} height={120} rx={6} fill="#CBD5E1" stroke="#334155" strokeWidth={4} />
        </g>
      ))}
      {/* Central Vault Wheel */}
      <circle cx={960} cy={540} r={90} fill="#334155" stroke="#CBD5E1" strokeWidth={8} />
      <TimerHud timeText="ISOLATION BUNKER SEALED" label="PAYING THOUSANDS FOR FALSE SAFETY" t={t} color="#FBBF24" />
    </g>
  );
};

// ============================================================================
// S3: Inside Padded Bunker - CEO sitting alone in total silence
// ============================================================================
export const S3: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#0A0D14" />
      {/* Padded soundproof acoustic tiles */}
      <g opacity={0.25}>
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <rect key={`${row}-${col}`} x={col * 320 + 20} y={row * 270 + 20} width={280} height={230} rx={18} fill="none" stroke="#38BDF8" strokeWidth={2} />
          ))
        )}
      </g>
      {/* Lone chair and CEO in center */}
      <g transform="translate(960 740)">
        <Hero look={CEO} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 4, spin: 0, headTilt: 4, armL: { a: 45, b: -30 }, armR: { a: 45, b: -30 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00D : 06H : 12M" kind="danger" scale={1.1} t={t} />
        <Glow x={0} y={-230} r={360} kind="red" o={0.35} />
      </g>
    </g>
  );
};

// ============================================================================
// S4: Close-up CEO - Sensory deprivation driving mind erratic
// ============================================================================
export const S4: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 480, 1.4)}>
      <rect width={1920} height={1080} fill="#06080E" />
      <Hero look={CEO} pose={{ x: 960, y: 720, scale: 1.4, facing: 1, tilt: 8, spin: 0, headTilt: 8, armL: { a: 85, b: -65 }, armR: { a: 85, b: -65 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0.4, glasses: 0, yaw: 0.3, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#EF4444' }} shadow={0} />
      <FloatingTimer x={960} y={320} timeText="00D : 04H : 55M" kind="danger" scale={1.25} t={t} />
      <TimerHud timeText="SENSORY DEPRIVATION BREAKDOWN" label="THE BRAIN DETERIORATES IN SILENCE" t={t} color="#EF4444" />
    </g>
  );
};

// ============================================================================
// S5: Laptop Screen - Panicked CEO wiring life savings to scammer
// ============================================================================
export const S5: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#0A0E18" />
      <g transform="translate(960 540)">
        <rect x={-420} y={-260} width={840} height={520} rx={24} fill="#1E293B" stroke="#475569" strokeWidth={5} />
        {/* Browser Header */}
        <rect x={-420} y={-260} width={840} height={60} fill="#0F172A" rx={20} />
        <circle cx={-380} cy={-230} r={8} fill="#EF4444" />
        <circle cx={-355} cy={-230} r={8} fill="#F59E0B" />
        <circle cx={-330} cy={-230} r={8} fill="#10B981" />
        <text x={0} y={-222} fill="#94A3B8" fontSize={16} textAnchor="middle" fontFamily={FONT.ui}>
          SECURE WIRE TRANSFER // EMERGENCY ASSET RESCUE
        </text>

        {/* Transfer form */}
        <rect x={-360} y={-160} width={720} height={90} rx={12} fill="#0F172A" />
        <text x={-320} y={-120} fill="#94A3B8" fontSize={14} fontFamily={FONT.ui}>RECIPIENT ACCOUNT (UNVERIFIED SCAMMER)</text>
        <text x={-320} y={-90} fill="#F8FAFC" fontSize={22} fontWeight="800" fontFamily={FONT.ui}>0x9F4C...772B (OVERSEAS CRYPTO VAULT)</text>

        <rect x={-360} y={-40} width={720} height={90} rx={12} fill="#0F172A" />
        <text x={-320} y={0} fill="#94A3B8" fontSize={14} fontFamily={FONT.ui}>AMOUNT TO TRANSFER</text>
        <text x={-320} y={32} fill="#EF4444" fontSize={28} fontWeight="900" fontFamily={FONT.ui}>$2,450,000.00 (TOTAL LIFE SAVINGS)</text>

        {/* Big Red Confirm Button Pulsing */}
        <g transform="translate(0 150)">
          <rect x={-200} y={-35} width={400} height={70} rx={16} fill="#EF4444" stroke="#DC2626" strokeWidth={3} />
          <text x={0} y={10} fill="#FFFFFF" fontSize={24} fontWeight="900" letterSpacing="2px" textAnchor="middle" fontFamily={FONT.ui}>
            CONFIRM WIRE TRANSFER
          </text>
        </g>
      </g>
    </g>
  );
};

// ============================================================================
// S6: Supermarket Entrance - Scanners banning shoppers under 24 hours
// ============================================================================
export const S6: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.2)}>
      <Kitchen t={t} id="ch4_s6" />
      {/* Supermarket security scanner archway */}
      <rect x={760} y={200} width={400} height={600} fill="none" stroke="#EF4444" strokeWidth={14} rx={20} />
      <line x1={780} y1={320} x2={1140} y2={320} stroke="#EF4444" strokeWidth={6} strokeDasharray="16 10" />
      <g transform="translate(960 160)">
        <rect x={-220} y={-30} width={440} height={60} rx={12} fill="#271118" stroke="#EF4444" strokeWidth={2} />
        <text x={0} y={8} fill="#EF4444" fontSize={18} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
          ENTRY DENIED // UNDER 24 HOURS
        </text>
      </g>
      {/* Shopper turned away */}
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: -6, spin: 0, headTilt: -6, armL: { a: 25, b: -15 }, armR: { a: 25, b: -15 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: -0.4, glasses: 0, yaw: -0.3, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00D : 18H : 10M" kind="danger" scale={1.05} t={t} />
      </g>
    </g>
  );
};

// ============================================================================
// S7: Parking Lot Shouting Match - Security pushing shoppers
// ============================================================================
export const S7: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <Rooftop t={t + 60} />
      <g transform="translate(680 720)">
        <Hero look={CEO} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: -10, spin: 0, headTilt: 0, armL: { a: 65, b: -25 }, armR: { a: 65, b: -25 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0.8, glasses: 0, yaw: 0.7, squash: 0, handL: 'point', handR: 'point', sway: 0 }} shadow={0} />
      </g>
      <g transform="translate(1260 720)">
        <Hero look={MO} pose={{ x: 0, y: 0, scale: 1.05, facing: 1, tilt: 10, spin: 0, headTilt: -4, armL: { a: -35, b: -15 }, armR: { a: -35, b: -15 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: -0.8, glasses: 0, yaw: -0.7, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      <TimerHud timeText="CIVILIAN SHUTDOWN" label="SUPPLY SHORTAGES AND DESPERATION" t={t} color="#EF4444" />
    </g>
  );
};

// ============================================================================
// S8: Apartment Hallway - Neighbors slamming doors shut on Pip
// ============================================================================
export const S8: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.15)}>
      <Stairwell t={t} id="ch4_s8" />
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 4, spin: 0, headTilt: -6, armL: { a: 15, b: -10 }, armR: { a: -15, b: -10 }, legL: { a: 5, b: 0 }, legR: { a: -5, b: 0 }, expr: 'tired', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00D : 02H : 14M" kind="danger" scale={1.1} t={t} />
        <Glow x={0} y={-230} r={380} kind="red" o={0.45} />
      </g>
    </g>
  );
};

// ============================================================================
// S9: Fisheye Peephole POV - Pip's glowing red halo in dark hallway
// ============================================================================
export const S9: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <rect width={1920} height={1080} fill="#05080E" />
      {/* Fisheye circular peephole mask */}
      <circle cx={960} cy={540} r={460} fill="#111827" stroke="#374151" strokeWidth={24} />
      {/* Distorted Pip standing in hallway */}
      <g transform="translate(960 620) scale(1.6)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 10, b: -5 }, armR: { a: -10, b: -5 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#EF4444' }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00D : 01H : 55M" kind="danger" scale={0.9} t={t} />
      </g>
      <Glow x={960} y={540} r={520} kind="red" o={0.4} />
    </g>
  );
};

// ============================================================================
// S10: Wide Living Room - Pip on couch in dim room, clock under 45 minutes
// ============================================================================
export const S10: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 560, 1.1)}>
      <Bedroom t={t + 60} id="ch4_s10" />
      <g transform="translate(960 740)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 14, spin: 0, headTilt: 12, armL: { a: 60, b: -45 }, armR: { a: 60, b: -45 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00:44:59" kind="danger" scale={1.2} t={t} />
        <Glow x={0} y={-235} r={420} kind="red" o={0.5} />
      </g>
    </g>
  );
};

// ============================================================================
// S11: Close-up Pip - Palms dripping cold sweat, shaking dry leaves
// ============================================================================
export const S11: React.FC<ShotProps> = ({ t, len }) => {
  const tremble = Math.sin(t * 2.0) * 5;
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Bedroom t={t} id="ch4_s11" />
      {/* Pip trembling in panic, clutching chest and head with cold sweat, no floating ovals */}
      <Hero
        look={PIP}
        pose={{
          x: 960 + tremble,
          y: 710,
          scale: 1.1,
          facing: 1,
          tilt: -8,
          spin: 0,
          headTilt: 8,
          armL: { a: 110, b: 85 },
          armR: { a: 110, b: 85 },
          legL: { a: 8, b: 0 },
          legR: { a: -8, b: 0 },
          expr: 'worried',
          blink: 0,
          look: -0.4,
          glasses: 0,
          yaw: -0.3,
          squash: 0,
          handL: 'open',
          handR: 'open',
          sway: tremble,
        }}
        shadow={0.5}
      />
      {/* Sweat drops */}
      <circle cx={920} cy={500} r={7} fill="#38BDF8" opacity={0.85} />
      <circle cx={1000} cy={505} r={7} fill="#38BDF8" opacity={0.85} />
      <TimerHud timeText="HANDS SHAKING LIKE AUTUMN LEAVES" label="AUTONOMIC NERVOUS SYSTEM SHUTDOWN" t={t} color="#FF334B" />
    </g>
  );
};

// ============================================================================
// S12: Medium Tension - Pip pacing back and forth like trapped animal
// ============================================================================
export const S12: React.FC<ShotProps> = ({ t, len }) => {
  const paceX = 960 + Math.sin(t * 0.3) * 160;
  return (
    <g transform={camT(960, 520, 1.2)}>
      <Bedroom t={t + 100} id="ch4_s12" />
      <g transform={`translate(${paceX} 720)`}>
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 6, spin: 0, headTilt: -4, armL: { a: 35, b: -20 }, armR: { a: -35, b: -20 }, legL: { a: 15, b: -10 }, legR: { a: -15, b: -10 }, expr: 'worried', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00:38:12" kind="danger" scale={1.15} t={t} />
      </g>
    </g>
  );
};

// ============================================================================
// S13: Split Screen - Racing thoughts vs ticking red timer
// ============================================================================
export const S13: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <rect width={1920} height={1080} fill="#090C14" />
      {/* Left pane: Pip terrified profile */}
      <g transform="translate(480 620) scale(1.6)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1, facing: 1, tilt: 4, spin: 0, headTilt: 4, armL: { a: 20, b: -10 }, armR: { a: 20, b: -10 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0.8, glasses: 0, yaw: 0.8, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#EF4444' }} shadow={0} />
      </g>
      {/* Divider */}
      <line x1={960} y1={100} x2={960} y2={980} stroke="#EF4444" strokeWidth={4} strokeDasharray="20 15" />
      {/* Right pane: Giant Relentless Timer */}
      <g transform="translate(1440 540)">
        <rect x={-360} y={-160} width={720} height={320} rx={28} fill="#180C14" stroke="#EF4444" strokeWidth={5} />
        <text x={0} y={-60} fill="#FCA5A5" fontSize={24} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          FINAL COUNTDOWN SEQUENCE
        </text>
        <text x={0} y={50} fill="#EF4444" fontSize={80} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
          00:28:44
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S14: Window View - Blue and red sirens flashing on walls
// ============================================================================
export const S14: React.FC<ShotProps> = ({ t, len }) => {
  const sirenColor = Math.floor(t / 8) % 2 === 0 ? '#3B82F6' : '#EF4444';
  return (
    <g transform={camT(960, 520, 1.15)}>
      <Bedroom t={t + 140} id="ch4_s14" />
      {/* Flashing siren aura across the room */}
      <rect width={1920} height={1080} fill={sirenColor} opacity={0.2} />
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: -6, spin: 0, headTilt: -6, armL: { a: 20, b: -10 }, armR: { a: -20, b: -10 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00:24:18" kind="danger" scale={1.15} t={t} />
      </g>
    </g>
  );
};

// ============================================================================
// S15: Macro Clock - 20 minutes remaining
// ============================================================================
export const S15: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <rect width={1920} height={1080} fill="#090C14" />
      <TimerHud timeText="00:20:00" label="DANGER POINT REACHED" t={t} color="#FF334B" />
      <Glow x={960} y={540} r={650} kind="red" o={0.45} />
    </g>
  );
};

// ============================================================================
// S16: Hero Medium - Pip facing the inevitable in dark apartment
// ============================================================================
export const S16: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 500, 1.35)}>
      <Bedroom t={t + 180} id="ch4_s16" />
      <Hero look={PIP} pose={{ x: 960, y: 720, scale: 1.3, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 15, b: -10 }, armR: { a: -15, b: -10 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#FF334B' }} shadow={0} />
      <FloatingTimer x={960} y={340} timeText="00:15:20" kind="danger" scale={1.25} t={t} />
      <Glow x={960} y={340} r={480} kind="red" o={0.4} />
    </g>
  );
};
