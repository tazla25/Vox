import React from 'react';
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate } from 'remotion';
import {
  KitDefs,
  SetDefs,
  Hero,
  LOOKS,
  SchoolHallway,
  Stairwell,
  PinkThread,
  CrushMeter,
} from '../../engine';
import { P, FilmGrade, HudCard } from './common';

export const CrushCh4: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#070A11', overflow: 'hidden' }}>
      <Audio src={staticFile('crush/ch4_audio.mp3')} volume={1} />
      <KitDefs />
      <SetDefs />

      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        {/* ================================================================= */}
        {/* SHOT 1 (0 - 130): SCHOOL HALLWAY DUSK - STUDENTS LEAVING */}
        {/* ================================================================= */}
        {f >= 0 && f < 130 && (() => {
          const t = f;
          return (
            <g>
              <SchoolHallway t={t} id="c4_hw1" lightsOn={false} />
              {/* Walking student exiting */}
              <Hero
                look={LOOKS.suit}
                pose={P({
                  x: 1400,
                  y: 760,
                  scale: 0.94,
                  facing: 1,
                  expr: 'neutral',
                })}
                shadow={0.5}
              />
              <HudCard
                x={960}
                y={120}
                w={480}
                tag="AFTER SCHOOL // 03:15 PM"
                title="FINAL BELL RINGS"
                subtitle="The school empties into dusk"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 2 (130 - 260): PIP AT LOCKER WITH BACKPACK */}
        {/* ================================================================= */}
        {f >= 130 && f < 260 && (() => {
          const t = f - 130;
          return (
            <g>
              <SchoolHallway t={t} id="c4_hw2" lightsOn={false} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: -2,
                    headTilt: -2,
                    armL: { a: -20, b: 25 },
                    armR: { a: 25, b: 35 },
                    expr: 'smug',
                    look: 0.4,
                  })}
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 3 (260 - 390): PIP ENTERS STAIRWELL */}
        {/* ================================================================= */}
        {f >= 260 && f < 390 && (() => {
          const t = f - 260;
          return (
            <g>
              <Stairwell t={t} id="c4_stw1" />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 620,
                  y: 780,
                  scale: 0.96,
                  facing: 1,
                  expr: 'neutral',
                  look: 0.5,
                })}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 4 (390 - 520): CHEST LIGHTS UP WITH WARM GLOW */}
        {/* ================================================================= */}
        {f >= 390 && f < 520 && (() => {
          const t = f - 390;
          const pulse = 0.5 + 0.5 * Math.sin(t * 0.3);
          return (
            <g>
              <Stairwell t={t} id="c4_stw2" />
              <g transform="translate(860 770)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: 3,
                    headTilt: 4,
                    armL: { a: 20, b: 35 },
                    armR: { a: -35, b: 70 }, // hand over chest
                    expr: 'shock',
                    look: 0.2,
                  })}
                  shadow={0.6}
                />
                {/* Radiant pink chest pulse */}
                <circle cx={0} cy={-100} r={24 + 12 * pulse} fill="#FF2E93" opacity={0.8} />
                <circle cx={0} cy={-100} r={10} fill="#FFFFFF" />
              </g>
              <HudCard
                x={1420}
                y={200}
                w={440}
                tag="CRITICAL THRESHOLD"
                title="SUDDEN WARMTH DETECTED"
                subtitle="Neurological resonance spiking"
                accent="#FF2E93"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 5 (520 - 660): CLOSE-UP CHEST - NEON THREAD SHOOTS OUT */}
        {/* ================================================================= */}
        {f >= 520 && f < 660 && (() => {
          const t = f - 520;
          const threadEndX = interpolate(t, [0, 60], [960, 1920]);
          return (
            <g>
              <Stairwell t={t} id="c4_stw3" />
              <g transform="translate(760 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.15,
                    facing: 1,
                    expr: 'shock',
                    look: 0.3,
                  })}
                  shadow={0.6}
                />
                {/* Origin point */}
                <circle cx={0} cy={-100} r={18} fill="#FF2E93" />
              </g>
              {/* Neon Pink Thread Shooting Across */}
              <PinkThread x1={760} y1={660} x2={threadEndX} y2={480} t={t} strokeWidth={5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 6 (660 - 800): MEDIUM SHOT STAIRWELL - THREAD HUMMING */}
        {/* ================================================================= */}
        {f >= 660 && f < 800 && (() => {
          const t = f - 660;
          return (
            <g>
              <Stairwell t={t} id="c4_stw4" />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 580,
                  y: 780,
                  scale: 0.95,
                  facing: 1,
                  expr: 'shock',
                  look: 0.6,
                })}
                shadow={0.6}
              />
              <PinkThread x1={580} y1={680} x2={1480} y2={320} t={t} strokeWidth={4.5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 7 (800 - 940): RULE 3 RECALL CARD */}
        {/* ================================================================= */}
        {f >= 800 && f < 940 && (() => {
          const t = f - 800;
          return (
            <g>
              <Stairwell t={t} id="c4_stw5" />
              <PinkThread x1={400} y1={700} x2={1600} y2={300} t={t} strokeWidth={4.5} />
              <g transform="translate(960 520)">
                <rect x={-380} y={-160} width={760} height={320} rx={18} fill="#0B0916" fillOpacity={0.97} stroke="#FF2E93" strokeWidth={3} />
                <text x={0} y={-100} fill="#FF758F" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily="sans-serif">
                  RULE THREE RECALL
                </text>
                <text x={0} y={-50} fill="#FFFFFF" fontSize={26} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  THE 95%+ RESONANCE FILAMENT
                </text>
                <text x={0} y={0} fill="#CBD5E1" fontSize={15} textAnchor="middle" fontFamily="sans-serif">
                  Only manifests when mutual or intense attraction exceeds 95%
                </text>
                <g transform="translate(0 60) scale(1.3)">
                  <CrushMeter percent={99} label="LOCK ENGAGED" t={t} tail={false} />
                </g>
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 8 (940 - 1080): PIP LOOKS AROUND - NOBODY IS THERE */}
        {/* ================================================================= */}
        {f >= 940 && f < 1080 && (() => {
          const t = f - 940;
          return (
            <g>
              <Stairwell t={t} id="c4_stw6" />
              <g transform="translate(720 780)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: -1,
                    headTilt: 4 * Math.sin(t * 0.1),
                    expr: 'shock',
                    look: Math.sin(t * 0.15) * 0.7,
                  })}
                  shadow={0.6}
                />
              </g>
              <PinkThread x1={720} y1={680} x2={1600} y2={280} t={t} strokeWidth={4.5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 9 (1080 - 1220): CAMERA FOLLOWS THREAD UP BANISTER TO ROOF DOOR */}
        {/* ================================================================= */}
        {f >= 1080 && f < 1220 && (() => {
          const t = f - 1080;
          return (
            <g>
              <Stairwell t={t} id="c4_stw7" />
              {/* Thread winding upward */}
              <PinkThread x1={200} y1={900} x2={1350} y2={220} t={t} strokeWidth={5.5} />
              {/* Roof Door at upper landing */}
              <g transform="translate(1350 220)">
                <rect x={-40} y={-80} width={80} height={160} rx={6} fill="#1E2333" stroke="#475569" strokeWidth={3} />
                <circle cx={25} cy={0} r={5} fill="#CBD5E1" />
                {/* Crack of sunset light under door */}
                <line x1={-38} y1={78} x2={38} y2={78} stroke="#FFA040" strokeWidth={4} />
              </g>
              <HudCard
                x={620}
                y={180}
                w={480}
                tag="TARGET TRAJECTORY"
                title="ROOFTOP ACCESS DOOR"
                subtitle="Filament leads straight to the building roof"
                accent="#FF758F"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 10 (1220 - 1360): CLOSE-UP PIP - PULSE POUNDING */}
        {/* ================================================================= */}
        {f >= 1220 && f < 1360 && (() => {
          const t = f - 1220;
          return (
            <g>
              <Stairwell t={t} id="c4_stw8" />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.15,
                    facing: 1,
                    tilt: -3,
                    headTilt: -4,
                    expr: 'shock',
                    look: 0.3,
                  })}
                  shadow={0.6}
                />
              </g>
              <PinkThread x1={960} y1={650} x2={1800} y2={240} t={t} strokeWidth={5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 11 (1360 - 1500): THOUGHT: COULD IT BE MAYA? */}
        {/* ================================================================= */}
        {f >= 1360 && f < 1500 && (() => {
          const t = f - 1360;
          return (
            <g>
              <Stairwell t={t} id="c4_stw9" />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 580,
                  y: 780,
                  scale: 0.95,
                  facing: 1,
                  expr: 'worried',
                  look: 0.6,
                })}
                shadow={0.6}
              />
              <PinkThread x1={580} y1={680} x2={1600} y2={260} t={t} strokeWidth={4.5} />
              {/* Thought Hologram of Maya */}
              <g transform="translate(1320 480) scale(0.9)">
                <rect x={-180} y={-160} width={360} height={320} rx={16} fill="#0F1224" fillOpacity={0.92} stroke="#FF758F" strokeWidth={2} strokeDasharray="8 6" />
                <Hero
                  look={LOOKS.maya}
                  pose={P({
                    x: 0,
                    y: 80,
                    scale: 0.75,
                    facing: -1,
                    expr: 'cool',
                  })}
                />
                <text x={0} y={-110} fill="#FF758F" fontSize={15} fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                  MAYA? (38% TO 99%?)
                </text>
                <text x={0} y={-80} fill="#94A3B8" fontSize={12} textAnchor="middle" fontFamily="sans-serif">
                  Delayed reaction spike?
                </text>
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 12 (1500 - 1640): OR SOMEONE BARELY KNOWN? */}
        {/* ================================================================= */}
        {f >= 1500 && f < 1640 && (() => {
          const t = f - 1500;
          return (
            <g>
              <Stairwell t={t} id="c4_stw10" />
              <g transform="translate(860 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: 5,
                    headTilt: 4,
                    armL: { a: -30, b: 35 },
                    armR: { a: 40, b: 40 },
                    expr: 'shock',
                    look: 0.6,
                  })}
                  shadow={0.6}
                />
              </g>
              <PinkThread x1={860} y1={660} x2={1700} y2={220} t={t} strokeWidth={5} />
              <HudCard
                x={440}
                y={200}
                w={440}
                tag="UNKNOWN ANOMALY"
                title="WHO IS AT THE ROOF?"
                subtitle="A 99% score requires absolute devotion"
                accent="#FF2E93"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 13 (1640 - 1780): PIP SPRINTS UP CONCRETE STAIRS */}
        {/* ================================================================= */}
        {f >= 1640 && f < 1780 && (() => {
          const t = f - 1640;
          const sprintX = interpolate(t, [0, 140], [420, 1080]);
          const sprintY = interpolate(t, [0, 140], [800, 480]);
          return (
            <g>
              <Stairwell t={t} id="c4_stw11" />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: sprintX,
                  y: sprintY,
                  scale: 0.94,
                  facing: 1,
                  tilt: 14, // running forward lean
                  armL: { a: -55, b: 60 },
                  armR: { a: 65, b: 50 },
                  expr: 'shock',
                  look: 0.8,
                })}
                shadow={0.5}
              />
              <PinkThread x1={sprintX} y1={sprintY - 100} x2={1500} y2={240} t={t} strokeWidth={5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 14 (1780 - 1910): LOW ANGLE CHARGING TOWARD TOP LANDING */}
        {/* ================================================================= */}
        {f >= 1780 && f < 1910 && (() => {
          const t = f - 1780;
          return (
            <g transform="scale(1.2) translate(-140 -80)">
              <Stairwell t={t} id="c4_stw12" />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 1060,
                  y: 460,
                  scale: 0.95,
                  facing: 1,
                  tilt: 12,
                  armL: { a: 35, b: 50 },
                  armR: { a: -45, b: 60 },
                  expr: 'shock',
                  look: 0.7,
                })}
                shadow={0.5}
              />
              <PinkThread x1={1060} y1={360} x2={1420} y2={220} t={t} strokeWidth={6} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 15 (1910 - 2036): PIP AT TOP ROOF DOOR - HANDS ON PUSH BAR */}
        {/* ================================================================= */}
        {f >= 1910 && f < 2036 && (() => {
          const t = f - 1910;
          return (
            <g>
              <Stairwell t={t} id="c4_stw13" />
              {/* Roof metal push door */}
              <g transform="translate(1360 480)">
                <rect x={-80} y={-240} width={160} height={480} rx={10} fill="#181D2C" stroke="#334155" strokeWidth={4} />
                <rect x={-70} y={-10} width={140} height={20} rx={6} fill="#94A3B8" />
                {/* Golden sunset glow bleeding through rim */}
                <line x1={78} y1={-238} x2={78} y2={238} stroke="#FFA040" strokeWidth={5} opacity={0.85} />
              </g>
              {/* Pip reaching for door bar */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 1180,
                  y: 680,
                  scale: 1.02,
                  facing: 1,
                  tilt: 4,
                  armL: { a: -15, b: 35 },
                  armR: { a: 60, b: 40 }, // reaching forward
                  expr: 'shock',
                  look: 0.8,
                })}
                shadow={0.6}
              />
              <PinkThread x1={1180} y1={580} x2={1360} y2={580} t={t} strokeWidth={6} />
            </g>
          );
        })()}
      </svg>

      <FilmGrade f={f} />
    </AbsoluteFill>
  );
};
