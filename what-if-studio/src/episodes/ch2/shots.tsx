import React from 'react';
import {
  LightVeil, DrawOn,
  Hero, Pose, poseAt, faceAt, kf, clamp, easeOut, rnd, camT, LOOKS,
  Kitchen, KitchenIsland, Classroom, Stairwell, Rooftop, Bedroom, Study, Schematic,
  Foreground, TitleCard, Glow, ShotProps, FONT,
  FloatingTimer, TimerHud
} from '../../engine';

const PIP = LOOKS.pipHood;
const MO = LOOKS.mo;
const SUIT = LOOKS.suit;
const SIS = LOOKS.sis;

// ============================================================================
// S1: Wide Lobby / Street - People sorted by timer length
// ============================================================================
export const S1: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(kf(t, [[0, 960], [len, 1020]]), 540, 1.05)}>
      <Rooftop t={t} />
      <g transform="translate(520 710) scale(0.9)">
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 0.9, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 10, b: -5 }, armR: { a: -10, b: -5 }, legL: { a: 5, b: 0 }, legR: { a: -5, b: 0 }, expr: 'smug', blink: 0, look: 0.4, glasses: 0, yaw: 0.3, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="38Y : 110D" kind="safe" scale={0.85} t={t} />
      </g>
      <g transform="translate(1040 720) scale(0.95)">
        <Hero look={MO} pose={{ x: 0, y: 0, scale: 0.95, facing: 1, tilt: -2, spin: 0, headTilt: 2, armL: { a: -15, b: -5 }, armR: { a: 20, b: -10 }, legL: { a: -5, b: 0 }, legR: { a: 5, b: 0 }, expr: 'happy', blink: 0, look: -0.3, glasses: 0, yaw: -0.2, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="42Y : 08M" kind="safe" scale={0.9} t={t} />
      </g>
      <g transform="translate(1520 710) scale(0.9)">
        <Hero look={SIS} pose={{ x: 0, y: 0, scale: 0.85, facing: 1, tilt: 4, spin: 0, headTilt: -4, armL: { a: 30, b: -20 }, armR: { a: -20, b: -10 }, legL: { a: 10, b: -5 }, legR: { a: -10, b: -5 }, expr: 'worried', blink: 0, look: -0.6, glasses: 0, yaw: -0.5, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00Y : 07M" kind="danger" scale={0.85} t={t} />
      </g>
      <TimerHud timeText="SOCIAL PREJUDICE ALGORITHM" label="SOCIETY ARMED WITH FOREHEAD TIMERS" t={t} color="#FBBF24" />
    </g>
  );
};

// ============================================================================
// S2: Job Interview - Boss pointing scanner at applicant's forehead
// ============================================================================
export const S2: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.25)}>
      <Study t={t} id="ch2_s2" />
      {/* Boss in suit pointing hand scanner */}
      <g transform="translate(620 700)">
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: -4, spin: 0, headTilt: 2, armL: { a: -10, b: -5 }, armR: { a: 75, b: -20 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'smug', blink: 0, look: 0.7, glasses: 0, yaw: 0.6, squash: 0, handL: 'open', handR: 'point', sway: 0 }} shadow={0} />
        {/* Scanner device */}
        <rect x={70} y={-110} width={45} height={20} rx={4} fill="#2A344A" stroke="#4B5563" strokeWidth={2} />
        <line x1={115} y1={-100} x2={520} y2={-100} stroke="#EF4444" strokeWidth={3} strokeDasharray="8 6" opacity={0.85} />
      </g>
      {/* Nervous applicant */}
      <g transform="translate(1320 710)">
        <Hero look={SIS} pose={{ x: 0, y: 0, scale: 1.05, facing: 1, tilt: 6, spin: 0, headTilt: -6, armL: { a: 35, b: -25 }, armR: { a: 35, b: -25 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: -0.7, glasses: 0, yaw: -0.6, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00Y : 04M : 12D" kind="danger" scale={1.0} t={t} />
      </g>
    </g>
  );
};

// ============================================================================
// S3: Close-up Resume - Stamped "REJECTED - SHORT TIMER"
// ============================================================================
export const S3: React.FC<ShotProps> = ({ t, len }) => {
  const stampScale = kf(t, [[0, 2.2], [8, 1.0]], easeOut);
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#181B26" />
      {/* Resume paper sheet */}
      <g transform="translate(960 540)">
        <rect x={-340} y={-420} width={680} height={840} rx={12} fill="#F9F6F0" stroke="#D1D5DB" strokeWidth={4} />
        {/* Header and text lines */}
        <rect x={-280} y={-360} width={280} height={28} fill="#374151" rx={4} />
        <rect x={-280} y={-300} width={560} height={12} fill="#9CA3AF" rx={2} />
        <rect x={-280} y={-260} width={500} height={12} fill="#9CA3AF" rx={2} />
        <rect x={-280} y={-220} width={530} height={12} fill="#9CA3AF" rx={2} />
        <rect x={-280} y={-160} width={380} height={18} fill="#4B5563" rx={3} />
        <rect x={-280} y={-110} width={560} height={12} fill="#9CA3AF" rx={2} />
        <rect x={-280} y={-70} width={480} height={12} fill="#9CA3AF" rx={2} />

        {/* Big Crimson Stamp */}
        <g transform={`rotate(-14) scale(${stampScale})`}>
          <rect x={-250} y={-60} width={500} height={120} rx={16} fill="none" stroke="#DC2626" strokeWidth={8} />
          <text x={0} y={18} fill="#DC2626" fontSize={42} fontWeight="900" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.title}>
            REJECTED // SHORT TIMER
          </text>
        </g>
      </g>
    </g>
  );
};

// ============================================================================
// S4: Bank Loan Desk - Denied documents pushed back to couple
// ============================================================================
export const S4: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.2)}>
      <Study t={t + 20} id="ch2_s4" />
      <g transform="translate(680 700)">
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: -2, spin: 0, headTilt: 0, armL: { a: 20, b: -10 }, armR: { a: 45, b: -30 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'smug', blink: 0, look: 0.6, glasses: 0, yaw: 0.5, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      {/* Disappointed couple */}
      <g transform="translate(1260 710)">
        <Hero look={SIS} pose={{ x: 0, y: 0, scale: 1.0, facing: 1, tilt: 4, spin: 0, headTilt: 6, armL: { a: 30, b: -20 }, armR: { a: 30, b: -20 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'tired', blink: 0, look: -0.5, glasses: 0, yaw: -0.4, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="03Y : 08M" kind="warning" scale={0.9} t={t} />
      </g>
      <TimerHud timeText="MORTGAGE APPLICATION DENIED" label="CREDIT RISK: COUNTDOWN TOO LOW" t={t} color="#FBBF24" />
    </g>
  );
};

// ============================================================================
// S5: Accounting Office - Mo beaming with green 42Y timer gets huge promotion
// ============================================================================
export const S5: React.FC<ShotProps> = ({ t, len }) => {
  const moHappy = poseAt(t, [
    { f: 0, p: { x: 960, y: 720, scale: 1.25, yaw: 0, headTilt: 0, armL: { a: 45, b: -20 }, armR: { a: 45, b: -20 } } },
    { f: 30, p: { headTilt: 6, armL: { a: 65, b: -30 }, armR: { a: 65, b: -30 } }, ease: easeOut },
  ]);
  return (
    <g transform={camT(960, 500, kf(t, [[0, 1.2], [len, 1.28]]))}>
      <Classroom t={t} id="ch2_s5" />
      <Hero look={MO} pose={{ ...moHappy, expr: 'happy', blink: 0, look: 0, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 } }} shadow={0} />
      <FloatingTimer x={960} y={350} timeText="42Y : 08M : 14D" kind="safe" scale={1.2} t={t} />
      <Glow x={960} y={350} r={420} kind="cool" o={0.35} />
    </g>
  );
};

// ============================================================================
// S6: Close-up Mo - Handed executive master keys
// ============================================================================
export const S6: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Classroom t={t + 40} id="ch2_s6" />
      <g transform="translate(960 620) scale(1.6)">
        <Hero look={MO} pose={{ x: 0, y: 0, scale: 1, facing: 1, tilt: 0, spin: 0, headTilt: 4, armL: { a: 50, b: -40 }, armR: { a: 50, b: -40 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'smug', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      {/* Golden keys */}
      <g transform="translate(1080 620)">
        <circle cx={0} cy={0} r={28} fill="none" stroke="#F59E0B" strokeWidth={6} />
        <rect x={18} y={-6} width={60} height={12} fill="#F59E0B" />
        <rect x={55} y={0} width={10} height={16} fill="#F59E0B" />
        <rect x={70} y={0} width={8} height={20} fill="#F59E0B" />
      </g>
      <Glow x={1080} y={620} r={260} kind="warm" o={0.5} />
    </g>
  );
};

// ============================================================================
// S7: Dating App Filter UI - Hide short timers toggle ON
// ============================================================================
export const S7: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <Schematic t={t} id="ch2_s7" />
      {/* Smartphone mockup */}
      <g transform="translate(960 540)">
        <rect x={-260} y={-420} width={520} height={840} rx={45} fill="#0F172A" stroke="#334155" strokeWidth={6} />
        {/* App Title */}
        <text x={0} y={-330} fill="#F43F5E" fontSize={32} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
          SWIPE RIGHT // COMPATIBILITY
        </text>
        <line x1={-200} y1={-290} x2={200} y2={-290} stroke="#1E293B" strokeWidth={2} />

        {/* Filter Setting Card */}
        <rect x={-210} y={-240} width={420} height={140} rx={18} fill="#1E293B" />
        <text x={-180} y={-195} fill="#E2E8F0" fontSize={18} fontWeight="700" fontFamily={FONT.ui}>
          HIDE SHORT TIMERS
        </text>
        <text x={-180} y={-160} fill="#94A3B8" fontSize={14} fontFamily={FONT.ui}>
          Filter out matches under 12 months
        </text>
        {/* Toggle Switch ON */}
        <rect x={110} y={-210} width={70} height={38} rx={19} fill="#10B981" />
        <circle cx={155} cy={-191} r={15} fill="#FFFFFF" />

        {/* Second Filter: Minimum Timer Requirement */}
        <rect x={-210} y={-70} width={420} height={140} rx={18} fill="#1E293B" />
        <text x={-180} y={-25} fill="#E2E8F0" fontSize={18} fontWeight="700" fontFamily={FONT.ui}>
          MINIMUM LIFETIME REQUIREMENT
        </text>
        <text x={-180} y={10} fill="#34D399" fontSize={24} fontWeight="900" fontFamily={FONT.ui}>
          &gt; 25 YEARS REMAINING
        </text>

        {/* Rejected Matches Count */}
        <rect x={-210} y={100} width={420} height={80} rx={14} fill="#2A1B24" stroke="#EF4444" strokeWidth={1.5} />
        <text x={0} y={148} fill="#EF4444" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          89% OF APPLICANTS HIDDEN
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S8: Apartment Hallway - Tenant with yellow timer evicted with moving boxes
// ============================================================================
export const S8: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.15)}>
      <Stairwell t={t} id="ch2_s8" />
      <g transform="translate(780 720)">
        <Hero look={SIS} pose={{ x: 0, y: 0, scale: 1.05, facing: 1, tilt: 10, spin: 0, headTilt: -6, armL: { a: 45, b: -30 }, armR: { a: 45, b: -30 }, legL: { a: 15, b: -10 }, legR: { a: -15, b: -5 }, expr: 'worried', blink: 0, look: -0.4, glasses: 0, yaw: -0.3, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00Y : 01M : 18D" kind="warning" scale={0.95} t={t} />
        {/* Cardboard moving box */}
        <rect x={-45} y={-60} width={90} height={70} rx={4} fill="#B48252" stroke="#684728" strokeWidth={3} />
        <line x1={-45} y1={-40} x2={45} y2={-40} stroke="#684728" strokeWidth={2} />
      </g>
    </g>
  );
};

// ============================================================================
// S9: Wide Sidewalk - Crowd visibly parting like the Red Sea
// ============================================================================
export const S9: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <Rooftop t={t + 40} />
      {/* Crowd moving to far left */}
      <g transform="translate(380 710)">
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 0.9, facing: 1, tilt: -8, spin: 0, headTilt: 0, armL: { a: -15, b: -5 }, armR: { a: -15, b: -5 }, legL: { a: -10, b: 0 }, legR: { a: 10, b: 0 }, expr: 'shock', blink: 0, look: 0.8, glasses: 0, yaw: 0.7, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      {/* Isolated man walking in center with imminent red timer */}
      <g transform="translate(960 720)">
        <Hero look={SIS} pose={{ x: 0, y: 0, scale: 1.0, facing: 1, tilt: 0, spin: 0, headTilt: 4, armL: { a: 10, b: -5 }, armR: { a: -10, b: -5 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'tired', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00D : 02H : 11M" kind="danger" scale={1.1} t={t} />
        <Glow x={0} y={-230} r={350} kind="red" o={0.4} />
      </g>
      {/* Crowd moving to far right */}
      <g transform="translate(1540 710)">
        <Hero look={MO} pose={{ x: 0, y: 0, scale: 0.9, facing: 1, tilt: 8, spin: 0, headTilt: 0, armL: { a: 15, b: -5 }, armR: { a: 15, b: -5 }, legL: { a: 10, b: 0 }, legR: { a: -10, b: 0 }, expr: 'worried', blink: 0, look: -0.8, glasses: 0, yaw: -0.7, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
    </g>
  );
};

// ============================================================================
// S10: Store Counter - Store clerk watching customer warily
// ============================================================================
export const S10: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.25)}>
      <Kitchen t={t} id="ch2_s10" />
      <g transform="translate(740 700)">
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 4, spin: 0, headTilt: -2, armL: { a: 30, b: -15 }, armR: { a: 30, b: -15 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: 0.8, glasses: 0, yaw: 0.7, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      <KitchenIsland />
      <TimerHud timeText="WALKING HUMAN HAZARDS" label="SOCIETY TURNING ON SHORT TIMERS" t={t} color="#FBBF24" />
    </g>
  );
};

// ============================================================================
// S11: Pip Entering Work - Wearing thick beanie, red neon shining through
// ============================================================================
export const S11: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.2)}>
      <Classroom t={t + 60} id="ch2_s11" />
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.2, facing: 1, tilt: 4, spin: 0, headTilt: -4, armL: { a: 20, b: -10 }, armR: { a: -15, b: -10 }, legL: { a: 5, b: 0 }, legR: { a: -5, b: 0 }, expr: 'worried', blink: 0, look: -0.3, glasses: 0, yaw: -0.2, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        {/* Beanie with piercing red light */}
        <path d="M -70 -200 Q 0 -260 70 -200 Q 0 -175 -70 -200 Z" fill="#2E2B3D" stroke="#121019" strokeWidth={4} />
        <FloatingTimer x={0} y={-325} timeText="03D : 22H : 10M" kind="danger" scale={1.15} t={t} />
        <Glow x={0} y={-225} r={380} kind="red" o={0.45} />
      </g>
    </g>
  );
};

// ============================================================================
// S12: Desk Thin Ice - Pip staring at precarious documents
// ============================================================================
export const S12: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.25)}>
      <Study t={t + 60} id="ch2_s12" />
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 12, spin: 0, headTilt: 10, armL: { a: 50, b: -30 }, armR: { a: 50, b: -30 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="03D : 20H : 05M" kind="danger" scale={1.1} t={t} />
      </g>
      <TimerHud timeText="STEPPING ON THIN ICE" label="EVERY DECISION A POTENTIAL DISASTER" t={t} color="#FF334B" />
    </g>
  );
};

// ============================================================================
// S13: Close-up Keyboard - Pip's trembling finger over Enter key
// ============================================================================
export const S13: React.FC<ShotProps> = ({ t, len }) => {
  const tremble = Math.sin(t * 1.5) * 4;
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#111827" />
      {/* Keyboard body */}
      <g transform="translate(960 540)">
        <rect x={-420} y={-260} width={840} height={520} rx={24} fill="#1F2937" stroke="#374151" strokeWidth={6} />
        {/* Keys */}
        <rect x={-360} y={-200} width={120} height={90} rx={10} fill="#374151" />
        <rect x={-220} y={-200} width={120} height={90} rx={10} fill="#374151" />
        {/* Giant Enter Key */}
        <g transform="translate(140 -20)">
          <rect x={-140} y={-80} width={280} height={160} rx={14} fill="#DC2626" stroke="#991B1B" strokeWidth={5} />
          <text x={0} y={15} fill="#FEE2E2" fontSize={38} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
            ENTER // SEND
          </text>
        </g>
        {/* Pip's pointing hand reaching down to button (real stick mitten hand) */}
        <g transform={`translate(${140 + tremble} ${-110 + tremble})`}>
          <rect x={-5} y={15} width={10} height={24} rx={4} fill="#F6EFE3" stroke="#1D2033" strokeWidth={3.5} />
          <path d="M -11 -2 Q -14 14 -6 18 L 7 18 Q 14 14 11 -2 Z" fill="#F6EFE3" stroke="#1D2033" strokeWidth={4} strokeLinejoin="round" />
          <ellipse cx={10} cy={6} rx={4.5} ry={7} fill="#F6EFE3" stroke="#1D2033" strokeWidth={3.5} />
        </g>
      </g>
    </g>
  );
};

// ============================================================================
// S14: Breakroom Whispers - Coworkers backing away from Pip
// ============================================================================
export const S14: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.2)}>
      <Kitchen t={t + 40} id="ch2_s14" />
      {/* Pip standing alone at left */}
      <g transform="translate(680 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: -4, spin: 0, headTilt: -4, armL: { a: 15, b: -10 }, armR: { a: 15, b: -10 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'tired', blink: 0, look: 0.6, glasses: 0, yaw: 0.5, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="03D : 14H : 00M" kind="danger" scale={1.05} t={t} />
      </g>
      {/* Whispering colleagues on right backing up */}
      <g transform="translate(1320 710)">
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 1.05, facing: 1, tilt: 6, spin: 0, headTilt: 4, armL: { a: -15, b: -5 }, armR: { a: -15, b: -5 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: -0.8, glasses: 0, yaw: -0.7, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      <TimerHud timeText="PARANOIA AND ISOLATION" label="NOBODY FEELS SAFE AROUND YOU" t={t} color="#FF334B" />
    </g>
  );
};

// ============================================================================
// S15: Smartphone Chat - Mo texting polite cancellation excuse
// ============================================================================
export const S15: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.05)}>
      <rect width={1920} height={1080} fill="#0F172A" />
      <g transform="translate(960 540)">
        <rect x={-320} y={-380} width={640} height={760} rx={32} fill="#1E293B" stroke="#334155" strokeWidth={5} />
        {/* Header */}
        <text x={0} y={-310} fill="#F8FAFC" fontSize={26} fontWeight="800" textAnchor="middle" fontFamily={FONT.title}>
          MO (BEST FRIEND)
        </text>
        <line x1={-260} y1={-270} x2={260} y2={-270} stroke="#334155" strokeWidth={2} />

        {/* Pip's message */}
        <rect x={-80} y={-220} width={300} height={75} rx={16} fill="#3B82F6" />
        <text x={70} y={-175} fill="#FFFFFF" fontSize={16} fontWeight="600" textAnchor="middle" fontFamily={FONT.ui}>
          Hey bro, still grabbing pizza?
        </text>

        {/* Mo's polite cancellation excuse */}
        <rect x={-220} y={-100} width={380} height={95} rx={16} fill="#334155" />
        <text x={-30} y={-60} fill="#E2E8F0" fontSize={16} fontWeight="600" textAnchor="middle" fontFamily={FONT.ui}>
          Sorry man, gotta help my sister
        </text>
        <text x={-30} y={-35} fill="#94A3B8" fontSize={14} textAnchor="middle" fontFamily={FONT.ui}>
          Move some stuff tonight... raincheck?
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S16: Hero Wide - Pip standing completely isolated in the evening city
// ============================================================================
export const S16: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, kf(t, [[0, 1.05], [len, 1.15]]))}>
      <Rooftop t={t + 80} />
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: 0, spin: 0, headTilt: 4, armL: { a: 10, b: -5 }, armR: { a: -10, b: -5 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'tired', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="03D : 02H : 45M" kind="danger" scale={1.15} t={t} />
        <Glow x={0} y={-225} r={420} kind="red" o={0.4} />
      </g>
      <TimerHud timeText="COMPLETE OSTRACISM" label="THE TICKING CLOCK DRIVES EVERYONE AWAY" t={t} color="#FF334B" />
    </g>
  );
};
