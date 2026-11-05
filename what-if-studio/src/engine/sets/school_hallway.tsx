import React from 'react';
import { rnd } from '../anim';
import { makeRoom, Box, S3, pts } from '../room';
import { WallTexture, RoomCorners, Glow, Cone, LightVeil, Dust } from '../light';
import { FONT } from '../fonts';

// The school hallway in perspective: green/slate lockers on the left wall, classroom door with window pane
// and a large cork bulletin board on the right wall, deep corridor vanishing to double doors with an EXIT sign,
// and ceiling fluorescent fixtures casting volumetric light cones and dust motes.

export const SCHOOL_HALLWAY = makeRoom({ x: 960, y: 480 }, { x0: 620, x1: 1300, y0: 260, y1: 700 }, 3.8);

export interface SchoolHallwayProps {
  t: number;
  id?: string;
  lightsOn?: boolean;
}

export const SchoolHallway: React.FC<SchoolHallwayProps> = ({
  t,
  id = 'hlw',
  lightsOn = true,
}) => {
  const R = SCHOOL_HALLWAY;
  const { P, Q, back: B } = R;

  // Floor tile grid lines converging to vanishing point
  const floorLines: React.ReactNode[] = [];
  for (let i = 1; i < 10; i++) {
    const a = P(i / 10, 1, 0);
    const b = P(i / 10, 1, 1);
    floorLines.push(<line key={`fl${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#212933" strokeWidth={2} />);
  }
  for (let j = 1; j < 12; j++) {
    const w = j / 12;
    const a = P(0, 1, w);
    const b = P(1, 1, w);
    floorLines.push(<line key={`fw${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#212933" strokeWidth={1.8} />);
  }

  // Left wall lockers (green / slate metal lockers in perspective)
  const lockers: React.ReactNode[] = [];
  const lockerCount = 14;
  for (let i = 0; i < lockerCount; i++) {
    const w0 = 0.04 + (i / lockerCount) * 0.92;
    const w1 = 0.04 + ((i + 0.9) / lockerCount) * 0.92;
    // Locker frame
    lockers.push(
      <polygon
        key={`lk${i}`}
        points={Q([
          [0, 0.22, w0],
          [0, 0.22, w1],
          [0, 0.96, w1],
          [0, 0.96, w0],
        ])}
        fill={i % 2 === 0 ? '#2E473F' : '#273C35'}
        stroke="#182622"
        strokeWidth={2}
      />
    );
    // Upper and lower locker door division
    const pMid0 = P(0, 0.58, w0);
    const pMid1 = P(0, 0.58, w1);
    lockers.push(<line key={`lkm${i}`} x1={pMid0.x} y1={pMid0.y} x2={pMid1.x} y2={pMid1.y} stroke="#182622" strokeWidth={2} />);

    // Louver air vents near top of upper door
    const ventW = (w0 + w1) / 2;
    const pVent = P(0, 0.27, ventW);
    const kw = R.s(ventW);
    lockers.push(
      <g key={`vnt${i}`} opacity={0.65}>
        <line x1={pVent.x - 6 * kw} y1={pVent.y - 4} x2={pVent.x + 6 * kw} y2={pVent.y - 4} stroke="#131F1C" strokeWidth={1.5} />
        <line x1={pVent.x - 6 * kw} y1={pVent.y} x2={pVent.x + 6 * kw} y2={pVent.y} stroke="#131F1C" strokeWidth={1.5} />
        <line x1={pVent.x - 6 * kw} y1={pVent.y + 4} x2={pVent.x + 6 * kw} y2={pVent.y + 4} stroke="#131F1C" strokeWidth={1.5} />
      </g>
    );

    // Combination handle
    const pHand = P(0, 0.54, w1 - 0.015);
    lockers.push(
      <rect
        key={`hnd${i}`}
        x={pHand.x - 3}
        y={pHand.y - 7}
        width={6}
        height={14 * kw}
        rx={2}
        fill="#A6B5AC"
      />
    );
  }

  // Ceiling lights coordinates
  const lightBeams = [
    { w: 0.18, u: 0.5 },
    { w: 0.52, u: 0.5 },
    { w: 0.84, u: 0.5 },
  ];

  return (
    <g id={id}>
      {/* Ceiling */}
      <polygon points={Q([[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]])} fill="#181D26" />

      {/* Side Walls */}
      <polygon points={Q([[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]])} fill="#24302C" />
      <polygon points={Q([[1, 0, 0], [1, 0, 1], [1, 1, 1], [1, 1, 0]])} fill="#2C2F38" />

      {/* Floor with Linoleum Sheen */}
      <polygon points={Q([[0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]])} fill="#2A313C" />
      {floorLines}

      {/* Back Wall at the far end of the corridor */}
      <rect x={B.x0} y={B.y0} width={B.x1 - B.x0} height={B.y1 - B.y0} fill="#1E232B" />
      <RoomCorners x0={B.x0} x1={B.x1} y0={B.y0} y1={B.y1} />

      {/* Far End Double Doors & EXIT Sign */}
      <rect x={B.x0 + 160} y={B.y0 + 130} width={160} height={310} fill="#171A21" stroke="#313947" strokeWidth={3} />
      <line x1={B.x0 + 240} y1={B.y0 + 130} x2={B.x0 + 240} y2={B.y0 + 440} stroke="#313947" strokeWidth={2} />
      {/* Door glass panes */}
      <rect x={B.x0 + 175} y={B.y0 + 155} width={50} height={90} rx={4} fill="#FFE2A0" opacity={0.65} />
      <rect x={B.x0 + 255} y={B.y0 + 155} width={50} height={90} rx={4} fill="#FFE2A0" opacity={0.65} />
      {/* Red Glowing EXIT Sign above far doors */}
      <rect x={B.x0 + 205} y={B.y0 + 95} width={70} height={24} rx={3} fill="#181116" stroke="#EF4444" strokeWidth={1.5} />
      <text
        x={B.x0 + 240}
        y={B.y0 + 111}
        textAnchor="middle"
        fontFamily={FONT.ui}
        fontSize={11}
        fontWeight="900"
        fill="#EF4444"
        letterSpacing="2px"
      >
        EXIT
      </text>
      <Glow x={B.x0 + 240} y={B.y0 + 107} r={40} kind="red" o={0.5} />

      {/* LEFT WALL: Perspective Green Slate Lockers */}
      <g>{lockers}</g>
      {/* Base trim below lockers */}
      <polygon points={Q([[0, 0.96, 0], [0, 0.96, 1], [0, 1, 1], [0, 1, 0]])} fill="#17221E" />

      {/* RIGHT WALL: Classroom Door & Bulletin Board */}
      {/* Classroom Door (w: 0.12 to 0.38) */}
      <polygon
        points={Q([
          [1, 0.16, 0.12],
          [1, 0.16, 0.38],
          [1, 1.0, 0.38],
          [1, 1.0, 0.12],
        ])}
        fill="#5A4032"
        stroke="#271B15"
        strokeWidth={3}
      />
      {/* Classroom Door Glass Window (warm glowing amber light from inside) */}
      <polygon
        points={Q([
          [1, 0.24, 0.20],
          [1, 0.24, 0.30],
          [1, 0.48, 0.30],
          [1, 0.48, 0.20],
        ])}
        fill="#FFE29A"
        opacity={0.88}
      />
      <polygon
        points={Q([
          [1, 0.24, 0.20],
          [1, 0.24, 0.30],
          [1, 0.48, 0.30],
          [1, 0.48, 0.20],
        ])}
        fill="none"
        stroke="#271B15"
        strokeWidth={2}
      />
      {/* Door Handle */}
      {(() => {
        const ph = P(1, 0.60, 0.35);
        return <rect x={ph.x - 8} y={ph.y - 4} width={12} height={8} rx={2} fill="#D1D5DB" />;
      })()}

      {/* Large Cork Bulletin Board (w: 0.46 to 0.88) */}
      <polygon
        points={Q([
          [1, 0.25, 0.46],
          [1, 0.25, 0.88],
          [1, 0.72, 0.88],
          [1, 0.72, 0.46],
        ])}
        fill="#8A6442"
        stroke="#3F281B"
        strokeWidth={4}
      />
      <polygon
        points={Q([
          [1, 0.27, 0.48],
          [1, 0.27, 0.86],
          [1, 0.70, 0.86],
          [1, 0.70, 0.48],
        ])}
        fill="#A67B52"
      />
      {/* Pinned flyers and student notices on board */}
      {[
        { w0: 0.50, w1: 0.58, v0: 0.32, v1: 0.48, c: '#FDFBF7', pin: '#EF4444' },
        { w0: 0.62, w1: 0.71, v0: 0.34, v1: 0.52, c: '#FEF08A', pin: '#3B82F6' },
        { w0: 0.75, w1: 0.84, v0: 0.30, v1: 0.46, c: '#BFDBFE', pin: '#10B981' },
        { w0: 0.53, w1: 0.64, v0: 0.52, v1: 0.67, c: '#FECDD3', pin: '#F59E0B' },
        { w0: 0.68, w1: 0.81, v0: 0.53, v1: 0.68, c: '#E9D5FF', pin: '#EF4444' },
      ].map((n, ni) => {
        const pPin = P(1, n.v0 + 0.015, (n.w0 + n.w1) / 2);
        return (
          <g key={`not${ni}`}>
            <polygon
              points={Q([
                [1, n.v0, n.w0],
                [1, n.v0, n.w1],
                [1, n.v1, n.w1],
                [1, n.v1, n.w0],
              ])}
              fill={n.c}
              opacity={0.92}
            />
            <circle cx={pPin.x} cy={pPin.y} r={3} fill={n.pin} />
          </g>
        );
      })}

      {/* CEILING LIGHTS & VOLUMETRIC CONES */}
      {lightBeams.map((lb, li) => {
        const pFix = P(lb.u, 0, lb.w);
        const pFloor = P(lb.u, 1, lb.w);
        const kw = R.s(lb.w);
        const fixW = 120 * kw;

        return (
          <g key={`lgt${li}`}>
            {/* Linear Fluorescent Light Fixture */}
            <polygon
              points={Q([
                [lb.u - 0.08, 0, lb.w - 0.03],
                [lb.u + 0.08, 0, lb.w - 0.03],
                [lb.u + 0.08, 0, lb.w + 0.03],
                [lb.u - 0.08, 0, lb.w + 0.03],
              ])}
              fill="#E2E8F0"
              stroke="#0F172A"
              strokeWidth={2}
            />

            {lightsOn && (
              <>
                {/* Glow at fixture */}
                <Glow x={pFix.x} y={pFix.y + 10} r={140 * kw} o={0.5} />

                {/* Volumetric Downward Light Cone */}
                <polygon
                  points={pts([
                    { x: pFix.x - fixW * 0.5, y: pFix.y + 8 },
                    { x: pFix.x + fixW * 0.5, y: pFix.y + 8 },
                    { x: pFloor.x + fixW * 1.8, y: pFloor.y },
                    { x: pFloor.x - fixW * 1.8, y: pFloor.y },
                  ])}
                  fill="#FFFBEB"
                  opacity={0.16}
                  style={{ mixBlendMode: 'screen' }}
                />

                {/* Floor light reflection pool */}
                <ellipse
                  cx={pFloor.x}
                  cy={pFloor.y}
                  rx={fixW * 1.5}
                  ry={22 * kw}
                  fill="#FFF7ED"
                  opacity={0.18}
                  style={{ mixBlendMode: 'screen' }}
                />
              </>
            )}
          </g>
        );
      })}

      {/* Floating Dust Motes in Corridor Lights */}
      {lightsOn && (
        <Dust
          seed={112}
          t={t}
          n={22}
          x0={680}
          y0={320}
          w={560}
          h={420}
          o={0.6}
        />
      )}
    </g>
  );
};
