import React from 'react';
import {
  LightVeil, DrawOn,
  Hero, Pose, basePose, poseAt, faceAt, kf, clamp, easeOut, rnd, camT, LOOKS, LEG_LEN, joints, toWorld, reachAngle,
  Kitchen, KitchenIsland, KITCHEN, islandTop, stand, Tabletop, Classroom, Stairwell, hipGround, Rooftop, Schematic, SCH, SchLabel, CountUp, PlantIcon,
  Cookie, CookieTop, Plate, PlateTop, Paper, PaperBall, Foreground, TitleCard, Glow, ShotProps, FONT,
} from '../../engine';

// "What if you could pause everyone but you?"
// Sixteen shots across kitchen, classroom, stairwell, rooftop, and the power grid schematic.
// Pip (LOOKS.pipHood) and Mo (LOOKS.mo). All motion derived purely from shot clock t.

const PIP = LOOKS.pipHood;
const MO = LOOKS.mo;
const CYAN = '#7FD4FF';

// ---------- S1: Medium, Kitchen: Mo reaches for the cookie on the island ----------
const S1_PIP = stand(KITCHEN, 0.38, 0.4);
const S1_MO = stand(KITCHEN, 0.66, 0.4);
const S1_COOKIE = islandTop(0.52, 0.45);

export const S1: React.FC<ShotProps> = ({ t, len }) => {
  const pipPose = poseAt(t, [
    { f: 0, p: { x: S1_PIP.x, y: S1_PIP.y, scale: S1_PIP.scale, yaw: 0.4, look: 0.6, armL: { a: 10, b: -6 }, armR: { a: 12, b: -8 } } },
  ]);
  const moPose = poseAt(t, [
    { f: 0, p: { x: S1_MO.x, y: S1_MO.y, scale: S1_MO.scale, yaw: -0.55, look: -0.7, armL: { a: 20, b: -10 }, armR: { a: 15, b: -5 } } },
    { f: 14, p: { armL: { a: 68, b: -8 }, headTilt: -4 }, ease: easeOut },
  ]);
  const pipFace = faceAt(t, [[0, 'neutral']]);
  const moFace = faceAt(t, [[0, 'happy'], [12, 'smug']]);

  return (
    <g transform={camT(kf(t, [[0, 960], [len, 980]]), 580, kf(t, [[0, 1.8], [len, 1.9]]))}>
      <Kitchen t={t + 30} id="k1" />
      <Hero look={PIP} pose={{ ...pipPose, ...pipFace }} rimId="rimR" shadow={0} />
      <Hero look={MO} pose={{ ...moPose, ...moFace }} rimId="rimL" shadow={0} />
      <KitchenIsland />
      <Plate x={S1_COOKIE.x} y={S1_COOKIE.y} s={0.7} />
      <Cookie x={S1_COOKIE.x - 3} y={S1_COOKIE.y - 7} s={0.85} />
      <Foreground blur={10}>
        <path d="M 1320 1000 Q 1380 760 1480 710 Q 1440 830 1460 1000 Z" fill="#0E1610" />
      </Foreground>
    </g>
  );
};

// ---------- S2: Macro insert, Kitchen island top: Mo's hand freezes mid-air ----------
export const S2: React.FC<ShotProps> = ({ t, len }) => {
  const plateX = 920;
  const plateY = 490;
  const handX = 1130;
  const handY = 440;

  return (
    <g transform={camT(960, kf(t, [[0, 500], [len, 520]]), kf(t, [[0, 1.05], [len, 1.1]]))}>
      <Tabletop edge={910} wood="#A89C8A" grain="#968A78" lip="#8E8474" kind="stone" floor="#2C2A30" floorLines="#232127" />
      <LightVeil id="s2veil" lights={[[plateX, plateY - 50, 700]]} o={0.5} />
      <Glow x={plateX} y={plateY - 60} r={620} o={0.35} />

      {/* Plate and cookie */}
      <PlateTop x={plateX} y={plateY} r={240} />
      <CookieTop x={plateX} y={plateY} r={85} />

      {/* Mo's frozen arm entering from the right */}
      <g>
        {/* Shadow */}
        <ellipse cx={handX + 15} cy={handY + 70} rx={90} ry={25} fill="#000" opacity={0.35} />
        {/* Sleeve */}
        <path d={`M 1500 ${handY - 40} L ${handX + 80} ${handY - 24} L ${handX + 75} ${handY + 54} L 1500 ${handY + 85} Z`} fill="#4E683E" stroke="#334727" strokeWidth={5} />
        {/* Mitten hand frozen stiff */}
        <ellipse cx={handX + 30} cy={handY + 16} rx={55} ry={42} fill="#F3E5C8" stroke="#334727" strokeWidth={5} />
        <ellipse cx={handX} cy={handY + 4} rx={22} ry={16} fill="#F3E5C8" stroke="#334727" strokeWidth={5} />

        {/* Cyan freeze rings pulsing/frozen */}
        <circle cx={handX + 15} cy={handY + 14} r={95} fill="none" stroke={CYAN} strokeWidth={4} strokeDasharray="14 10" opacity={0.85} />
        <circle cx={handX + 15} cy={handY + 14} r={120} fill="none" stroke={CYAN} strokeWidth={2} strokeDasharray="8 12" opacity={0.5} />
      </g>
    </g>
  );
};

// ---------- S3: Close-up, Kitchen: Pip slides the cookie away with smug grin ----------
export const S3: React.FC<ShotProps> = ({ t, len }) => {
  const pip = stand(KITCHEN, 0.42, 0.38);
  const pose = poseAt(t, [
    { f: 0, p: { x: pip.x, y: pip.y, scale: pip.scale, yaw: 0.4, look: 0.7, armR: { a: 45, b: -25 } } },
    { f: 8, p: { armR: { a: 60, b: -35 }, headTilt: 4 }, ease: easeOut },
  ]);
  const face = faceAt(t, [[0, 'neutral'], [6, 'smug']]);

  return (
    <g transform={camT(kf(t, [[0, pip.x - 30], [len, pip.x - 20]]), pip.y - 180, kf(t, [[0, 2.7], [len, 2.8]]))}>
      <Kitchen t={t + 60} id="k3" />
      <Hero look={PIP} pose={{ ...pose, ...face }} rimId="rimR" shadow={0} />

      {/* Pip holding the cookie up toward camera */}
      <g transform={`translate(${pip.x + 95} ${pip.y - 120}) scale(0.9)`}>
        <Cookie x={0} y={0} s={0.8} bite={t >= 14 ? 1 : 0} />
      </g>
    </g>
  );
};

// ---------- S4: Wide, Classroom: Teacher announces pop quiz ----------
export const S4: React.FC<ShotProps> = ({ t, len }) => {
  const pip = { x: 1240, y: 760, scale: 0.95 };
  const pose = poseAt(t, [
    { f: 0, p: { x: pip.x, y: pip.y, scale: pip.scale, yaw: -0.35, look: -0.6, armL: { a: 15, b: -5 }, armR: { a: 25, b: -10 } } },
    { f: 12, p: { headTilt: -5, armL: { a: 30, b: -15 } }, ease: easeOut },
  ]);
  const face = faceAt(t, [[0, 'neutral'], [8, 'shock']]);

  return (
    <g transform={camT(kf(t, [[0, 960], [len, 980]]), 540, kf(t, [[0, 1.05], [len, 1.1]]))}>
      <Classroom t={t + 40} id="c4" solved={false} wrong={false} />
      <Hero look={PIP} pose={{ ...pose, ...face }} rimId="rimL" shadow={0} />
      {/* Chalk on board */}
      <text x={740} y={320} textAnchor="middle" fontFamily={FONT.hand} fontSize={60} fill="#FFF" opacity={0.85}>
        POP QUIZ!
      </text>
    </g>
  );
};

// ---------- S5: Over the shoulder, Classroom: PAUSE freezes the room solid ----------
export const S5: React.FC<ShotProps> = ({ t, len }) => {
  const mo = { x: 980, y: 690, scale: 0.9 };
  const moPose: Pose = { ...basePose, x: mo.x, y: mo.y, scale: mo.scale, yaw: -0.5, look: -0.4, armL: { a: 45, b: -15 }, armR: { a: 30, b: -20 }, expr: 'shock', blink: 0 };

  return (
    <g transform={camT(kf(t, [[0, 940], [len, 950]]), 580, kf(t, [[0, 1.85], [len, 1.95]]))}>
      <Classroom t={t + 80} id="c5" />
      <Hero look={MO} pose={moPose} rimId="rimBlue" shadow={0} />

      {/* Paper ball frozen mid-air */}
      <g transform="translate(820 460)">
        <ellipse cx={0} cy={160} rx={24} ry={8} fill="#000" opacity={0.3} />
        <PaperBall x={0} y={0} r={32} rot={25} />
        <circle cx={0} cy={0} r={55} fill="none" stroke={CYAN} strokeWidth={3} strokeDasharray="10 8" opacity={0.8} />
      </g>

      {/* Foreground: Pip's dark blurred shoulder & hood framing left */}
      <Foreground blur={12}>
        <path d="M -100 1080 L -100 500 Q 150 480 320 620 Q 420 720 460 1080 Z" fill="#121820" />
        <circle cx={180} cy={420} r={170} fill="#18202A" />
      </Foreground>
    </g>
  );
};

// ---------- S6: Insert, Top-down desk: Test paper marked A+ with gold star ----------
export const S6: React.FC<ShotProps> = ({ t, len }) => {
  const handSlide = kf(t, [[0, 150], [12, 0]], easeOut);

  return (
    <g transform={camT(960, 540, kf(t, [[0, 1.0], [len, 1.05]]))}>
      <Tabletop edge={950} wood="#B48250" grain="#9E6E3C" lip="#8C5C2C" kind="wood" floor="#322E38" floorLines="#26232C" />
      <LightVeil id="s6veil" lights={[[960, 520, 750]]} o={0.4} />

      {/* Test paper on desk with A+ */}
      <Paper x={960} y={510} w={380} rot={-2} done grade="A+" fill={1} />

      {/* Pip's sleeve and hand sliding in from top-right */}
      <g transform={`translate(${handSlide} 0)`}>
        <ellipse cx={1230} cy={280} rx={60} ry={20} fill="#000" opacity={0.3} />
        <path d="M 1480 0 L 1260 210 L 1210 260 L 1480 180 Z" fill="#1C242E" stroke="#121820" strokeWidth={5} />
        <ellipse cx={1210} cy={260} rx={45} ry={35} fill="#F3E5C8" stroke="#121820" strokeWidth={5} />
      </g>
    </g>
  );
};

// ---------- S7: Medium, Stairwell: Mo talking mid-step on stairs ----------
export const S7: React.FC<ShotProps> = ({ t, len }) => {
  const moX = 720;
  const moY = hipGround(moX);
  const pipX = 400;
  const pipY = 420;

  const moPose = poseAt(t, [
    { f: 0, p: { x: moX, y: moY, scale: 0.9, yaw: 0.8, look: 0.5, armL: { a: 25, b: -10 }, armR: { a: 55, b: -20 }, legL: { a: 30, b: -15 }, legR: { a: -20, b: 20 } } },
  ]);
  const pipPose = poseAt(t, [
    { f: 0, p: { x: pipX, y: pipY, scale: 0.9, yaw: 0.6, look: 0.8, armR: { a: 30, b: -10 } } },
  ]);
  const moFace = faceAt(t, [[0, 'happy']]);
  const pipFace = faceAt(t, [[0, 'neutral']]);

  return (
    <g transform={camT(kf(t, [[0, 780], [len, 800]]), 540, kf(t, [[0, 1.45], [len, 1.5]]))}>
      <Stairwell t={t + 40} id="sw7" />
      <Hero look={PIP} pose={{ ...pipPose, ...pipFace }} rimId="rimR" shadow={0} />
      <Hero look={MO} pose={{ ...moPose, ...moFace }} rimId="rimL" shadow={0} />
    </g>
  );
};

// ---------- S8: Extreme close-up on Mo's face: Frozen, unblinking, eerie ----------
export const S8: React.FC<ShotProps> = ({ t, len }) => {
  const moX = 960;
  const moY = 820;
  // Motionless, completely fixed eyes
  const moPose: Pose = { ...basePose, x: moX, y: moY, scale: 1.0, yaw: 0.45, look: 0.4, expr: 'neutral', blink: 0 };

  return (
    <g transform={camT(960, 480, kf(t, [[0, 3.6], [len, 3.8]]))}>
      {/* Background soft stairs */}
      <Stairwell t={t + 80} id="sw8" />
      <LightVeil id="s8veil" lights={[[960, 480, 500]]} o={0.45} />
      <Hero look={MO} pose={moPose} rimId="rimBlue" shadow={0} />

      {/* Subtle cyan temporal distortion ring around head */}
      <circle cx={960} cy={480} r={280} fill="none" stroke={CYAN} strokeWidth={2} strokeDasharray="8 14" opacity={0.6} />
    </g>
  );
};

// ---------- S9: Low angle, Medium: Pip steps back, worried at the stillness ----------
export const S9: React.FC<ShotProps> = ({ t, len }) => {
  const pipX = 880;
  const pipY = 560;
  const pose = poseAt(t, [
    { f: 0, p: { x: pipX, y: pipY, scale: 1.0, yaw: 0.5, look: 0.4, armL: { a: 15, b: -10 }, armR: { a: 25, b: -20 } } },
    { f: 10, p: { x: pipX - 25, headTilt: -6, armL: { a: 35, b: -20 }, armR: { a: 40, b: -30 } }, ease: easeOut },
  ]);
  const face = faceAt(t, [[0, 'shock'], [8, 'worried']]);

  return (
    <g transform={camT(kf(t, [[0, 860], [len, 850]]), 500, kf(t, [[0, 1.75], [len, 1.85]]))}>
      <Stairwell t={t + 100} id="sw9" />
      <Hero look={PIP} pose={{ ...pose, ...face }} rimId="rimR" shadow={0} />
    </g>
  );
};

// ---------- S10: Title, Wide rooftop: Sunset skyline and Title Card ----------
export const S10: React.FC<ShotProps> = ({ t, len }) => {
  const pipPose: Pose = { ...basePose, x: 880, y: 780, scale: 0.85, yaw: 0.4, look: 0.6, armL: { a: 12, b: -6 }, armR: { a: 15, b: -8 }, expr: 'neutral' };

  return (
    <g transform={camT(960, 540, kf(t, [[0, 1.0], [len, 1.06]]))}>
      <Rooftop t={t + 50} />
      {/* Pip standing mid-ground near parapet */}
      <Hero look={PIP} pose={pipPose} rimId="rimR" shadow={0} />

      {/* Premise Title Card */}
      <TitleCard t={t} lines={['WHAT IF YOU COULD', 'PAUSE EVERYONE BUT YOU?']} accent="EVERYONE" accentT={t - 8} />
    </g>
  );
};

// ---------- S11: Medium, Rooftop: Pip smiling against the frozen skyline ----------
export const S11: React.FC<ShotProps> = ({ t, len }) => {
  const pose = poseAt(t, [
    { f: 0, p: { x: 960, y: 720, scale: 1.0, yaw: 0.4, look: 0.6, armL: { a: 10, b: -5 }, armR: { a: 20, b: -10 } } },
  ]);
  const face = faceAt(t, [[0, 'neutral'], [6, 'smug']]);

  return (
    <g transform={camT(kf(t, [[0, 960], [len, 970]]), 640, kf(t, [[0, 1.8], [len, 1.9]]))}>
      <Rooftop t={t + 80} />
      <Hero look={PIP} pose={{ ...pose, ...face }} rimId="rimR" shadow={0} />
      <Foreground blur={10}>
        <rect x={1400} y={800} width={300} height={400} fill="#141B24" />
      </Foreground>
    </g>
  );
};

// ---------- S12: Schematic wide: Global power grid interconnect ----------
export const S12: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, kf(t, [[0, 1.0], [len, 1.04]]))}>
      <Schematic t={t} id="sch12" />

      {/* Power plant nodes */}
      <PlantIcon x={420} y={480} kind="tower" on={1} t={t} s={1.1} />
      <PlantIcon x={820} y={380} kind="wind" on={1} t={t} s={1.1} />
      <PlantIcon x={1180} y={400} kind="solar" on={1} t={t} s={1.1} />
      <PlantIcon x={1520} y={490} kind="factory" on={1} t={t} s={1.1} />

      {/* Grid circuit lines connecting them */}
      <DrawOn d="M 420 480 L 820 380 L 1180 400 L 1520 490" t={t} dur={25} color={SCH.live} width={4} />
      <DrawOn d="M 820 380 L 960 640 L 1180 400" t={t} dur={25} color={SCH.glow} width={3} />

      {/* Labels */}
      <SchLabel x={960} y={190} t={t - 2} text="GLOBAL SYNCHRONOUS GRID" size={40} color={SCH.line} />
      <SchLabel x={960} y={240} t={t - 5} text="FREQUENCY REGULATION: CONTINUOUS ACTIVE BALANCING" size={24} color={SCH.dim} />

      {/* Center status pill */}
      <rect x={760} y={670} width={400} height={60} rx={30} fill="#142033" stroke={SCH.live} strokeWidth={2} />
      <text x={960} y={710} textAnchor="middle" fontFamily={FONT.ui} fontSize={28} fill={SCH.live} letterSpacing={4}>
        60.00 Hz NOMINAL
      </text>
    </g>
  );
};

// ---------- S13: Schematic insert: 60.00 Hz frequency oscillation ----------
export const S13: React.FC<ShotProps> = ({ t, len }) => {
  return (
    <g transform={camT(960, 540, kf(t, [[0, 1.25], [len, 1.35]]))}>
      <Schematic t={t + 40} id="sch13" />

      {/* Waveform monitor box */}
      <rect x={480} y={260} width={960} height={420} rx={16} fill="#0C1420" stroke={SCH.grid} strokeWidth={3} />

      {/* Center zero line */}
      <line x1={500} y1={470} x2={1420} y2={470} stroke={SCH.grid} strokeWidth={2} strokeDasharray="10 8" />

      {/* Oscillating sine wave */}
      <path
        d={`M 520 470 ${Array.from({ length: 18 })
          .map((_, i) => {
            const x = 520 + i * 50;
            const y = 470 + Math.sin((i * 0.7) + t * 0.4) * 80;
            return `L ${x} ${y}`;
          })
          .join(' ')}`}
        fill="none"
        stroke={SCH.glow}
        strokeWidth={6}
        strokeLinecap="round"
      />

      {/* Frequency readout */}
      <CountUp x={960} y={750} t={t} to={60.0} dur={10} size={68} color={SCH.live} suffix=" Hz" format={() => '60.00'} />
      <SchLabel x={960} y={805} t={t - 3} text="GRID STABILITY: +/- 0.05 Hz TOLERANCE" size={24} color={SCH.dim} />
    </g>
  );
};

// ---------- S14: Schematic alert: Relays trip, frequency collapse ----------
export const S14: React.FC<ShotProps> = ({ t, len }) => {
  const isTrip = t >= 18;
  const freq = kf(t, [[0, 59.95], [16, 59.50], [len, 59.18]]);

  return (
    <g transform={camT(960, 540, kf(t, [[0, 1.2], [len, 1.28]]))}>
      <Schematic t={t + 80} id="sch14" />

      {/* Plunging frequency trace */}
      <rect x={440} y={220} width={1040} height={500} rx={16} fill="#14080C" stroke={isTrip ? '#FF3344' : '#FF8A3D'} strokeWidth={4} />

      {/* Plunging red line */}
      <path
        d={`M 480 340 L 780 350 L 980 500 L 1400 ${560 + Math.sin(t * 0.8) * 15}`}
        fill="none"
        stroke="#FF3344"
        strokeWidth={7}
        strokeLinecap="round"
      />

      {/* Dropping counter */}
      <text x={960} y={420} textAnchor="middle" fontFamily={FONT.ui} fontSize={76} fill="#FF3344" style={{ filter: 'drop-shadow(0 0 16px #FF334488)' }}>
        {freq.toFixed(2)} Hz
      </text>

      {/* Flashing Trip Alert */}
      <g opacity={Math.floor(t / 4) % 2 === 0 ? 1 : 0.4}>
        <rect x={600} y={580} width={720} height={80} rx={40} fill="#FF2233" />
        <text x={960} y={634} textAnchor="middle" fontFamily={FONT.ui} fontSize={36} fill="#FFF" letterSpacing={4}>
          [ UFLS RELAYS TRIPPED ]
        </text>
      </g>

      <SchLabel x={960} y={760} t={t - 2} text="CASCADING SYSTEM DISCONNECT IN 30s" size={26} color="#FF7788" />
    </g>
  );
};

// ---------- S15: Wide, Rooftop: Cascading blackout sweeps across the city ----------
export const S15: React.FC<ShotProps> = ({ t, len }) => {
  const blackoutProgress = kf(t, [[0, 0], [len, 1]], easeOut);
  const lightsProgress = kf(t, [[4, 0], [len, 1]], easeOut);
  const pipPose: Pose = { ...basePose, x: 920, y: 780, scale: 0.85, yaw: 0.45, look: 0.7, armL: { a: 25, b: -15 }, armR: { a: 30, b: -20 }, expr: 'shock' };

  return (
    <g transform={camT(960, 540, kf(t, [[0, 1.0], [len, 1.05]]))}>
      <Rooftop
        t={t + 90}
        red={1}
        blackout={blackoutProgress}
        lightsOut={lightsProgress}
        cityLit={3.0}
      />
      {/* Pip silhouette on roof */}
      <Hero
        look={PIP}
        pose={pipPose}
        rimId="rimRed"
        shadow={0}
      />
    </g>
  );
};

// ---------- S16: Close-up, Rooftop: Pip in pitch darkness, slow push in ----------
export const S16: React.FC<ShotProps> = ({ t, len }) => {
  const pipX = 960;
  const pipY = 660;
  const pipPose: Pose = { ...basePose, x: pipX, y: pipY, scale: 1.0, yaw: 0.4, look: 0.5, armL: { a: 15, b: -8 }, armR: { a: 20, b: -12 }, expr: 'shock', blink: 0 };

  return (
    <g transform={camT(pipX, pipY - 140, kf(t, [[0, 2.8], [len, 3.4]]))}>
      {/* Blacked out city background */}
      <rect x={-500} y={-500} width={3000} height={2000} fill="#080A0E" />

      {/* Emergency amber/red distant glow */}
      <Glow x={pipX + 200} y={pipY - 200} r={500} kind="red" o={0.2} />

      {/* Pip extreme close-up in shock */}
      <Hero
        look={PIP}
        pose={pipPose}
        rimId="rimRed"
        shadow={0}
      />
    </g>
  );
};
