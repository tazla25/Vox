import React from 'react';
import {
  LightVeil, DrawOn,
  Hero, Pose, poseAt, faceAt, kf, clamp, easeOut, rnd, camT, LOOKS,
  Kitchen, KitchenIsland, KITCHEN, Classroom, Stairwell, Rooftop, Bedroom, BEDROOM, Schematic,
  Cookie, Plate, Foreground, TitleCard, Glow, ShotProps, FONT,
  FloatingTimer, TimerHud
} from '../../engine';

const PIP = LOOKS.pipHood;
const MO = LOOKS.mo;
const SUIT = LOOKS.suit;
const SIS = LOOKS.sis;

// ============================================================================
// S1: Wide Street / Rooftop Exterior - Pip walks outside, sees floating numbers
// ============================================================================
export const S1: React.FC<ShotProps> = ({ t, len }) => {
  const pipPose = poseAt(t, [
    { f: 0, p: { x: 580, y: 720, scale: 0.95, yaw: 0.5, look: 0.5, armL: { a: 15, b: -10 }, armR: { a: -12, b: -8 } } },
    { f: 45, p: { x: 740, y: 710, headTilt: -6, armL: { a: 35, b: -20 }, armR: { a: 45, b: -15 } }, ease: easeOut },
  ]);
  const pipFace = faceAt(t, [[0, 'neutral'], [30, 'shock']]);

  // Pedestrians walking in background
  const p1 = poseAt(t, [{ f: 0, p: { x: 1220, y: 680, scale: 0.82, yaw: -0.6, look: -0.4, armL: { a: 20, b: -15 }, armR: { a: -20, b: -10 } } }]);
  const p2 = poseAt(t, [{ f: 0, p: { x: 1480, y: 690, scale: 0.85, yaw: -0.4, look: -0.6, armL: { a: -10, b: -5 }, armR: { a: 25, b: -15 } } }]);

  return (
    <g transform={camT(kf(t, [[0, 960], [len, 1020]]), 540, kf(t, [[0, 1.0], [len, 1.08]]))}>
      <Rooftop t={t} />
      {/* Background pedestrians with safe timers */}
      <Hero look={SUIT} pose={{ ...p1, expr: 'neutral', blink: 0, look: -0.5, glasses: 0, yaw: -0.6, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, headTilt: 0, legL: { a: 15, b: -10 }, legR: { a: -15, b: -5 } }} shadow={0} />
      <FloatingTimer x={1220} y={490} timeText="18Y : 204D" kind="safe" scale={0.8} t={t} />

      <Hero look={SIS} pose={{ ...p2, expr: 'neutral', blink: 0, look: -0.3, glasses: 0, yaw: -0.4, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, headTilt: 0, legL: { a: -10, b: -5 }, legR: { a: 15, b: -15 } }} shadow={0} />
      <FloatingTimer x={1480} y={510} timeText="41Y : 090D" kind="safe" scale={0.75} t={t} />

      {/* Hero Pip */}
      <Hero look={PIP} pose={{ ...pipPose, ...pipFace }} shadow={0} />
      <Glow x={740} y={640} r={400} kind="warm" o={0.25} />
    </g>
  );
};

// ============================================================================
// S2: Medium Sidewalk View - Multitude of ticking numbers hovering over heads
// ============================================================================
export const S2: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(kf(t, [[0, 920], [len, 1000]]), 540, 1.15)}>
      <Rooftop t={t + 20}  />
      {/* A row of pedestrians with floating timers */}
      <g transform="translate(420 700) scale(0.9)">
        <Hero look={MO} pose={{ x: 0, y: 0, scale: 0.9, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 10, b: -5 }, armR: { a: -15, b: -10 }, legL: { a: 5, b: -5 }, legR: { a: -5, b: -5 }, expr: 'happy', blink: 0, look: 0.3, glasses: 0, yaw: 0.4, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="42Y : 08M" kind="safe" scale={0.9} t={t} />
      </g>
      <g transform="translate(940 710) scale(0.95)">
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 0.95, facing: 1, tilt: 0, spin: 0, headTilt: 2, armL: { a: -10, b: -5 }, armR: { a: 15, b: -10 }, legL: { a: -5, b: -5 }, legR: { a: 10, b: -5 }, expr: 'neutral', blink: 0, look: -0.2, glasses: 0, yaw: -0.3, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="04Y : 112D" kind="warning" scale={0.9} t={t} />
      </g>
      <g transform="translate(1460 700) scale(0.9)">
        <Hero look={SIS} pose={{ x: 0, y: 0, scale: 0.88, facing: 1, tilt: -2, spin: 0, headTilt: -3, armL: { a: 25, b: -15 }, armR: { a: -20, b: -10 }, legL: { a: 12, b: -8 }, legR: { a: -8, b: -5 }, expr: 'happy', blink: 0, look: -0.6, glasses: 0, yaw: -0.5, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="29Y : 310D" kind="safe" scale={0.85} t={t} />
      </g>
    </g>
  );
};

// ============================================================================
// S3: Close-up Barista - Pouring iced coffee with a calm green 32Y display
// ============================================================================
export const S3: React.FC<ShotProps> = ({ t, len }) => {
  const barista = poseAt(t, [
    { f: 0, p: { x: 960, y: 680, scale: 1.35, yaw: 0.2, look: 0.5, armL: { a: 45, b: -30 }, armR: { a: 55, b: -45 } } },
    { f: 30, p: { armR: { a: 65, b: -50 } }, ease: easeOut },
  ]);
  return (
    <g transform={camT(960, 500, kf(t, [[0, 1.35], [len, 1.42]]))}>
      <Kitchen t={t} id="ch1_s3" />
      <Hero look={MO} pose={{ ...barista, expr: 'happy', blink: 0, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, headTilt: 4, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 } }} shadow={0} />
      {/* Floating green timer */}
      <FloatingTimer x={960} y={340} timeText="32Y : 142D" kind="safe" scale={1.2} t={t} />
      <KitchenIsland />
      {/* Coffee Pitcher */}
      <path d="M 920 620 L 935 690 L 980 690 L 995 620 Z" fill="#3D271D" stroke="#1F1510" strokeWidth={3} />
      <Glow x={960} y={340} r={320} kind="cool" o={0.3} />
    </g>
  );
};

// ============================================================================
// S4: Medium Dog Walker - Nervous with a flashing red 12-second countdown
// ============================================================================
export const S4: React.FC<ShotProps> = ({ t, len }) => {
  const sec = Math.max(0, 12 - Math.floor(t / 8));
  const walker = poseAt(t, [
    { f: 0, p: { x: 920, y: 710, scale: 1.1, yaw: -0.4, look: -0.6, armL: { a: -15, b: -10 }, armR: { a: 65, b: -20 }, headTilt: -4 } },
    { f: 20, p: { armR: { a: 75, b: -35 }, headTilt: -8 } },
  ]);
  return (
    <g transform={camT(kf(t, [[0, 920], [len, 960]]), 520, 1.2)}>
      <Stairwell t={t} id="ch1_s4" />
      <Hero look={SUIT} pose={{ ...walker, expr: 'worried', blink: 0, glasses: 0, squash: 0, handL: 'open', handR: 'point', sway: 0, facing: 1, tilt: 4, spin: 0, legL: { a: 10, b: -5 }, legR: { a: -10, b: -5 } }} shadow={0} />
      <FloatingTimer x={920} y={430} timeText={`00D : 00H : ${sec < 10 ? '0' + sec : sec}S`} kind="danger" scale={1.15} t={t} pulse={true} />
      {/* Taut leash extending left */}
      <path d={`M 990 630 Q 820 690 680 760`} fill="none" stroke="#D9534F" strokeWidth={5} strokeDasharray="10 5" />
    </g>
  );
};

// ============================================================================
// S5: Low Angle Action - Dog spots squirrel, yanks leash taut
// ============================================================================
export const S5: React.FC<ShotProps> = ({ t, len }) => {
  const dogX = kf(t, [[0, 600], [len, 380]]);
  return (
    <g transform={camT(700, 640, 1.35)}>
      <Stairwell t={t + 40} id="ch1_s5" />
      {/* Dog silhouette lunging */}
      <g transform={`translate(${dogX} 760)`}>
        {/* Dog body */}
        <ellipse cx={0} cy={0} rx={55} ry={32} fill="#8D5B4C" stroke="#42251D" strokeWidth={4} />
        {/* Head and ears */}
        <circle cx={-50} cy={-22} r={24} fill="#8D5B4C" stroke="#42251D" strokeWidth={4} />
        <polygon points="-58,-40 -48,-24 -65,-20" fill="#42251D" />
        {/* Tail sticking up */}
        <path d="M 45 -10 Q 75 -40 70 -60" fill="none" stroke="#8D5B4C" strokeWidth={8} strokeLinecap="round" />
        {/* Collar and leash */}
        <circle cx={-32} cy={-12} r={16} fill="none" stroke="#EF4444" strokeWidth={6} />
        <line x1={-32} y1={-12} x2={520} y2={-100} stroke="#EF4444" strokeWidth={4} />
      </g>
      {/* Fast motion speedlines */}
      <line x1={200} y1={720} x2={400} y2={720} stroke="#FBBF24" strokeWidth={3} opacity={0.6} strokeDasharray="20 15" />
    </g>
  );
};

// ============================================================================
// S6: Action Impact - Walker trips, coffee cups fly against windshield
// ============================================================================
export const S6: React.FC<ShotProps> = ({ t, len }) => {
  const cupY = kf(t, [[0, 520], [len, 720]]);
  const cupRot = kf(t, [[0, 0], [len, 280]]);
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Stairwell t={t + 80} id="ch1_s6" />
      {/* Tripping walker tumbling */}
      <g transform={`translate(740 780) rotate(${kf(t, [[0, 15], [len, 65]])})`}>
        <Hero look={SUIT} pose={{ x: 0, y: 0, scale: 1.0, facing: 1, tilt: 25, spin: 0, headTilt: 15, armL: { a: 85, b: -20 }, armR: { a: -45, b: -30 }, legL: { a: 45, b: -25 }, legR: { a: -35, b: -10 }, expr: 'shock', blink: 0, look: 0.8, glasses: 0, yaw: 0.6, squash: 0, handL: 'open', handR: 'open', sway: 0 }} shadow={0} />
        <FloatingTimer x={0} y={-325} timeText="00:00:00" kind="danger" scale={1.1} t={t} />
      </g>
      {/* 3 Flying coffee cups */}
      <g transform={`translate(1180 ${cupY}) rotate(${cupRot})`}>
        <path d="M -20 -30 L 20 -30 L 14 30 L -14 30 Z" fill="#E5E7EB" stroke="#1F2937" strokeWidth={3} />
        <path d="M -15 -10 Q 0 40 35 25" fill="#5A3825" opacity={0.8} />
      </g>
      <g transform={`translate(1340 ${cupY - 40}) rotate(${cupRot * 1.2})`}>
        <path d="M -20 -30 L 20 -30 L 14 30 L -14 30 Z" fill="#E5E7EB" stroke="#1F2937" strokeWidth={3} />
      </g>
    </g>
  );
};

// ============================================================================
// S7: Fast Dash - Pip sprints back up the stairwell in terror
// ============================================================================
export const S7: React.FC<ShotProps> = ({ t, len }) => {
  const pipRun = poseAt(t, [
    { f: 0, p: { x: 500, y: 780, scale: 0.95, yaw: 0.7, tilt: 18, armL: { a: 65, b: -30 }, armR: { a: -45, b: -25 }, legL: { a: -35, b: 20 }, legR: { a: 45, b: -25 } } },
    { f: 20, p: { x: 920, y: 620, tilt: 22, armL: { a: -40, b: -20 }, armR: { a: 70, b: -35 }, legL: { a: 45, b: -20 }, legR: { a: -30, b: 15 } } },
    { f: 40, p: { x: 1380, y: 460, tilt: 20, armL: { a: 60, b: -25 }, armR: { a: -35, b: -20 } } },
  ]);
  return (
    <g transform={camT(kf(t, [[0, 700], [len, 1100]]), 580, 1.15)}>
      <Stairwell t={t} id="ch1_s7" />
      <Hero look={PIP} pose={{ ...pipRun, expr: 'shock', blink: 0, look: 0.9, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, spin: 0, headTilt: 6 }} shadow={0} />
      <Glow x={pipRun.x} y={pipRun.y - 120} r={280} kind="red" o={0.35} />
    </g>
  );
};

// ============================================================================
// S8: Bedroom / Bathroom Entry - Pip stares into the mirror with dread
// ============================================================================
export const S8: React.FC<ShotProps> = ({ t, len }) => {
  const pipMirror = poseAt(t, [
    { f: 0, p: { x: 960, y: 720, scale: 1.25, yaw: 0.1, look: 0, armL: { a: 25, b: -15 }, armR: { a: 25, b: -15 }, headTilt: 0 } },
    { f: 20, p: { armL: { a: 55, b: -35 }, armR: { a: 55, b: -35 }, headTilt: 4 }, ease: easeOut },
  ]);
  return (
    <g transform={camT(960, 520, kf(t, [[0, 1.2], [len, 1.3]]))}>
      <Bedroom t={t} id="ch1_s8" />
      {/* Bathroom Mirror Frame */}
      <rect x={720} y={260} width={480} height={420} rx={18} fill="#141E2E" stroke="#E2D3BE" strokeWidth={12} />
      <Hero look={PIP} pose={{ ...pipMirror, expr: 'shock', blink: 0, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 } }} shadow={0} />
      <Glow x={960} y={420} r={360} kind="red" o={0.4} />
    </g>
  );
};

// ============================================================================
// S9: Macro Mirror Close-up - Pip's forehead timer glowing crimson 06D:14H:20M
// ============================================================================
export const S9: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <rect width={1920} height={1080} fill="#0A0C14" />
      {/* Pip's wide eyes and brow reflected in mirror */}
      <g transform="translate(960 620) scale(2.8)">
        <Hero look={PIP} pose={{ x: 0, y: 0, scale: 1, facing: 1, tilt: 0, spin: 0, headTilt: 0, armL: { a: 0, b: 0 }, armR: { a: 0, b: 0 }, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, expr: 'shock', blink: 0, look: 0, glasses: 0, yaw: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, glint: 1, glintColor: '#FF334B' }} shadow={0} />
      </g>
      {/* Glowing crimson timer HUD */}
      <TimerHud timeText="06D : 14H : 20M" label="PIPS COUNTDOWN // DANGER IMMINENT" t={t} color="#FF334B" />
      <Glow x={960} y={540} r={650} kind="red" o={0.3} />
    </g>
  );
};

// ============================================================================
// S10: Wide Dusk Bedroom - Pip clutching his head in existential dread
// ============================================================================
export const S10: React.FC<ShotProps> = ({ t, len }) => {
  const pipClutch = poseAt(t, [
    { f: 0, p: { x: 960, y: 730, scale: 1.05, yaw: 0, tilt: 8, headTilt: 6, armL: { a: 80, b: -60 }, armR: { a: 80, b: -60 } } },
    { f: 30, p: { tilt: 14, headTilt: 10, armL: { a: 88, b: -70 }, armR: { a: 88, b: -70 } } },
  ]);
  return (
    <g transform={camT(960, 560, kf(t, [[0, 1.05], [len, 1.12]]))}>
      <Bedroom t={t + 40} id="ch1_s10" />
      <Hero look={PIP} pose={{ ...pipClutch, expr: 'worried', blink: 0, look: 0, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, spin: 0, legL: { a: -5, b: 0 }, legR: { a: 5, b: 0 } }} shadow={0} />
      <FloatingTimer x={960} y={480} timeText="06D : 14H : 19M" kind="danger" scale={1.1} t={t} />
      <LightVeil id="ch1_s10_veil" lights={[[960, 480, 550]]} o={0.4} />
    </g>
  );
};

// ============================================================================
// S11: Dramatic Concept Reveal - Schematic: COUNTDOWN TO BIGGEST MISTAKE
// ============================================================================
export const S11: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.0)}>
      <Schematic t={t} id="ch1_s11" />
      {/* Big Title Alert Card */}
      <g transform="translate(960 420)">
        <rect x={-480} y={-100} width={960} height={200} rx={22} fill="#160E18" fillOpacity={0.92} stroke="#FF334B" strokeWidth={3} />
        <text x={0} y={-35} fill="#FF8A3D" fontSize={20} fontWeight="800" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.ui}>
          NOT DEATH // NOT FATE
        </text>
        <text x={0} y={35} fill="#F6EFE3" fontSize={52} fontWeight="900" letterSpacing="2px" textAnchor="middle" fontFamily={FONT.title}>
          YOUR BIGGEST MISTAKE
        </text>
        {/* Pulsing red border lines */}
        <line x1={-420} y1={-80} x2={420} y2={-80} stroke="#EF4444" strokeWidth={1.5} strokeDasharray="14 10" />
      </g>
      <TimerHud timeText="TICKING TO DISASTER" label="GLOBAL SYSTEM RULE" t={t} color="#FF8A3D" />
    </g>
  );
};

// ============================================================================
// S12: Close-up Pip - Trembling hands, realization of what red glow means
// ============================================================================
export const S12: React.FC<ShotProps> = ({ t, len }) => {
  const pipTremble = poseAt(t, [
    { f: 0, p: { x: 960, y: 700, scale: 1.45, yaw: 0.1, headTilt: -4, armL: { a: 45, b: -40 }, armR: { a: 45, b: -40 } } },
    { f: 15, p: { headTilt: 4, armL: { a: 48, b: -38 }, armR: { a: 42, b: -42 } } },
    { f: 30, p: { headTilt: -2, armL: { a: 44, b: -42 }, armR: { a: 48, b: -38 } } },
  ]);
  return (
    <g transform={camT(960, 480, 1.4)}>
      <Bedroom t={t + 60} id="ch1_s12" />
      <Hero look={PIP} pose={{ ...pipTremble, expr: 'shock', blink: 0, look: -0.2, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 } }} shadow={0} />
      <FloatingTimer x={960} y={320} timeText="06D : 14H : 18M" kind="danger" scale={1.25} t={t} />
      <Glow x={960} y={320} r={480} kind="red" o={0.35} />
    </g>
  );
};

// ============================================================================
// S13: Medium Shot - Pip tries to pull beanie down, red light shines through
// ============================================================================
export const S13: React.FC<ShotProps> = ({ t, len }) => {
  const pipHat = poseAt(t, [
    { f: 0, p: { x: 960, y: 720, scale: 1.15, yaw: 0, armL: { a: 70, b: -50 }, armR: { a: 70, b: -50 } } },
    { f: 20, p: { armL: { a: 80, b: -65 }, armR: { a: 80, b: -65 }, headTilt: -4 } },
  ]);
  return (
    <g transform={camT(960, 540, 1.15)}>
      <Bedroom t={t + 90} id="ch1_s13" />
      <Hero look={PIP} pose={{ ...pipHat, expr: 'worried', blink: 0, look: 0, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, headTilt: -2, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 } }} shadow={0} />
      {/* Heavy beanie pulled over head with red glow radiating through */}
      <path d="M 890 510 Q 960 450 1030 510 Q 960 535 890 510 Z" fill="#2E2B3D" stroke="#121019" strokeWidth={4} />
      {/* Red light bursting through the knit fabric */}
      <FloatingTimer x={960} y={485} timeText="CANNOT BE HIDDEN" kind="danger" scale={1.1} t={t} />
      <Glow x={960} y={490} r={350} kind="red" o={0.5} />
    </g>
  );
};

// ============================================================================
// S14: Top-Down Bathroom Sink Insert - Gripping ceramic rim, water running
// ============================================================================
export const S14: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, 1.1)}>
      <Bedroom t={t} id="ch1_s14" />
      {/* Pip leaning over the counter in shock, no abstract floating ovals */}
      <Hero
        look={PIP}
        pose={{
          x: 960,
          y: 720,
          scale: 1.15,
          facing: 1,
          tilt: 8,
          spin: 0,
          headTilt: -4,
          armL: { a: 55, b: 35 },
          armR: { a: -35, b: 40 },
          legL: { a: 8, b: 0 },
          legR: { a: -8, b: 0 },
          expr: 'shock',
          blink: 0,
          look: -0.6,
          glasses: 0,
          yaw: -0.4,
          squash: 0,
          handL: 'open',
          handR: 'open',
          sway: 0,
        }}
        shadow={0.6}
      />
      {/* Red countdown timer locked overhead */}
      <FloatingTimer x={960} y={350} timeText="06D : 14H : 12M" kind="danger" scale={1.2} t={t} />
      <Glow x={960} y={480} r={180} kind="red" o={0.4} />
    </g>
  );
};

// ============================================================================
// S15: Wide Cityscape - Dusk skyline with hundreds of ticking timer dots
// ============================================================================
export const S15: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(kf(t, [[0, 960], [len, 980]]), 540, kf(t, [[0, 1.0], [len, 1.05]]))}>
      <Rooftop t={t + 120}  />
      {/* Glowing timer dots across distant skyline windows */}
      <g>
        {[
          [340, 620, 'safe'], [480, 580, 'safe'], [620, 640, 'warning'], [820, 600, 'safe'],
          [1100, 590, 'danger'], [1280, 630, 'safe'], [1420, 570, 'warning'], [1580, 610, 'safe'],
          [740, 720, 'danger'], [1040, 710, 'safe']
        ].map(([cx, cy, k], i) => (
          <circle
            key={i}
            cx={Number(cx)}
            cy={Number(cy)}
            r={5}
            fill={k === 'safe' ? '#34D399' : k === 'warning' ? '#FBBF24' : '#FF334B'}
            opacity={0.7 + 0.3 * Math.sin(t * 0.3 + i)}
          />
        ))}
      </g>
      <TimerHud timeText="GLOBAL ANXIETY EPIDEMIC" label="SOCIETY WATCHING ZERO APPROACH" t={t} color="#FF8A3D" />
    </g>
  );
};

// ============================================================================
// S16: Hero Close-Up - Pip stares directly into camera as timer ticks down
// ============================================================================
export const S16: React.FC<ShotProps> = ({ t, len }) => {
  const pipHero = poseAt(t, [
    { f: 0, p: { x: 960, y: 720, scale: 1.4, yaw: 0, headTilt: 0, armL: { a: 15, b: -10 }, armR: { a: -15, b: -10 } } },
    { f: 40, p: { scale: 1.48, headTilt: 2 } },
  ]);
  return (
    <g transform={camT(960, 500, kf(t, [[0, 1.35], [len, 1.45]]))}>
      <Bedroom t={t + 160} id="ch1_s16" />
      <Hero look={PIP} pose={{ ...pipHero, expr: 'shock', blink: 0, look: 0, glasses: 0, squash: 0, handL: 'open', handR: 'open', sway: 0, facing: 1, tilt: 0, spin: 0, legL: { a: 0, b: 0 }, legR: { a: 0, b: 0 }, glint: 1, glintColor: '#FF334B' }} shadow={0} />
      <FloatingTimer x={960} y={320} timeText="06D : 14H : 00M" kind="danger" scale={1.3} t={t} />
      <Glow x={960} y={320} r={520} kind="red" o={0.4} />
    </g>
  );
};
