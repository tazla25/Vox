import React from 'react';
import { rnd } from '../anim';
import { makeRoom, Box, S3, pts } from '../room';
import { WallTexture, RoomCorners, SkyView, Glow, Cone, LightVeil, Dust } from '../light';
import { FONT } from '../fonts';

// The school cafeteria / lunchroom: tall dusk windows on the back and right walls letting in low golden sunlight,
// a food tray service counter on the left with stainless steel tray slides and a menu board,
// and cafeteria lunch tables with attached bench seats in perspective.

export const SCHOOL_CAFETERIA = makeRoom({ x: 960, y: 500 }, { x0: 500, x1: 1420, y0: 300, y1: 730 }, 3.5);

export interface SchoolCafeteriaProps {
  t: number;
  id?: string;
  sunX?: number;
  red?: number;
}

export const SchoolCafeteria: React.FC<SchoolCafeteriaProps> = ({
  t,
  id = 'caf',
  sunX = 1180,
  red = 0,
}) => {
  const R = SCHOOL_CAFETERIA;
  const { P, Q, back: B } = R;

  // Floor checkerboard tiles
  const floorTiles: React.ReactNode[] = [];
  for (let i = 1; i < 12; i++) {
    const a = P(i / 12, 1, 0);
    const b = P(i / 12, 1, 1);
    floorTiles.push(<line key={`cafl${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#221C28" strokeWidth={2} />);
  }
  for (let j = 1; j < 14; j++) {
    const w = j / 14;
    const a = P(0, 1, w);
    const b = P(1, 1, w);
    floorTiles.push(<line key={`cafw${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#221C28" strokeWidth={2} />);
  }

  // Cafeteria lunch tables helper
  const renderTable = (u0: number, u1: number, w0: number, w1: number, key: string) => {
    const kw = R.s((w0 + w1) / 2);
    const pBL = P(u0, 1, w0);
    const pBR = P(u1, 1, w0);
    const pFL = P(u0, 1, w1);
    const pFR = P(u1, 1, w1);

    return (
      <g key={key}>
        {/* Floor shadow */}
        <polygon
          points={Q([
            [u0 - 0.02, 1, w0 - 0.02],
            [u1 + 0.02, 1, w0 - 0.02],
            [u1 + 0.03, 1, w1 + 0.03],
            [u0 - 0.03, 1, w1 + 0.03],
          ])}
          fill="#000"
          opacity={0.32}
        />

        {/* Steel leg frames */}
        {[u0 + 0.02, u1 - 0.02].map((uu, li) => {
          const topL = P(uu, 0.72, (w0 + w1) / 2);
          const botL = P(uu, 1.0, (w0 + w1) / 2);
          return <line key={li} x1={topL.x} y1={topL.y} x2={botL.x} y2={botL.y} stroke="#171A21" strokeWidth={5 * kw} />;
        })}

        {/* Attached bench seats on both sides of table */}
        {/* Far bench */}
        <Box
          r={R}
          u={[u0, u1]}
          v={[0.82, 0.85]}
          w={[w0 - 0.03, w0]}
          front="#4F382B"
          top="#6D4F3E"
          side="#38251B"
        />
        {/* Main lunch tabletop */}
        <Box
          r={R}
          u={[u0, u1]}
          v={[0.70, 0.73]}
          w={[w0 + 0.02, w1 - 0.02]}
          front="#7C5743"
          top="#966C54"
          side="#5B3E2E"
          rim
        />
        {/* Near bench */}
        <Box
          r={R}
          u={[u0, u1]}
          v={[0.82, 0.85]}
          w={[w1, w1 + 0.03]}
          front="#4F382B"
          top="#6D4F3E"
          side="#38251B"
        />
      </g>
    );
  };

  return (
    <g id={id}>
      {/* Ceiling */}
      <polygon points={Q([[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]])} fill="#181522" />

      {/* Side Walls */}
      <polygon points={Q([[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]])} fill="#272132" />
      <polygon points={Q([[1, 0, 0], [1, 0, 1], [1, 1, 1], [1, 1, 0]])} fill="#2F2538" />

      {/* Floor with Checkered Pattern */}
      <polygon points={Q([[0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]])} fill="#322B3D" />
      {floorTiles}

      {/* Back Wall */}
      <rect x={B.x0} y={B.y0} width={B.x1 - B.x0} height={B.y1 - B.y0} fill="#2E263B" />
      <RoomCorners x0={B.x0} x1={B.x1} y0={B.y0} y1={B.y1} />
      <WallTexture rect={[B.x0, B.y0, B.x1 - B.x0, B.y1 - B.y0]} />

      {/* TALL DUSK WINDOWS ON BACK WALL */}
      {[
        { x0: 920, x1: 1120, y0: 330, y1: 590 },
        { x0: 1180, x1: 1380, y0: 330, y1: 590 },
      ].map((wnd, wi) => (
        <g key={`win${wi}`}>
          {/* Outdoor dusk sky view with setting sun */}
          <SkyView
            id={`${id}Sky${wi}`}
            clip={`M ${wnd.x0} ${wnd.y0} L ${wnd.x1} ${wnd.y0} L ${wnd.x1} ${wnd.y1} L ${wnd.x0} ${wnd.y1} Z`}
            box={{ x: wnd.x0, y: wnd.y0, w: wnd.x1 - wnd.x0, h: wnd.y1 - wnd.y0 }}
            t={t}
            sun={{ x: sunX, y: 530 }}
            sunR={45}
            red={red}
          />
          {/* Window mullions & frame */}
          <rect x={wnd.x0 - 8} y={wnd.y0 - 8} width={wnd.x1 - wnd.x0 + 16} height={wnd.y1 - wnd.y0 + 16} fill="none" stroke="#16121E" strokeWidth={14} rx={4} />
          <line x1={(wnd.x0 + wnd.x1) / 2} y1={wnd.y0} x2={(wnd.x0 + wnd.x1) / 2} y2={wnd.y1} stroke="#16121E" strokeWidth={8} />
          <line x1={wnd.x0} y1={wnd.y0 + (wnd.y1 - wnd.y0) * 0.33} x2={wnd.x1} y2={wnd.y0 + (wnd.y1 - wnd.y0) * 0.33} stroke="#16121E" strokeWidth={6} />
          <line x1={wnd.x0} y1={wnd.y0 + (wnd.y1 - wnd.y0) * 0.66} x2={wnd.x1} y2={wnd.y0 + (wnd.y1 - wnd.y0) * 0.66} stroke="#16121E" strokeWidth={6} />
          {/* Window Sill */}
          <rect x={wnd.x0 - 12} y={wnd.y1} width={wnd.x1 - wnd.x0 + 24} height={12} fill="#4E3A42" />
        </g>
      ))}

      {/* Warm Golden Sunlight Shafts from the Tall Windows */}
      <polygon
        points={pts([
          { x: 920, y: 340 },
          { x: 1380, y: 340 },
          { x: 1780, y: 1080 },
          { x: 580, y: 1080 },
        ])}
        fill="#FFBE6A"
        opacity={0.15}
        style={{ mixBlendMode: 'screen' }}
      />
      <polygon
        points={pts([
          { x: 1180, y: 480 },
          { x: 1380, y: 480 },
          { x: 1720, y: 920 },
          { x: 1180, y: 920 },
        ])}
        fill="#FFA44A"
        opacity={0.12}
        style={{ mixBlendMode: 'screen' }}
      />

      {/* LEFT SIDE: FOOD TRAY SERVICE COUNTER */}
      {/* Service Counter Structure (w: 0 to 0.42) */}
      <Box
        r={R}
        u={[0, 0.44]}
        v={[0.66, 1.0]}
        w={[0, 0.16]}
        front="#334155"
        side="#1E293B"
      />
      {/* Stainless Steel Countertop */}
      <Box
        r={R}
        u={[0, 0.45]}
        v={[0.63, 0.66]}
        w={[0, 0.18]}
        front="#94A3B8"
        top="#CBD5E1"
        side="#64748B"
        rim
      />

      {/* Sneeze Guard Glass Panel & Support Posts */}
      {(() => {
        const p1 = P(0.04, 0.48, 0.16);
        const p2 = P(0.42, 0.48, 0.16);
        const p3 = P(0.42, 0.63, 0.16);
        const p4 = P(0.04, 0.63, 0.16);
        return (
          <g>
            <polygon points={pts([p1, p2, p3, p4])} fill="#E0F2FE" opacity={0.35} stroke="#38BDF8" strokeWidth={1.5} />
            {/* Stainless Steel Tray Slide Rails */}
            <polygon
              points={Q([
                [0.02, 0.68, 0.18],
                [0.44, 0.68, 0.18],
                [0.44, 0.68, 0.22],
                [0.02, 0.68, 0.22],
              ])}
              fill="#94A3B8"
              stroke="#475569"
              strokeWidth={1.5}
            />
          </g>
        );
      })()}

      {/* Food Service Opening Window to Kitchen with Warm Light */}
      <polygon
        points={Q([
          [0.04, 0.24, 0.0],
          [0.40, 0.24, 0.0],
          [0.40, 0.58, 0.0],
          [0.04, 0.58, 0.0],
        ])}
        fill="#FFD285"
        opacity={0.88}
      />
      <polygon
        points={Q([
          [0.04, 0.24, 0.0],
          [0.40, 0.24, 0.0],
          [0.40, 0.58, 0.0],
          [0.04, 0.58, 0.0],
        ])}
        fill="none"
        stroke="#1E1926"
        strokeWidth={6}
      />
      {/* Menu Board above service counter */}
      <rect x={B.x0 + 40} y={B.y0 + 20} width={260} height={60} rx={4} fill="#1E293B" stroke="#475569" strokeWidth={2.5} />
      <text
        x={B.x0 + 170}
        y={B.y0 + 44}
        textAnchor="middle"
        fontFamily={FONT.ui}
        fontSize={14}
        fontWeight="800"
        fill="#F8FAFC"
        letterSpacing="2px"
      >
        DAILY SPECIALS // LUNCH
      </text>
      <text
        x={B.x0 + 170}
        y={B.y0 + 64}
        textAnchor="middle"
        fontFamily={FONT.ui}
        fontSize={11}
        fontWeight="600"
        fill="#38BDF8"
        letterSpacing="1px"
      >
        HOT TRAY • FRESH SALAD • MILK
      </text>

      {/* CAFETERIA LUNCH TABLES IN PERSPECTIVE */}
      {/* Row 1: Mid-depth table */}
      {renderTable(0.48, 0.88, 0.22, 0.40, 'tbl1')}
      {/* Row 2: Foreground table */}
      {renderTable(0.24, 0.72, 0.55, 0.80, 'tbl2')}

      {/* Dust Motes floating in window sunlight */}
      <Dust
        seed={99}
        t={t}
        n={26}
        x0={740}
        y0={360}
        w={760}
        h={460}
        o={0.65}
      />
    </g>
  );
};
