import React from 'react';
import { rnd } from '../anim';
import { DuskSky, Sun } from '../kit';
import { makeRoom, Box, S3, pts } from '../room';
import { Glow, Cone, LightVeil, Dust } from '../light';
import { FONT } from '../fonts';

// The city sidewalk at dusk: an outdoor street with a crosswalk, streetlamp casting a warm volumetric light cone,
// a warm glowing coffee shop window on the left, and a sunset city skyline in the background.
// Street scenes use this set so they NEVER reuse the indoor staircase!

export const CITY_SIDEWALK = makeRoom({ x: 960, y: 520 }, { x0: 380, x1: 1540, y0: 360, y1: 760 }, 3.5);

export interface CitySidewalkProps {
  t: number;
  id?: string;
  streetlampOn?: boolean;
  coffeeLit?: boolean;
  red?: number;
}

export const CitySidewalk: React.FC<CitySidewalkProps> = ({
  t,
  id = 'swk',
  streetlampOn = true,
  coffeeLit = true,
  red = 0,
}) => {
  const R = CITY_SIDEWALK;
  const { P, Q } = R;

  // Background skyline buildings
  const buildings: React.ReactNode[] = [];
  const bList = [
    { x: -100, w: 260, h: 420, c: '#231B32', lit: 0.8 },
    { x: 180, w: 220, h: 360, c: '#2C223D', lit: 0.6 },
    { x: 420, w: 280, h: 460, c: '#1E162B', lit: 0.7 },
    { x: 720, w: 250, h: 380, c: '#281E38', lit: 0.5 },
    { x: 990, w: 240, h: 440, c: '#1C1428', lit: 0.85 },
    { x: 1250, w: 260, h: 370, c: '#2A1F3B', lit: 0.6 },
    { x: 1530, w: 280, h: 480, c: '#20182E', lit: 0.75 },
    { x: 1830, w: 200, h: 410, c: '#261C36', lit: 0.7 },
  ];

  bList.forEach((b, bi) => {
    const top = 540 - b.h;
    buildings.push(<rect key={`bld${bi}`} x={b.x} y={top} width={b.w} height={b.h + 260} fill={b.c} />);
    // Antenna with red beacon
    if (bi % 2 === 0) {
      const ax = b.x + b.w * 0.5;
      const on = Math.floor((t + bi * 11) / 18) % 2 === 0;
      buildings.push(
        <g key={`ant${bi}`}>
          <line x1={ax} y1={top} x2={ax} y2={top - 55} stroke="#1A1224" strokeWidth={3} />
          <circle cx={ax} cy={top - 56} r={3.5} fill="#FF4A4A" opacity={on ? 1 : 0.2} />
          {on && <Glow x={ax} y={top - 56} r={22} kind="red" o={0.6} />}
        </g>
      );
    }
    // Lit window grid
    const cols = Math.floor((b.w - 24) / 22);
    const rows = Math.floor((b.h - 40) / 28);
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const q = rnd(bi * 17 + c * 3 + r, 42);
        if (q < b.lit) {
          const wx = b.x + 14 + c * 22;
          const wy = top + 20 + r * 28;
          buildings.push(
            <rect
              key={`w${bi}-${c}-${r}`}
              x={wx}
              y={wy}
              width={11}
              height={14}
              fill={q < b.lit * 0.25 ? '#A5C9FF' : '#FFD58A'}
              opacity={0.45 + q * 0.5}
            />
          );
        }
      }
    }
  });

  // Streetlamp coordinates
  const lampX = 1440;
  const lampBaseY = 760;
  const lampHeadY = 270;

  return (
    <g id={id}>
      {/* Dusk Sky with setting sun */}
      <DuskSky id={`${id}Sky`} horizonY={540} red={red} />
      <Sun x={980} y={480} r={95} t={t} red={red} />

      {/* Skyline Silhouettes */}
      <g>{buildings}</g>

      {/* Street & Asphalt Ground */}
      <rect x={-200} y={540} width={2320} height={540} fill="#181422" />

      {/* Sidewalk Curbs and Pavement in Perspective */}
      {/* Roadway (front w: 0.5 to 1.0) */}
      <polygon
        points={Q([[0, 1, 0.45], [1, 1, 0.45], [1, 1, 1.0], [0, 1, 1.0]])}
        fill="#14111D"
      />

      {/* Crosswalk Zebra Stripes across the street */}
      {[0.52, 0.60, 0.68, 0.76, 0.84, 0.92].map((w, idx) => (
        <polygon
          key={`zw${idx}`}
          points={Q([
            [0.32, 1, w],
            [0.68, 1, w],
            [0.68, 1, w + 0.045],
            [0.32, 1, w + 0.045],
          ])}
          fill="#EDE6D8"
          opacity={0.78}
        />
      ))}

      {/* Sidewalk Base Platform (w: 0.05 to 0.45) */}
      <polygon
        points={Q([[0, 0.94, 0.05], [1, 0.94, 0.05], [1, 0.94, 0.45], [0, 0.94, 0.45]])}
        fill="#2D2836"
      />
      {/* Curb Edge */}
      <polygon
        points={Q([[0, 0.94, 0.45], [1, 0.94, 0.45], [1, 1.0, 0.45], [0, 1.0, 0.45]])}
        fill="#3F394B"
      />
      <polygon
        points={Q([[0, 1.0, 0.45], [1, 1.0, 0.45], [1, 1.0, 0.465], [0, 1.0, 0.465]])}
        fill="#1C1824"
      />

      {/* Sidewalk Flagstone Seam Lines */}
      {[0.12, 0.22, 0.32, 0.42, 0.52, 0.62, 0.72, 0.82, 0.92].map((u, i) => {
        const p1 = P(u, 0.94, 0.05);
        const p2 = P(u, 0.94, 0.45);
        return <line key={`swl${i}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#211D2A" strokeWidth={2} />;
      })}
      {[0.15, 0.25, 0.35].map((w, j) => {
        const p1 = P(0, 0.94, w);
        const p2 = P(1, 0.94, w);
        return <line key={`sww${j}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#211D2A" strokeWidth={1.8} />;
      })}

      {/* COFFEE SHOP STOREFRONT ON THE LEFT */}
      {/* Storefront Building Wall */}
      <polygon
        points={Q([[0, 0, 0.05], [0.38, 0, 0.05], [0.38, 0.94, 0.05], [0, 0.94, 0.05]])}
        fill="#2E2435"
      />
      <polygon
        points={Q([[0, 0, 0.05], [0.38, 0, 0.05], [0.38, 0.94, 0.05], [0, 0.94, 0.05]])}
        fill="#000"
        opacity={0.15}
      />

      {/* Café Striped Awning */}
      <polygon
        points={pts([
          { x: -50, y: 310 },
          { x: 520, y: 320 },
          { x: 550, y: 395 },
          { x: -50, y: 380 },
        ])}
        fill="#5E2B38"
      />
      {/* Awning stripes */}
      {[0, 1, 2, 3, 4, 5, 6].map((st) => (
        <polygon
          key={`st${st}`}
          points={pts([
            { x: -50 + st * 85, y: 310 },
            { x: -10 + st * 85, y: 315 },
            { x: 0 + st * 85, y: 390 },
            { x: -40 + st * 85, y: 385 },
          ])}
          fill="#3B1822"
          opacity={0.65}
        />
      ))}
      <rect x={-50} y={380} width={600} height={14} fill="#241016" />

      {/* Warm Glowing Coffee Shop Window */}
      {coffeeLit && (
        <>
          {/* Interior glow */}
          <rect x={60} y={395} width={420} height={235} rx={6} fill="#FFBE6A" opacity={0.88} />
          <rect x={60} y={395} width={420} height={235} rx={6} fill="#FFA733" opacity={0.3} />
          {/* Silhouettes inside the café */}
          <path
            d="M 120 540 Q 140 480 180 480 Q 220 480 240 540 Z"
            fill="#3A1C24"
            opacity={0.7}
          />
          <circle cx={180} cy={455} r={22} fill="#3A1C24" opacity={0.7} />
          {/* Espresso machine outline */}
          <rect x={340} y={470} width={90} height={70} rx={4} fill="#2A151C" opacity={0.8} />
          {/* Window mullions */}
          <rect x={55} y={390} width={430} height={245} fill="none" stroke="#1F1524" strokeWidth={12} rx={6} />
          <line x1={270} y1={395} x2={270} y2={630} stroke="#1F1524" strokeWidth={8} />
          <line x1={60} y1={510} x2={480} y2={510} stroke="#1F1524" strokeWidth={6} />
          {/* Café Name Gold Lettering */}
          <text
            x={270}
            y={435}
            textAnchor="middle"
            fontFamily={FONT.ui}
            fontSize={24}
            fontWeight="800"
            letterSpacing={4}
            fill="#1E1424"
            opacity={0.85}
          >
            ROAST & DUSK
          </text>
          {/* Warm light pool cast onto sidewalk */}
          <polygon
            points={pts([
              { x: 60, y: 630 },
              { x: 480, y: 630 },
              { x: 680, y: 780 },
              { x: -20, y: 780 },
            ])}
            fill="#FFB46A"
            opacity={0.22}
            style={{ mixBlendMode: 'screen' }}
          />
        </>
      )}

      {/* CLASSIC STREETLAMP ON RIGHT SIDE */}
      {/* Cast Iron Pole */}
      <g>
        {/* Lamp Base and Plinth */}
        <ellipse cx={lampX} cy={lampBaseY + 6} rx={44} ry={14} fill="#000" opacity={0.4} />
        <rect x={lampX - 22} y={lampBaseY - 26} width={44} height={28} rx={6} fill="#14101A" />
        <rect x={lampX - 16} y={lampBaseY - 50} width={32} height={28} rx={4} fill="#1E1825" />
        {/* Tapered Pole */}
        <path
          d={`M ${lampX - 9} ${lampBaseY - 50} L ${lampX - 6} ${lampHeadY + 50} L ${lampX + 6} ${lampHeadY + 50} L ${lampX + 9} ${lampBaseY - 50} Z`}
          fill="#16121E"
        />
        {/* Decorative Ring collars */}
        <rect x={lampX - 12} y={540} width={24} height={8} rx={2} fill="#2A2234" />
        <rect x={lampX - 11} y={410} width={22} height={8} rx={2} fill="#2A2234" />
        {/* Top Curved Iron Bracket */}
        <path
          d={`M ${lampX} ${lampHeadY + 50} Q ${lampX} ${lampHeadY} ${lampX - 35} ${lampHeadY - 20} Q ${lampX - 70} ${lampHeadY - 35} ${lampX - 85} ${lampHeadY} L ${lampX - 85} ${lampHeadY + 20}`}
          fill="none"
          stroke="#16121E"
          strokeWidth={8}
          strokeLinecap="round"
        />
        {/* Lantern Head */}
        <g transform={`translate(${lampX - 85} ${lampHeadY + 30})`}>
          {/* Lantern Cap */}
          <polygon points="-24,-18 24,-18 0,-34" fill="#181320" />
          <rect x={-26} y={-18} width={52} height={6} rx={2} fill="#251E30" />
          {/* Glowing Glass Chamber */}
          <polygon
            points="-20,-12 20,-12 14,32 -14,32"
            fill={streetlampOn ? '#FFE49A' : '#3E3444'}
            opacity={streetlampOn ? 0.95 : 0.6}
          />
          {/* Frame Struts */}
          <polygon points="-20,-12 20,-12 14,32 -14,32" fill="none" stroke="#120E18" strokeWidth={3} />
          <line x1={0} y1={-12} x2={0} y2={32} stroke="#120E18" strokeWidth={2.5} />
          {/* Base Finial */}
          <polygon points="-16,32 16,32 0,44" fill="#181320" />
        </g>
      </g>

      {/* Volumetric Streetlamp Warm Light Cone */}
      {streetlampOn && (
        <g>
          {/* Soft ambient glow at lantern */}
          <Glow x={lampX - 85} y={lampHeadY + 35} r={180} o={0.7} />
          <Glow x={lampX - 85} y={lampHeadY + 35} r={340} o={0.35} />

          {/* Golden volumetric cone down to sidewalk */}
          <polygon
            points={pts([
              { x: lampX - 100, y: lampHeadY + 60 },
              { x: lampX - 70, y: lampHeadY + 60 },
              { x: lampX + 220, y: 920 },
              { x: lampX - 380, y: 920 },
            ])}
            fill="#FFE2A0"
            opacity={0.24}
            style={{ mixBlendMode: 'screen' }}
          />

          {/* Light pool on the sidewalk pavement */}
          <ellipse cx={lampX - 80} cy={860} rx={280} ry={70} fill="#FFE2A0" opacity={0.26} style={{ mixBlendMode: 'screen' }} />

          {/* Floating dust / evening motes inside the lamp cone */}
          <Dust
            seed={88}
            t={t}
            n={24}
            x0={lampX - 260}
            y0={lampHeadY + 80}
            w={380}
            h={480}
            o={0.65}
          />
        </g>
      )}
    </g>
  );
};
