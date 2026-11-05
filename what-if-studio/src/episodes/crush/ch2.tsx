import React from 'react';
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate } from 'remotion';
import {
  KitDefs,
  SetDefs,
  Hero,
  LOOKS,
  Classroom,
  SchoolCafeteria,
  CrushMeter,
} from '../../engine';
import { P, FilmGrade, HudCard } from './common';

export const CrushCh2: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#070A11', overflow: 'hidden' }}>
      <Audio src={staticFile('crush/ch2_audio.mp3')} volume={1} />
      <KitDefs />
      <SetDefs />

      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        {/* ================================================================= */}
        {/* SHOT 1 (0 - 140): CLASSROOM WIDE - LAB DESKS */}
        {/* ================================================================= */}
        {f >= 0 && f < 140 && (() => {
          const t = f;
          return (
            <g>
              <Classroom t={t} id="c2_cls1" chalkText="PERIOD 2 // ORGANIC CHEMISTRY" />
              {/* Pip sitting at left desk */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 680,
                  y: 770,
                  scale: 0.94,
                  facing: 1,
                  armL: { a: -20, b: 30 },
                  armR: { a: 25, b: 40 },
                  expr: 'neutral',
                  look: 0.7,
                })}
                shadow={0.6}
              />
              {/* Maya sitting at right desk */}
              <Hero
                look={LOOKS.maya}
                pose={P({
                  x: 1240,
                  y: 770,
                  scale: 0.94,
                  facing: -1,
                  armL: { a: 20, b: 25 },
                  armR: { a: -15, b: 30 },
                  expr: 'cool',
                  look: -0.4,
                })}
                overhead={<CrushMeter percent={14} label="MILD CURIOSITY" t={t} scale={1.2} />}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 2 (140 - 280): MEDIUM SHOT MAYA AT LAB DESK */}
        {/* ================================================================= */}
        {f >= 140 && f < 280 && (() => {
          const t = f - 140;
          return (
            <g>
              <Classroom t={t} id="c2_cls2" chalkText="PERIOD 2 // ORGANIC CHEMISTRY" />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.maya}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: -1,
                    tilt: -1,
                    expr: 'cool',
                    look: -0.3,
                  })}
                  overhead={<CrushMeter percent={14} label="MILD CURIOSITY" t={t} scale={1.25} />}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={440}
                y={200}
                w={420}
                tag="BASELINE ASSESSMENT"
                title="MAYA // 14% SCORE"
                subtitle="Three years of silent curiosity"
                accent="#FF758F"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 3 (280 - 420): PIP ACTING LIKE A SMUG KNOW-IT-ALL */}
        {/* ================================================================= */}
        {f >= 280 && f < 420 && (() => {
          const t = f - 280;
          return (
            <g>
              <Classroom t={t} id="c2_cls3" chalkText="PERIOD 2 // ORGANIC CHEMISTRY" />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: -8, // leaning back arrogantly
                    headTilt: -6,
                    armL: { a: -35, b: 20 },
                    armR: { a: 45, b: 15 },
                    expr: 'smug',
                    look: 0.6,
                  })}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={1460}
                y={200}
                w={440}
                tag="NERVOUS REACTION"
                title="THE ARROGANCE PLAY"
                subtitle="Puffing chest out & bragging"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 4 (420 - 560): MAYA'S METER PLUNGES FROM 14% DOWN TO 6% */}
        {/* ================================================================= */}
        {f >= 420 && f < 560 && (() => {
          const t = f - 420;
          const dropScore = Math.max(6, Math.floor(interpolate(t, [0, 80], [14, 6])));
          return (
            <g>
              <Classroom t={t} id="c2_cls4" chalkText="PERIOD 2 // ORGANIC CHEMISTRY" />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.maya}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: -1,
                    tilt: 3,
                    headTilt: 2,
                    expr: 'tired', // unimpressed eye roll
                    look: -0.6,
                  })}
                  overhead={
                    <CrushMeter
                      percent={dropScore}
                      label={dropScore <= 6 ? 'UNIMPRESSED (-8%)' : 'DROPPING...'}
                      t={t}
                      scale={1.25}
                    />
                  }
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 5 (560 - 700): CLOSE-UP PIP IN HORROR */}
        {/* ================================================================= */}
        {f >= 560 && f < 700 && (() => {
          const t = f - 560;
          return (
            <g>
              <Classroom t={t} id="c2_cls5" chalkText="PERIOD 2 // ORGANIC CHEMISTRY" />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.1,
                    facing: 1,
                    tilt: 4,
                    headTilt: 3,
                    armL: { a: 25, b: 60 },
                    armR: { a: -25, b: 60 },
                    expr: 'shock',
                    look: 0.2,
                  })}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={960}
                y={130}
                w={480}
                tag="INSTANT PENALTY"
                title="THE KNOW-IT-ALL TRAP"
                subtitle="Projecting superiority triggers social repulsion"
                accent="#EF4444"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 6 (700 - 840): TRANSITION TO CAFETERIA WIDE */}
        {/* ================================================================= */}
        {f >= 700 && f < 840 && (() => {
          const t = f - 700;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf1" />
              {/* Pip sitting at foreground lunch table */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 720,
                  y: 770,
                  scale: 0.95,
                  facing: 1,
                  expr: 'worried',
                  look: 0.4,
                })}
                shadow={0.6}
              />
              {/* Maya at adjacent table */}
              <Hero
                look={LOOKS.maya}
                pose={P({
                  x: 1200,
                  y: 770,
                  scale: 0.95,
                  facing: -1,
                  expr: 'cool',
                  look: -0.3,
                })}
                overhead={<CrushMeter percent={6} t={t} scale={1.15} />}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 7 (840 - 980): FORK SLIPS & FUMBLES MID-AIR */}
        {/* ================================================================= */}
        {f >= 840 && f < 980 && (() => {
          const t = f - 840;
          // Animated fork tumbling
          const forkY = 580 + t * 2.8;
          const forkRot = t * 18;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf2" />
              <g transform="translate(860 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: 5,
                    headTilt: 8,
                    armL: { a: -40, b: 70 },
                    armR: { a: 50, b: 60 },
                    expr: 'oops',
                    look: 0.8,
                  })}
                  shadow={0.6}
                />
              </g>
              {/* Tumbling Silver Metal Fork */}
              <g transform={`translate(1040 ${forkY}) rotate(${forkRot})`}>
                <rect x={-3} y={-24} width={6} height={48} rx={2} fill="#CBD5E1" stroke="#94A3B8" strokeWidth={1.5} />
                <path d="M -8 -24 L 8 -24 L 5 -36 L -5 -36 Z" fill="#E2E8F0" />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 8 (980 - 1120): PIP BURSTS OUT LAUGHING AT HIMSELF */}
        {/* ================================================================= */}
        {f >= 980 && f < 1120 && (() => {
          const t = f - 980;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf3" />
              <g transform="translate(880 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: -4,
                    headTilt: 4,
                    armL: { a: 20, b: 30 },
                    armR: { a: -35, b: 85 }, // hand on back of neck
                    expr: 'happy',
                    look: 0.5,
                  })}
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 9 (1120 - 1260): MAYA LAUGHING GENUINELY ACROSS THE TABLE */}
        {/* ================================================================= */}
        {f >= 1120 && f < 1260 && (() => {
          const t = f - 1120;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf4" />
              <g transform="translate(1060 760)">
                <Hero
                  look={LOOKS.maya}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: -1,
                    tilt: -3,
                    headTilt: -2,
                    armL: { a: -25, b: 70 }, // hand covering giggle
                    armR: { a: 15, b: 20 },
                    expr: 'happy',
                    look: -0.6,
                  })}
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 10 (1260 - 1420): MAYA'S METER SKYROCKETS TO 38% */}
        {/* ================================================================= */}
        {f >= 1260 && f < 1420 && (() => {
          const t = f - 1260;
          const surgeScore = Math.min(38, Math.floor(interpolate(t, [0, 80], [6, 38])));
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf5" />
              <g transform="translate(1060 760)">
                <Hero
                  look={LOOKS.maya}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: -1,
                    expr: 'happy',
                    look: -0.4,
                  })}
                  overhead={
                    <CrushMeter
                      percent={surgeScore}
                      label={surgeScore >= 38 ? 'CHARMED (+32% SURGE)' : 'SURGING...'}
                      t={t}
                      scale={1.3}
                    />
                  }
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={440}
                y={200}
                w={440}
                tag="PSYCHOLOGICAL SHIFT"
                title="THE RELATABILITY SURGE"
                subtitle="Authentic self-deprecating humor sparks warmth"
                accent="#FF2E93"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 11 (1420 - 1560): PIP IN AMAZEMENT WATCHING 38% */}
        {/* ================================================================= */}
        {f >= 1420 && f < 1560 && (() => {
          const t = f - 1420;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf6" />
              <g transform="translate(860 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    expr: 'shock',
                    look: 0.6,
                  })}
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 12 (1560 - 1700): MO SLOUCHED OVER PHONE IN GLOOM */}
        {/* ================================================================= */}
        {f >= 1560 && f < 1700 && (() => {
          const t = f - 1560;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf7" />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.mo}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: 6, // slouched forward
                    headTilt: 8,
                    armL: { a: 30, b: 50 },
                    armR: { a: 25, b: 60 },
                    expr: 'worried',
                    look: 0.2,
                  })}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={1460}
                y={200}
                w={420}
                tag="BEST FRIEND CRISIS"
                title="MO // CHAT SILENCE"
                subtitle="Convinced nobody finds him attractive"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 13 (1700 - 1840): POV ACROSS CAFETERIA - GIRL WATCHING MO AT 74% */}
        {/* ================================================================= */}
        {f >= 1700 && f < 1840 && (() => {
          const t = f - 1700;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf8" />
              {/* Corner table girl */}
              <Hero
                look={LOOKS.sis}
                pose={P({
                  x: 1220,
                  y: 750,
                  scale: 0.95,
                  facing: -1,
                  tilt: -2,
                  headTilt: 3,
                  expr: 'worried',
                  look: -0.7,
                })}
                overhead={
                  <CrushMeter
                    percent={74}
                    label="HEART EYES (74%)"
                    t={t}
                    scale={1.3}
                  />
                }
                shadow={0.6}
              />
              <HudCard
                x={480}
                y={180}
                w={500}
                tag="ACROSS THE CAFETERIA"
                title="MASSIVE 74% METER DETECTED"
                subtitle="Target: Mo (completely unaware)"
                accent="#FF2E93"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 14 (1840 - 1980): PIP NUDGES MO & WHISPERS WHAT TO SAY */}
        {/* ================================================================= */}
        {f >= 1840 && f < 1980 && (() => {
          const t = f - 1840;
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf9" />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 740,
                  y: 760,
                  scale: 0.96,
                  facing: 1,
                  tilt: 4,
                  armR: { a: 45, b: 35 }, // pointing across room
                  expr: 'happy',
                  look: 0.6,
                })}
                shadow={0.6}
              />
              <Hero
                look={LOOKS.mo}
                pose={P({
                  x: 1040,
                  y: 760,
                  scale: 0.96,
                  facing: 1,
                  expr: 'shock',
                  look: 0.7,
                })}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 15 (1980 - 2129): MO SPEAKS & HER SCORE CLIMBS TO 82% */}
        {/* ================================================================= */}
        {f >= 1980 && f < 2129 && (() => {
          const t = f - 1980;
          const boostScore = Math.min(82, Math.floor(interpolate(t, [0, 80], [74, 82])));
          return (
            <g>
              <SchoolCafeteria t={t} id="c2_caf10" />
              <Hero
                look={LOOKS.sis}
                pose={P({
                  x: 1180,
                  y: 750,
                  scale: 0.95,
                  facing: -1,
                  expr: 'happy',
                  look: -0.6,
                })}
                overhead={
                  <CrushMeter
                    percent={boostScore}
                    label="MUTUAL SPARK (82%)"
                    t={t}
                    scale={1.3}
                  />
                }
                shadow={0.6}
              />
              <HudCard
                x={480}
                y={180}
                w={480}
                tag="INSTANT FEEDBACK"
                title="SCORE REACHES 82%"
                subtitle="The confidence multiplier in action"
                accent="#FF2E93"
              />
            </g>
          );
        })()}
      </svg>

      <FilmGrade f={f} />
    </AbsoluteFill>
  );
};
