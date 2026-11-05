import React from 'react';
import { AbsoluteFill } from 'remotion';
import {
  Hero,
  LOOKS,
  basePose,
  Pose,
  KitDefs,
  SetDefs,
  CitySidewalk,
  SchoolHallway,
  SchoolCafeteria,
  ModernOffice,
  OverheadBadge,
  FONT,
} from './engine';

const P = (o: Partial<Pose>): Pose => ({ ...basePose, ...o });

export const StudioFixedCheck: React.FC = () => {
  const t = 18;

  return (
    <AbsoluteFill style={{ backgroundColor: '#070A11' }}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        <KitDefs />
        <SetDefs />

        {/* 2x2 GRID OF 4 NEW DUSK-LIT STUDIO ROOMS */}

        {/* ================================================================= */}
        {/* PANEL 1 (TOP-LEFT): CITY SIDEWALK */}
        {/* ================================================================= */}
        <g transform="translate(0, 0)">
          <clipPath id="clipTL">
            <rect x={0} y={0} width={960} height={540} />
          </clipPath>
          <g clipPath="url(#clipTL)">
            <g transform="scale(0.5)">
              <CitySidewalk t={t} id="chk_swk" streetlampOn={true} coffeeLit={true} />

              {/* Pip on the sidewalk */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 740,
                  y: 740,
                  scale: 0.96,
                  facing: 1,
                  tilt: 2,
                  headTilt: -2,
                  armL: { a: -15, b: 20 },
                  armR: { a: 25, b: 15 },
                  expr: 'smug',
                  look: 0.4,
                  yaw: 0.3,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="00:10:00"
                    kind="danger"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />

              {/* Mo beside Pip under streetlamp */}
              <Hero
                look={LOOKS.mo}
                pose={P({
                  x: 1080,
                  y: 740,
                  scale: 0.96,
                  facing: -1,
                  tilt: -2,
                  headTilt: 2,
                  armL: { a: 20, b: 10 },
                  armR: { a: -15, b: 25 },
                  expr: 'happy',
                  look: -0.5,
                  yaw: -0.3,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="SYNC 98%"
                    heart={true}
                    kind="safe"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />
            </g>
          </g>
          {/* Panel Header */}
          <rect x={24} y={22} width={430} height={42} rx={8} fill="#090D17" fillOpacity={0.92} stroke="#38BDF8" strokeWidth={1.5} />
          <text x={38} y={49} fontFamily={FONT.ui} fontSize={14} fontWeight="900" fill="#38BDF8" letterSpacing="1.5px">
            1. CITY_SIDEWALK // CROSSWALK &amp; STREETLAMP
          </text>
        </g>

        {/* ================================================================= */}
        {/* PANEL 2 (TOP-RIGHT): SCHOOL HALLWAY */}
        {/* ================================================================= */}
        <g transform="translate(960, 0)">
          <clipPath id="clipTR">
            <rect x={0} y={0} width={960} height={540} />
          </clipPath>
          <g clipPath="url(#clipTR)">
            <g transform="scale(0.5)">
              <SchoolHallway t={t} id="chk_hlw" lightsOn={true} />

              {/* Pip walking down hallway */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 780,
                  y: 730,
                  scale: 0.94,
                  facing: 1,
                  tilt: 3,
                  headTilt: -2,
                  armL: { a: -20, b: 15 },
                  armR: { a: 25, b: 20 },
                  expr: 'cool',
                  look: 0.3,
                  yaw: 0.25,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="LOCKED HEAD +65px"
                    kind="warning"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />

              {/* Mo listening to headphones beside lockers */}
              <Hero
                look={LOOKS.mo}
                pose={P({
                  x: 1140,
                  y: 730,
                  scale: 0.94,
                  facing: -1,
                  tilt: -3,
                  headTilt: 4,
                  armL: { a: 30, b: 40 },
                  armR: { a: -10, b: 10 },
                  expr: 'happy',
                  look: -0.4,
                  yaw: -0.2,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="NO EYE OVERLAP"
                    kind="info"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />
            </g>
          </g>
          {/* Panel Header */}
          <rect x={24} y={22} width={430} height={42} rx={8} fill="#090D17" fillOpacity={0.92} stroke="#10B981" strokeWidth={1.5} />
          <text x={38} y={49} fontFamily={FONT.ui} fontSize={14} fontWeight="900" fill="#10B981" letterSpacing="1.5px">
            2. SCHOOL_HALLWAY // SLATE LOCKERS &amp; BEAMS
          </text>
        </g>

        {/* ================================================================= */}
        {/* PANEL 3 (BOTTOM-LEFT): SCHOOL CAFETERIA */}
        {/* ================================================================= */}
        <g transform="translate(0, 540)">
          <clipPath id="clipBL">
            <rect x={0} y={0} width={960} height={540} />
          </clipPath>
          <g clipPath="url(#clipBL)">
            <g transform="scale(0.5)">
              <SchoolCafeteria t={t} id="chk_caf" sunX={1160} />

              {/* Pip at lunch table */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 780,
                  y: 730,
                  scale: 0.94,
                  facing: 1,
                  tilt: 2,
                  headTilt: -2,
                  armL: { a: -10, b: 15 },
                  armR: { a: 40, b: 35 },
                  expr: 'happy',
                  look: 0.6,
                  yaw: 0.35,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="LUNCH BREAK"
                    kind="safe"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />

              {/* Mo across table */}
              <Hero
                look={LOOKS.mo}
                pose={P({
                  x: 1140,
                  y: 730,
                  scale: 0.94,
                  facing: -1,
                  tilt: -2,
                  headTilt: 2,
                  armL: { a: 35, b: 25 },
                  armR: { a: -15, b: 15 },
                  expr: 'shock',
                  look: -0.6,
                  yaw: -0.3,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="HEART BPM 140"
                    heart={true}
                    kind="danger"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />
            </g>
          </g>
          {/* Panel Header */}
          <rect x={24} y={22} width={430} height={42} rx={8} fill="#090D17" fillOpacity={0.92} stroke="#F59E0B" strokeWidth={1.5} />
          <text x={38} y={49} fontFamily={FONT.ui} fontSize={14} fontWeight="900" fill="#F59E0B" letterSpacing="1.5px">
            3. SCHOOL_CAFETERIA // TALL DUSK WINDOWS
          </text>
        </g>

        {/* ================================================================= */}
        {/* PANEL 4 (BOTTOM-RIGHT): MODERN OFFICE */}
        {/* ================================================================= */}
        <g transform="translate(960, 540)">
          <clipPath id="clipBR">
            <rect x={0} y={0} width={960} height={540} />
          </clipPath>
          <g clipPath="url(#clipBR)">
            <g transform="scale(0.5)">
              <ModernOffice t={t} id="chk_offc" screenText="ALGORITHM V3 // NOMINAL" deskLampOn={true} />

              {/* Pip at executive desk */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 740,
                  y: 740,
                  scale: 0.94,
                  facing: 1,
                  tilt: 2,
                  headTilt: -2,
                  armL: { a: -10, b: 10 },
                  armR: { a: 70, b: -10 },
                  handR: 'point',
                  expr: 'smug',
                  look: 0.5,
                  yaw: 0.3,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="DESK OVERHEAD"
                    sub="y <= -321px"
                    kind="info"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />

              {/* Mo standing beside monitor */}
              <Hero
                look={LOOKS.mo}
                pose={P({
                  x: 1160,
                  y: 740,
                  scale: 0.94,
                  facing: -1,
                  tilt: -2,
                  headTilt: 3,
                  armL: { a: 25, b: 20 },
                  armR: { a: -15, b: 15 },
                  expr: 'happy',
                  look: -0.5,
                  yaw: -0.3,
                })}
                shadow={0.6}
                overhead={
                  <OverheadBadge
                    text="ZERO ABSTRACT OVALS"
                    kind="safe"
                    tail={true}
                    t={t}
                    scale={1.25}
                  />
                }
              />
            </g>
          </g>
          {/* Panel Header */}
          <rect x={24} y={22} width={430} height={42} rx={8} fill="#090D17" fillOpacity={0.92} stroke="#8B5CF6" strokeWidth={1.5} />
          <text x={38} y={49} fontFamily={FONT.ui} fontSize={14} fontWeight="900" fill="#8B5CF6" letterSpacing="1.5px">
            4. MODERN_OFFICE // SLEEK DESK &amp; SKYLINE
          </text>
        </g>

        {/* ================================================================= */}
        {/* GRID DIVIDERS & CENTER BADGE */}
        {/* ================================================================= */}
        <line x1={960} y1={0} x2={960} y2={1080} stroke="#FF8A3D" strokeWidth={2} opacity={0.65} />
        <line x1={0} y1={540} x2={1920} y2={540} stroke="#FF8A3D" strokeWidth={2} opacity={0.65} />

        {/* Center Grid Core Badge */}
        <g transform="translate(960 540)">
          <rect x={-260} y={-24} width={520} height={48} rx={24} fill="#090D17" stroke="#FF8A3D" strokeWidth={2.5} />
          <text x={0} y={6} textAnchor="middle" fontFamily={FONT.ui} fontSize={14} fontWeight="900" fill="#F6EFE3" letterSpacing="2px">
            STUDIO SETS &amp; OVERHEAD ANCHOR VERIFIED
          </text>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
