import React from 'react';
import { rnd } from '../anim';
import { makeRoom, Box, S3, pts } from '../room';
import { WallTexture, RoomCorners, SkyView, Glow, Cone, LightVeil, Dust } from '../light';
import { FloorPlant } from '../furnish';
import { FONT } from '../fonts';

// The modern office at dusk: a clean executive desk with computer monitor, ergonomic chair,
// minimalist bookshelf on the left wall, and a large city window overlooking the sunset skyline.
// Office scenes use this set so they NEVER reuse the school chalkboard!

export const MODERN_OFFICE = makeRoom({ x: 960, y: 500 }, { x0: 520, x1: 1420, y0: 310, y1: 730 }, 3.5);

export interface ModernOfficeProps {
  t: number;
  id?: string;
  screenText?: string;
  night?: boolean;
  deskLampOn?: boolean;
  red?: number;
}

export const ModernOffice: React.FC<ModernOfficeProps> = ({
  t,
  id = 'offc',
  screenText = 'ANALYTICS // SYSTEM NOMINAL',
  night = false,
  deskLampOn = true,
  red = 0,
}) => {
  const R = MODERN_OFFICE;
  const { P, Q, back: B } = R;

  // Commercial office carpet tile seams
  const carpetLines: React.ReactNode[] = [];
  for (let i = 1; i < 10; i++) {
    const a = P(i / 10, 1, 0);
    const b = P(i / 10, 1, 1);
    carpetLines.push(<line key={`cpl${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#1D2230" strokeWidth={1.8} />);
  }
  for (let j = 1; j < 12; j++) {
    const w = j / 12;
    const a = P(0, 1, w);
    const b = P(1, 1, w);
    carpetLines.push(<line key={`cpw${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#1D2230" strokeWidth={1.8} />);
  }

  // Desk coordinates
  const deskU: [number, number] = [0.38, 0.88];
  const deskW: [number, number] = [0.24, 0.48];
  const deskV: [number, number] = [0.68, 0.72];

  // Desk Lamp bulb position
  const lampP = P(0.44, 0.52, 0.28);

  return (
    <g id={id}>
      {/* Ceiling with recessed flush panel lights */}
      <polygon points={Q([[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]])} fill="#141824" />

      {/* Side Walls */}
      <polygon points={Q([[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]])} fill="#202636" />
      <polygon points={Q([[1, 0, 0], [1, 0, 1], [1, 1, 1], [1, 1, 0]])} fill="#283044" />

      {/* Dark Commercial Carpet Floor */}
      <polygon points={Q([[0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]])} fill="#272F40" />
      {carpetLines}

      {/* Back Wall */}
      <rect x={B.x0} y={B.y0} width={B.x1 - B.x0} height={B.y1 - B.y0} fill="#232A3B" />
      <RoomCorners x0={B.x0} x1={B.x1} y0={B.y0} y1={B.y1} />
      <WallTexture rect={[B.x0, B.y0, B.x1 - B.x0, B.y1 - B.y0]} />

      {/* LARGE PANORAMIC CITY WINDOW OVERLOOKING DUSK SKYLINE */}
      <g>
        <SkyView
          id={`${id}CityWin`}
          clip={`M 920 330 L 1380 330 L 1380 620 L 920 620 Z`}
          box={{ x: 920, y: 330, w: 460, h: 290 }}
          t={t}
          sun={{ x: 1220, y: 540 }}
          sunR={40}
          night={night}
          red={red}
        />
        {/* Sleek architectural window frame and mullions */}
        <rect x={915} y={325} width={470} height={300} fill="none" stroke="#121620" strokeWidth={10} rx={4} />
        <line x1={1150} y1={330} x2={1150} y2={620} stroke="#121620" strokeWidth={7} />
        <line x1={920} y1={475} x2={1380} y2={475} stroke="#121620" strokeWidth={5} />
        {/* Window Sill */}
        <rect x={910} y={620} width={480} height={10} fill="#374151" />
      </g>

      {/* Sunset window light cast onto right side of room */}
      <polygon
        points={pts([
          { x: 920, y: 340 },
          { x: 1380, y: 340 },
          { x: 1680, y: 950 },
          { x: 960, y: 950 },
        ])}
        fill={night ? '#60A5FA' : '#FFB46A'}
        opacity={night ? 0.08 : 0.14}
        style={{ mixBlendMode: 'screen' }}
      />

      {/* LEFT WALL: MINIMALIST BOOKSHELF & STORAGE */}
      {/* Bookshelf Frame (u: 0.04 to 0.18, w: 0.14 to 0.72) */}
      {[0.24, 0.44, 0.64, 0.84].map((v, si) => (
        <polygon
          key={`shf${si}`}
          points={Q([
            [0.02, v, 0.12],
            [0.22, v, 0.12],
            [0.22, v, 0.68],
            [0.02, v, 0.68],
          ])}
          fill="#374151"
          stroke="#1F2937"
          strokeWidth={2}
        />
      ))}
      {/* Books and binders on shelves */}
      {[
        { w: 0.18, v: 0.44, h: 0.14, c: '#3B82F6' },
        { w: 0.22, v: 0.44, h: 0.16, c: '#10B981' },
        { w: 0.26, v: 0.44, h: 0.13, c: '#F59E0B' },
        { w: 0.32, v: 0.44, h: 0.15, c: '#EF4444' },
        { w: 0.42, v: 0.44, h: 0.16, c: '#6366F1' },
        { w: 0.20, v: 0.64, h: 0.15, c: '#06B6D4' },
        { w: 0.25, v: 0.64, h: 0.14, c: '#EC4899' },
        { w: 0.30, v: 0.64, h: 0.16, c: '#8B5CF6' },
        { w: 0.36, v: 0.64, h: 0.13, c: '#F97316' },
      ].map((b, bi) => (
        <polygon
          key={`bk${bi}`}
          points={Q([
            [0.06, b.v - b.h, b.w],
            [0.06, b.v - b.h, b.w + 0.03],
            [0.06, b.v, b.w + 0.03],
            [0.06, b.v, b.w],
          ])}
          fill={b.c}
        />
      ))}
      {/* Succulent Plant on top shelf */}
      {(() => {
        const pp = P(0.12, 0.24, 0.35);
        return (
          <g>
            <rect x={pp.x - 12} y={pp.y - 20} width={24} height={20} rx={3} fill="#E5E7EB" />
            <path
              d={`M ${pp.x} ${pp.y - 20} Q ${pp.x - 14} ${pp.y - 38} ${pp.x - 22} ${pp.y - 30} Q ${pp.x - 8} ${pp.y - 22} ${pp.x} ${pp.y - 20}`}
              fill="#10B981"
            />
            <path
              d={`M ${pp.x} ${pp.y - 20} Q ${pp.x + 14} ${pp.y - 38} ${pp.x + 22} ${pp.y - 30} Q ${pp.x + 8} ${pp.y - 22} ${pp.x} ${pp.y - 20}`}
              fill="#059669"
            />
          </g>
        );
      })()}

      {/* ERGONOMIC MESH OFFICE CHAIR (Behind desk) */}
      {(() => {
        const cp = P(0.64, 0.72, 0.26);
        return (
          <g>
            {/* Curved mesh high backrest */}
            <rect x={cp.x - 38} y={cp.y - 120} width={76} height={90} rx={16} fill="#1E2433" stroke="#334155" strokeWidth={3} />
            {/* Lumbar support bar */}
            <path d={`M ${cp.x - 30} ${cp.y - 65} Q ${cp.x} ${cp.y - 55} ${cp.x + 30} ${cp.y - 65}`} stroke="#64748B" strokeWidth={4} fill="none" />
            {/* Headrest */}
            <rect x={cp.x - 24} y={cp.y - 145} width={48} height={20} rx={6} fill="#1E2433" stroke="#334155" strokeWidth={2} />
          </g>
        );
      })()}

      {/* MODERN EXECUTIVE DESK */}
      {/* Floor Shadow */}
      <polygon
        points={Q([
          [deskU[0] - 0.02, 1, deskW[0] - 0.02],
          [deskU[1] + 0.02, 1, deskW[0] - 0.02],
          [deskU[1] + 0.03, 1, deskW[1] + 0.03],
          [deskU[0] - 0.03, 1, deskW[1] + 0.03],
        ])}
        fill="#000"
        opacity={0.35}
      />

      {/* Steel Angled Desk Legs */}
      {[deskU[0] + 0.02, deskU[1] - 0.02].map((uu, li) => {
        const pTop = P(uu, deskV[1], (deskW[0] + deskW[1]) / 2);
        const pBot = P(uu, 1.0, (deskW[0] + deskW[1]) / 2);
        return <line key={li} x1={pTop.x} y1={pTop.y} x2={pBot.x} y2={pBot.y} stroke="#0F172A" strokeWidth={8} />;
      })}

      {/* Desk Main Slab Top */}
      <Box
        r={R}
        u={deskU}
        v={deskV}
        w={deskW}
        front="#334155"
        top="#475569"
        side="#1E293B"
        rim
      />

      {/* WIDESCREEN COMPUTER MONITOR ON DESK */}
      {(() => {
        const mp = P(0.64, deskV[0], 0.34);
        const mw = 260;
        const mh = 145;

        return (
          <g>
            {/* Monitor Arm / Stand */}
            <line x1={mp.x} y1={mp.y} x2={mp.x} y2={mp.y - 30} stroke="#1E293B" strokeWidth={8} />
            <ellipse cx={mp.x} cy={mp.y + 2} rx={36} ry={9} fill="#0F172A" />

            {/* Monitor Bezel */}
            <rect
              x={mp.x - mw / 2}
              y={mp.y - mh - 26}
              width={mw}
              height={mh}
              rx={10}
              fill="#0F172A"
              stroke="#1E293B"
              strokeWidth={4}
            />

            {/* Glowing Screen Content */}
            <rect
              x={mp.x - mw / 2 + 8}
              y={mp.y - mh - 18}
              width={mw - 16}
              height={mh - 16}
              rx={6}
              fill="#090D16"
            />

            {/* Telemetry data / HUD charts */}
            <g opacity={0.88}>
              {/* Header bar */}
              <rect x={mp.x - mw / 2 + 16} y={mp.y - mh - 10} width={mw - 32} height={16} rx={3} fill="#1E293B" />
              <circle cx={mp.x - mw / 2 + 26} cy={mp.y - mh - 2} r={3} fill="#EF4444" />
              <circle cx={mp.x - mw / 2 + 36} cy={mp.y - mh - 2} r={3} fill="#F59E0B" />
              <circle cx={mp.x - mw / 2 + 46} cy={mp.y - mh - 2} r={3} fill="#10B981" />

              {/* Text / Status */}
              <text
                x={mp.x}
                y={mp.y - mh + 26}
                textAnchor="middle"
                fontFamily={FONT.ui}
                fontSize={11}
                fontWeight="800"
                fill="#38BDF8"
                letterSpacing="1.5px"
              >
                {screenText}
              </text>

              {/* Waveform graph */}
              <path
                d={`M ${mp.x - mw / 2 + 20} ${mp.y - 48} Q ${mp.x - 40} ${mp.y - 75 + Math.sin(t * 0.4) * 8} ${mp.x} ${mp.y - 52} T ${mp.x + mw / 2 - 20} ${mp.y - 60}`}
                fill="none"
                stroke="#34D399"
                strokeWidth={2.5}
              />
              <path
                d={`M ${mp.x - mw / 2 + 20} ${mp.y - 40} L ${mp.x - 30} ${mp.y - 40} L ${mp.x + 20} ${mp.y - 40} L ${mp.x + mw / 2 - 20} ${mp.y - 40}`}
                stroke="#1E293B"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            </g>

            {/* Ambient Screen Glow onto Desk */}
            <Glow x={mp.x} y={mp.y - mh / 2} r={180} kind="cool" o={0.35} />
          </g>
        );
      })()}

      {/* SLEEK ARCHITECTURAL DESK LAMP ON LEFT OF DESK */}
      {(() => {
        const lp = P(0.44, deskV[0], 0.32);
        return (
          <g>
            {/* Lamp base */}
            <ellipse cx={lp.x} cy={lp.y + 2} rx={22} ry={7} fill="#111827" />
            {/* Curved gooseneck arm */}
            <path
              d={`M ${lp.x} ${lp.y} Q ${lp.x - 10} ${lampP.y + 10} ${lampP.x} ${lampP.y}`}
              fill="none"
              stroke="#1F2937"
              strokeWidth={5}
            />
            {/* Lamp shade cone */}
            <path
              d={`M ${lampP.x - 18} ${lampP.y - 12} L ${lampP.x + 18} ${lampP.y - 4} L ${lampP.x + 24} ${lampP.y + 14} L ${lampP.x - 24} ${lampP.y + 14} Z`}
              fill="#111827"
              stroke="#374151"
              strokeWidth={2}
            />

            {deskLampOn && (
              <>
                <Glow x={lampP.x} y={lampP.y + 10} r={120} o={0.65} />
                {/* Volumetric warm desk light cone */}
                <polygon
                  points={pts([
                    { x: lampP.x - 16, y: lampP.y + 14 },
                    { x: lampP.x + 16, y: lampP.y + 14 },
                    { x: lp.x + 110, y: lp.y + 6 },
                    { x: lp.x - 70, y: lp.y + 6 },
                  ])}
                  fill="#FFF4D0"
                  opacity={0.22}
                  style={{ mixBlendMode: 'screen' }}
                />
                <ellipse cx={lp.x + 20} cy={lp.y + 4} rx={80} ry={22} fill="#FFF4D0" opacity={0.25} style={{ mixBlendMode: 'screen' }} />
              </>
            )}
          </g>
        );
      })()}

      {/* Dust motes in the desk lamp light */}
      {deskLampOn && (
        <Dust
          seed={105}
          t={t}
          n={18}
          x0={lampP.x - 50}
          y0={lampP.y + 10}
          w={180}
          h={140}
          o={0.6}
        />
      )}
    </g>
  );
};
