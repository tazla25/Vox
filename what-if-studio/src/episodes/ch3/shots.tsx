import React from 'react';
import {
  LightVeil, DrawOn,
  Hero, Pose, poseAt, faceAt, kf, clamp, easeOut, rnd, camT, LOOKS,
  Study, Schematic, Rooftop, Bedroom,
  Foreground, TitleCard, Glow, ShotProps, FONT,
  FloatingTimer, TimerHud, ScienceDiagramWhiteBear, ScienceDiagramTargetFixation
} from '../../engine';

const PIP = LOOKS.pipHood;
const SCIENTIST = LOOKS.suit;

// ============================================================================
// S1: Study Laboratory Entry - Pip visits brain scientist for help
// ============================================================================
export const S1: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(kf(t, [[0, 880], [len, 960]]), 520, 1.15)}>
      <Study t={t} id="ch3_s1" />
      {/* Pip entering from left */}
      <g transform="translate(620 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.05, facing: 1, tilt: 6, spin: 0, headTilt: 4, armL: { a: 25, b: -15 }, armR: { a: -20, b: -10 }, legL: { a: 15, b: -5 }, legR: { a: -15, b: -5 }, expr: 'worried', blink: 0, look: 0.6, glasses: 0, yaw: 0.5, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="02D : 18H : 40M" kind="danger" scale={1.0} t={t} />
      </g>
      {/* Scientist welcoming at desk */}
      <g transform="translate(1260 700)">
        <Hero look={SCIENTIST} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: -4, spin: 0, headTilt: -2, armL: { a: -15, b: -5 }, armR: { a: 35, b: -20 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'neutral', blink: 0, look: -0.6, glasses: 1, yaw: -0.5, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
    </g>
  );
};

// ============================================================================
// S2: Desk Explanation - Scientist points to brain model and fear circuits
// ============================================================================
export const S2: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.25)}>
      <Study t={t + 30} id="ch3_s2" />
      <g transform="translate(740 710)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: 8, spin: 0, headTilt: 4, armL: { a: 45, b: -30 }, armR: { a: 45, b: -30 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: 0.7, glasses: 0, yaw: 0.6, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      <g transform="translate(1220 700)">
        <Hero look={SCIENTIST} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: -6, spin: 0, headTilt: 2, armL: { a: 25, b: -15 }, armR: { a: 65, b: -30 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'smug', blink: 0, look: -0.7, glasses: 1, yaw: -0.6, squash: 0, handL: 'open', handR: 'point', sway: 0 }} shadow={0} />
      </g>
      <TimerHud timeText="HOW HUMAN BRAINS HANDLE FEAR" label="COGNITIVE NEUROSCIENCE CONSULTATION" t={t} color="#38BDF8" />
    </g>
  );
};

// ============================================================================
// S3: Schematic - Harvard 1987 Daniel Wegner Research Card
// ============================================================================
export const S3: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <Schematic t={t} id="ch3_s3" />
      <g transform="translate(960 480)">
        <rect x={-420} y={-240} width={840} height={480} rx={20} fill="#0F172A" stroke="#38BDF8" strokeWidth={3} />
        <text x={0} y={-160} fill="#38BDF8" fontSize={18} fontWeight="800" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.ui}>
          HARVARD UNIVERSITY // DEPARTMENT OF PSYCHOLOGY
        </text>
        <text x={0} y={-90} fill="#F6EFE3" fontSize={38} fontWeight="900" letterSpacing="1px" textAnchor="middle" fontFamily={FONT.title}>
          DANIEL WEGNER (1987)
        </text>
        <line x1={-360} y1={-50} x2={360} y2={-50} stroke="#1E293B" strokeWidth={2} />
        <text x={0} y={0} fill="#94A3B8" fontSize={20} textAnchor="middle" fontFamily={FONT.ui}>
          "PARADOXICAL EFFECTS OF THOUGHT SUPPRESSION"
        </text>
        <rect x={-320} y={40} width={640} height={110} rx={14} fill="#1E293B" />
        <text x={0} y={85} fill="#FBBF24" fontSize={18} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          RULE: SUPPRESSION TRIGGERS AUTOMATIC HYPER-MONITORING
        </text>
        <text x={0} y={120} fill="#EF4444" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          RESULT: FORBIDDEN THOUGHTS INEVITABLY REBOUND
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S4: Science Diagram 1 - White Bear Ironic Process Theory
// ============================================================================
export const S4: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <ScienceDiagramWhiteBear t={t} />
    </g>
  );
};

// ============================================================================
// S5: Thought Bubble - The White Bear obsessively bouncing in Pip's mind
// ============================================================================
export const S5: React.FC<ShotProps> = ({ t, len }) => {
  const bearScale = 1 + 0.08 * Math.sin(t * 0.4);
  return (
    <g transform={camT(960, 520, 1.25)}>
      <Study t={t + 60} id="ch3_s5" />
      <g transform="translate(680 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 6, spin: 0, headTilt: 8, armL: { a: 80, b: -60 }, armR: { a: 80, b: -60 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0.6, glasses: 0, yaw: 0.4, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      {/* Giant thought bubble containing White Bear */}
      <g transform={`translate(1220 460) scale(${bearScale})`}>
        <ellipse cx={0} cy={0} rx={220} ry={160} fill="#1E293B" stroke="#60A5FA" strokeWidth={4} />
        {/* White Bear icon */}
        <path
          d="M -50 -15 Q -70 -50 -35 -50 Q -15 -35 -8 -25 Q 8 -25 15 -35 Q 50 -50 35 -15 Q 55 25 35 55 Q 0 75 -35 55 Z"
          fill="#F6EFE3"
        />
        <text x={0} y={105} fill="#EF4444" fontSize={22} fontWeight="900" letterSpacing="2px" textAnchor="middle" fontFamily={FONT.ui}>
          "WHITE BEAR SYNDROME"
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S6: Science Diagram 2 - Fighter Pilot Target Fixation HUD
// ============================================================================
export const S6: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <ScienceDiagramTargetFixation t={t} />
    </g>
  );
};

// ============================================================================
// S7: Cockpit Insert - Hands steering right into obstacle
// ============================================================================
export const S7: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.1)}>
      <rect width={1920} height={1080} fill="#090E17" />
      {/* Flight HUD crosshairs */}
      <line x1={960} y1={200} x2={960} y2={880} stroke="#38BDF8" strokeWidth={2} strokeDasharray="20 15" opacity={0.5} />
      <line x1={400} y1={540} x2={1520} y2={540} stroke="#38BDF8" strokeWidth={2} strokeDasharray="20 15" opacity={0.5} />
      {/* Target Box Locking On */}
      <g transform="translate(1180 460)">
        <rect x={-80} y={-80} width={160} height={160} fill="none" stroke="#EF4444" strokeWidth={4} />
        <line x1={-100} y1={0} x2={100} y2={0} stroke="#EF4444" strokeWidth={2} />
        <line x1={0} y1={-100} x2={0} y2={100} stroke="#EF4444" strokeWidth={2} />
        <text x={0} y={115} fill="#EF4444" fontSize={18} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
          COLLISION COURSE LOCKED
        </text>
      </g>
      <TimerHud timeText="INVOLUNTARY MOTOR STEERING" label="TARGET FIXATION PHENOMENON" t={t} color="#EF4444" />
    </g>
  );
};

// ============================================================================
// S8: Prefrontal Cortex Neural Stress Meter
// ============================================================================
export const S8: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <Schematic t={t + 40} id="ch3_s8" />
      <g transform="translate(960 480)">
        <rect x={-400} y={-240} width={800} height={480} rx={20} fill="#111827" stroke="#EF4444" strokeWidth={2.5} />
        <text x={0} y={-170} fill="#38BDF8" fontSize={18} fontWeight="800" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.ui}>
          NEUROIMAGING SCAN // PREFRONTAL CORTEX
        </text>
        <text x={0} y={-110} fill="#F87171" fontSize={36} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
          ANTICIPATORY COGNITIVE OVERLOAD
        </text>

        {/* Brain outline graphic */}
        <ellipse cx={0} cy={10} rx={180} ry={130} fill="#1F2937" stroke="#60A5FA" strokeWidth={3} />
        {/* Frontal lobe glowing bright red */}
        <ellipse cx={-80} cy={-20} rx={75} ry={65} fill="#EF4444" opacity={0.65 + 0.25 * Math.sin(t * 0.3)} filter="blur(6px)" />
        <text x={-80} y={-10} fill="#FFFFFF" fontSize={16} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          ERROR MONITOR
        </text>

        <rect x={-320} y={150} width={640} height={50} rx={10} fill="#1F1522" stroke="#EF4444" strokeWidth={1} />
        <text x={0} y={182} fill="#EF4444" fontSize={16} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          THE TIMER MEASURES BRAIN STRESS // NOT COSMIC FATE
        </text>
      </g>
    </g>
  );
};

// ============================================================================
// S9: Cortisol Hormone Spike +400%
// ============================================================================
export const S9: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <Schematic t={t + 80} id="ch3_s9" />
      <g transform="translate(960 480)">
        <rect x={-420} y={-240} width={840} height={480} rx={20} fill="#1A1118" stroke="#EF4444" strokeWidth={3} />
        <text x={0} y={-170} fill="#FCA5A5" fontSize={18} fontWeight="800" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.ui}>
          ENDOCRINE PROFILE // CHEMICAL PANIC
        </text>
        <text x={0} y={-110} fill="#EF4444" fontSize={46} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
          CORTISOL SURGE: +400%
        </text>
        {/* Surge curve */}
        <path d="M -320 80 Q -100 80 80 -40 T 320 -80" fill="none" stroke="#EF4444" strokeWidth={8} strokeLinecap="round" />
        <line x1={-320} y1={90} x2={320} y2={90} stroke="#374151" strokeWidth={2} />
        <text x={-280} y={120} fill="#9CA3AF" fontSize={14} fontFamily={FONT.ui}>BASELINE STRESS</text>
        <text x={240} y={120} fill="#EF4444" fontSize={16} fontWeight="800" fontFamily={FONT.ui}>COUNTDOWN PEAK</text>
      </g>
    </g>
  );
};

// ============================================================================
// S10: Laboratory Desk Macro - Pip's hand vibrating uncontrollably
// ============================================================================
export const S10: React.FC<ShotProps> = ({ t, len }) => {
  const shake = Math.sin(t * 1.8) * 6;
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Study t={t} id="ch3_s10" />
      {/* Pip standing at desk with trembling arms, shock expression, no floating ovals */}
      <Hero
        look={PIP}
        pose={{
          x: 960 + shake,
          y: 710,
          scale: 1.05,
          facing: 1,
          tilt: 6,
          spin: 0,
          headTilt: -6,
          armL: { a: 45 + shake * 2, b: 50 },
          armR: { a: 45 - shake * 2, b: 50 },
          legL: { a: 5, b: 0 },
          legR: { a: -5, b: 0 },
          expr: 'shock',
          blink: 0,
          look: 0.5,
          glasses: 0,
          yaw: 0.3,
          squash: 0,
          handL: 'open',
          handR: 'open',
          sway: shake,
        }}
        shadow={0.5}
      />
      <TimerHud timeText="MOTOR CONTROL DESTRUCTION" label="CORTISOL SHUTTING DOWN WORKING MEMORY" t={t} color="#FF334B" />
    </g>
  );
};

// ============================================================================
// S11: Wide Study - Scientist: Not an accident waiting in the stars
// ============================================================================
export const S11: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 520, 1.15)}>
      <Study t={t + 90} id="ch3_s11" />
      <g transform="translate(1080 700)">
        <Hero look={SCIENTIST} pose={{ x: 0, y: 0, scale: 1.15, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 45, b: -20 }, armR: { a: 45, b: -20 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'smug', blink: 0, look: -0.5, glasses: 1, yaw: -0.4, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
      </g>
      <TimerHud timeText="NOT DESTINY // PURE PSYCHOLOGY" label="THE MECHANISM REVEALED" t={t} color="#38BDF8" />
    </g>
  );
};

// ============================================================================
// S12: Close-up - Pip staring at glowing numbers causing the blunder
// ============================================================================
export const S12: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 500, 1.35)}>
      <Bedroom t={t + 120} id="ch3_s12" />
      <Hero look={PIP} pose={{ x: 960, y: 720, scale: 1.35, facing: 1, tilt: 0, spin: 0, headTilt: 2, armL: { a: 25, b: -15 }, armR: { a: 25, b: -15 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#FF334B' }} shadow={0} />
      <FloatingTimer x={960} y={340} timeText="02D : 11H : 04M" kind="danger" scale={1.25} t={t} />
      <Glow x={960} y={340} r={460} kind="red" o={0.4} />
    </g>
  );
};

// ============================================================================
// S13: Psychological Feedback Loop Diagram
// ============================================================================
export const S13: React.FC<ShotProps> = ({ t, len }) => {
  const rot = (t * 4) % 360;
  return (
    <g transform={camT(960, 540, 1.0)}>
      <Schematic t={t + 140} id="ch3_s13" />
      <g transform="translate(960 480)">
        <rect x={-420} y={-240} width={840} height={480} rx={22} fill="#140D17" stroke="#FF8A3D" strokeWidth={3} />
        <text x={0} y={-160} fill="#FF8A3D" fontSize={18} fontWeight="800" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.ui}>
          THE SELF-FULFILLING PROPHECY LOOP
        </text>

        {/* Rotating Circular arrows */}
        <g transform={`rotate(${rot})`}>
          <circle cx={0} cy={0} r={120} fill="none" stroke="#EF4444" strokeWidth={6} strokeDasharray="60 30" />
        </g>

        {/* 4 Loop nodes */}
        <text x={0} y={-110} fill="#E5E7EB" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>1. WATCH TIMER</text>
        <text x={180} y={10} fill="#EF4444" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>2. CORTISOL SURGE</text>
        <text x={0} y={130} fill="#F59E0B" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>3. MOTOR FREEZE</text>
        <text x={-180} y={10} fill="#EF4444" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>4. DISASTER</text>
      </g>
    </g>
  );
};

// ============================================================================
// S14: Extreme Close-Up - Pip's eyes widen with epiphany
// ============================================================================
export const S14: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <rect width={1920} height={1080} fill="#090C14" />
      <g transform="translate(960 600) scale(2.9)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 0, b: 0 }, armR: { a: 0, b: 0 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#38BDF8' }} shadow={0} />
      </g>
      <TimerHud timeText="THE TRAP IS YOUR OWN MIND" label="EPIPHANY // BREAKING THE CYCLE" t={t} color="#38BDF8" />
    </g>
  );
};

// ============================================================================
// S15: Low Angle Dusk Skyline - Pip outside looking up
// ============================================================================
export const S15: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Rooftop t={t + 60} />
      <g transform="translate(960 720)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1.1, facing: 1, tilt: -4, spin: 0, headTilt: -8, armL: { a: 15, b: -5 }, armR: { a: -15, b: -5 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'worried', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="02D : 04H : 18M" kind="danger" scale={1.1} t={t} />
      </g>
    </g>
  );
};

// ============================================================================
// S16: Hero Medium - Pip resolves to defeat target fixation
// ============================================================================
export const S16: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 500, 1.3)}>
      <Study t={t + 160} id="ch3_s16" />
      <Hero look={PIP} pose={{ x: 960, y: 720, scale: 1.3, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 45, b: -30 }, armR: { a: -45, b: -30 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'smug', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'point', handR: 'point', sway: 0 }} shadow={0} />
      <FloatingTimer x={960} y={350} timeText="TARGET FIXATION IDENTIFIED" kind="warning" scale={1.2} t={t} />
      <Glow x={960} y={350} r={460} kind="warm" o={0.4} />
    </g>
  );
};
