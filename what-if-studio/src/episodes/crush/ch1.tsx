import React from 'react';
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate } from 'remotion';
import {
  KitDefs,
  SetDefs,
  Hero,
  LOOKS,
  CitySidewalk,
  SchoolHallway,
  Bedroom,
  CrushMeter,
  PinkThread,
} from '../../engine';
import { P, FilmGrade, HudCard } from './common';

export const CrushCh1: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#070A11', overflow: 'hidden' }}>
      <Audio src={staticFile('crush/ch1_audio.mp3')} volume={1} />
      <KitDefs />
      <SetDefs />

      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        {/* ================================================================= */}
        {/* SHOT 1 (0 - 150): BEDROOM WAKING UP */}
        {/* ================================================================= */}
        {f >= 0 && f < 150 && (() => {
          const t = f;
          const isTired = f < 40;
          return (
            <g>
              <Bedroom t={t} id="c1_bed" lamp={1} clock="07:15" />
              <g transform="translate(100 80)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 820,
                    y: 720,
                    scale: 0.95,
                    facing: 1,
                    tilt: -3,
                    headTilt: -4,
                    armL: { a: 20, b: 40 },
                    armR: { a: -35, b: 65 },
                    expr: isTired ? 'tired' : 'shock',
                    look: 0.3,
                  })}
                  overhead={
                    f > 40 ? (
                      <CrushMeter
                        percent={0}
                        label="SYSTEM CALIBRATING"
                        t={t}
                        scale={1.15}
                      />
                    ) : undefined
                  }
                  shadow={0.5}
                />
              </g>
              {f > 50 && (
                <HudCard
                  x={960}
                  y={130}
                  w={520}
                  tag="MONDAY 07:15 AM"
                  title="ANOMALOUS HUD DETECTED"
                  subtitle="Floating numbers appearing above all individuals"
                  accent="#FF758F"
                />
              )}
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 2 (150 - 290): STEPPING OUT ONTO CITY SIDEWALK */}
        {/* ================================================================= */}
        {f >= 150 && f < 290 && (() => {
          const t = f - 150;
          const walkX = interpolate(t, [0, 140], [450, 720]);
          return (
            <g>
              <CitySidewalk t={t} id="c1_swk1" streetlampOn={true} coffeeLit={true} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: walkX,
                  y: 750,
                  scale: 0.96,
                  facing: 1,
                  tilt: 2,
                  headTilt: 2,
                  armL: { a: -20, b: 25 },
                  armR: { a: 25, b: 15 },
                  expr: 'tired',
                  look: 0.5,
                })}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 3 (290 - 440): PEDESTRIAN WITH METER PASSES PIP */}
        {/* ================================================================= */}
        {f >= 290 && f < 440 && (() => {
          const t = f - 290;
          const pedX = interpolate(t, [0, 150], [1500, 1150]);
          return (
            <g>
              <CitySidewalk t={t} id="c1_swk2" streetlampOn={true} coffeeLit={true} />
              {/* Pip watching in shock */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 620,
                  y: 750,
                  scale: 0.96,
                  facing: 1,
                  tilt: -2,
                  headTilt: 3,
                  armL: { a: 10, b: 20 },
                  armR: { a: -15, b: 30 },
                  expr: 'shock',
                  look: 0.8,
                })}
                shadow={0.6}
              />
              {/* Pedestrian */}
              <Hero
                look={LOOKS.suit}
                pose={P({
                  x: pedX,
                  y: 745,
                  scale: 0.94,
                  facing: -1,
                  armL: { a: -15, b: 20 },
                  armR: { a: 20, b: 15 },
                  expr: 'cool',
                  look: -0.4,
                })}
                overhead={
                  <CrushMeter
                    percent={12}
                    label="CASUAL GLANCE"
                    t={t}
                    scale={1.2}
                  />
                }
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 4 (440 - 580): CLOSE-UP PIP WALKING - SLEEP DEPRIVED */}
        {/* ================================================================= */}
        {f >= 440 && f < 580 && (() => {
          const t = f - 440;
          return (
            <g>
              <g transform="scale(1.4) translate(-280 -220)">
                <CitySidewalk t={t} id="c1_swk3" streetlampOn={true} coffeeLit={false} />
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 880,
                    y: 780,
                    scale: 1.1,
                    facing: 1,
                    tilt: 1,
                    headTilt: -2,
                    armL: { a: -10, b: 30 },
                    armR: { a: 15, b: 20 },
                    expr: 'tired',
                    look: 0.2,
                  })}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={1420}
                y={220}
                w={440}
                tag="DIAGNOSTIC"
                title="SLEEP DEPRIVATION?"
                subtitle="Hallucination probability: High"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 5 (580 - 730): RULE NUMBER ONE - 0% TO 100% SCALE */}
        {/* ================================================================= */}
        {f >= 580 && f < 730 && (() => {
          const t = f - 580;
          const oscScore = Math.floor(50 + 45 * Math.sin(t * 0.08));
          return (
            <g>
              <CitySidewalk t={t} id="c1_swk4" streetlampOn={true} coffeeLit={true} />
              {/* Pip watching Rule 1 card */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 520,
                  y: 750,
                  scale: 0.95,
                  facing: 1,
                  expr: 'shock',
                  look: 0.6,
                })}
                shadow={0.6}
              />
              {/* Large Rule 1 HUD Graphic */}
              <g transform="translate(1260 480)">
                <rect x={-320} y={-220} width={640} height={440} rx={20} fill="#0A0E1A" fillOpacity={0.95} stroke="#FF2E93" strokeWidth={3} />
                <text x={0} y={-160} fill="#FF758F" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily="sans-serif">
                  UNIVERSAL CONSTANT // RULE 01
                </text>
                <text x={0} y={-115} fill="#FFFFFF" fontSize={26} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  LIVE ROMANTIC INTEREST
                </text>
                <text x={0} y={-80} fill="#94A3B8" fontSize={14} textAnchor="middle" fontFamily="sans-serif">
                  Scale: 0.0% to 100.0% Continuous Measurement
                </text>
                {/* Active Dynamic Meter */}
                <g transform="translate(0 30) scale(1.6)">
                  <CrushMeter percent={oscScore} label="DYNAMIC READOUT" t={t} tail={false} />
                </g>
                <text x={0} y={150} fill="#FFE4E6" fontSize={13} fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  Measures emotional intent toward whoever they look at
                </text>
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 6 (730 - 880): RULE NUMBER TWO - INVOLUNTARY BIOLOGY */}
        {/* ================================================================= */}
        {f >= 730 && f < 880 && (() => {
          const t = f - 730;
          return (
            <g>
              <CitySidewalk t={t} id="c1_swk5" streetlampOn={true} coffeeLit={true} />
              <g transform="translate(960 520)">
                <rect x={-460} y={-260} width={920} height={520} rx={22} fill="#080C16" fillOpacity={0.96} stroke="#38BDF8" strokeWidth={3} />
                <text x={0} y={-200} fill="#38BDF8" fontSize={16} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily="sans-serif">
                  BIOLOGICAL LOCK // RULE 02
                </text>
                <text x={0} y={-155} fill="#FFFFFF" fontSize={28} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  INVOLUNTARY NEUROLOGICAL CHEMISTRY
                </text>

                {/* 3 Biomarker Indicators */}
                <g transform="translate(-260 -20)">
                  <rect x={-100} y={-80} width={200} height={160} rx={14} fill="#0F172A" stroke="#475569" strokeWidth={2} />
                  <circle cx={0} cy={-20} r={28} fill="#000000" stroke="#38BDF8" strokeWidth={3} />
                  <circle cx={0} cy={-20} r={16 + 8 * Math.sin(t * 0.15)} fill="#38BDF8" opacity={0.6} />
                  <text x={0} y={40} fill="#F8FAFC" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                    PUPIL DILATION
                  </text>
                </g>

                <g transform="translate(0 -20)">
                  <rect x={-100} y={-80} width={200} height={160} rx={14} fill="#0F172A" stroke="#475569" strokeWidth={2} />
                  {/* Waveform */}
                  <path
                    d={`M -70 -20 Q -35 ${-20 - 25 * Math.sin(t * 0.2)} 0 -20 T 70 -20`}
                    fill="none"
                    stroke="#FF2E93"
                    strokeWidth={3}
                  />
                  <text x={0} y={40} fill="#F8FAFC" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                    VOCAL PITCH SHIFT
                  </text>
                </g>

                <g transform="translate(260 -20)">
                  <rect x={-100} y={-80} width={200} height={160} rx={14} fill="#0F172A" stroke="#475569" strokeWidth={2} />
                  <circle cx={0} cy={-20} r={22} fill="#271424" stroke="#FF758F" strokeWidth={2} />
                  <text x={0} y={-14} fill="#FF758F" fontSize={18} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                    +DA
                  </text>
                  <text x={0} y={40} fill="#F8FAFC" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                    DOPAMINE SURGE
                  </text>
                </g>

                <text x={0} y={180} fill="#93C5FD" fontSize={16} fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  Subconscious autonomic triggers that cannot be faked or suppressed
                </text>
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 7 (880 - 1040): RULE NUMBER THREE - THE 95% NEON THREAD */}
        {/* ================================================================= */}
        {f >= 880 && f < 1040 && (() => {
          const t = f - 880;
          return (
            <g>
              <CitySidewalk t={t} id="c1_swk6" streetlampOn={true} coffeeLit={true} />
              <g transform="translate(960 480)">
                <rect x={-420} y={-220} width={840} height={440} rx={22} fill="#0B0916" fillOpacity={0.97} stroke="#FF2E93" strokeWidth={3} />
                <text x={0} y={-160} fill="#FF758F" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily="sans-serif">
                  CRITICAL MASS // RULE 03
                </text>
                <text x={0} y={-115} fill="#FFFFFF" fontSize={26} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  THE RESONANCE THREAD (≥95%)
                </text>

                {/* Left Node */}
                <g transform="translate(-220 20)">
                  <circle cx={0} cy={0} r={32} fill="#271424" stroke="#FF2E93" strokeWidth={3} />
                  <path d="M 0 3 C -8 -7 -15 2 -6 10 L 0 16 L 6 10 C 15 2 8 -7 0 3 Z" fill="#FF2E93" transform="translate(0, -9)" />
                  <text x={0} y={55} fill="#FF758F" fontSize={16} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                    95%
                  </text>
                </g>

                {/* Right Node */}
                <g transform="translate(220 20)">
                  <circle cx={0} cy={0} r={32} fill="#271424" stroke="#FF2E93" strokeWidth={3} />
                  <path d="M 0 3 C -8 -7 -15 2 -6 10 L 0 16 L 6 10 C 15 2 8 -7 0 3 Z" fill="#FF2E93" transform="translate(0, -9)" />
                  <text x={0} y={55} fill="#FF758F" fontSize={16} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                    99%
                  </text>
                </g>

                {/* Glowing Pink Thread Between Them */}
                <PinkThread x1={-188} y1={20} x2={188} y2={20} t={t} strokeWidth={5} />

                <text x={0} y={150} fill="#FFE4E6" fontSize={14} fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  A luminous neon-pink thread physically manifests between both chests
                </text>
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 8 (1040 - 1200): PUSH THROUGH DOORS INTO SCHOOL HALLWAY */}
        {/* ================================================================= */}
        {f >= 1040 && f < 1200 && (() => {
          const t = f - 1040;
          return (
            <g>
              <SchoolHallway t={t} id="c1_hw1" lightsOn={true} />
              {/* Pip entering the hallway */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 380,
                  y: 770,
                  scale: 0.95,
                  facing: 1,
                  expr: 'shock',
                  look: 0.5,
                })}
                shadow={0.6}
              />
              {/* Background students with numbers */}
              <Hero
                look={LOOKS.suit}
                pose={P({
                  x: 920,
                  y: 720,
                  scale: 0.82,
                  facing: 1,
                  expr: 'neutral',
                })}
                overhead={<CrushMeter percent={18} t={t} scale={1.0} />}
                shadow={0.5}
              />
              <Hero
                look={LOOKS.mom}
                pose={P({
                  x: 1360,
                  y: 720,
                  scale: 0.82,
                  facing: -1,
                  expr: 'neutral',
                })}
                overhead={<CrushMeter percent={4} t={t} scale={1.0} />}
                shadow={0.5}
              />
              <HudCard
                x={960}
                y={110}
                w={480}
                tag="SCHOOL HALLWAY // 07:45 AM"
                title="THE NUMBERS ARE EVERYWHERE"
                accent="#FF2E93"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 9 (1200 - 1340): HALLWAY MEDIUM CUT - PIP OVERWHELMED */}
        {/* ================================================================= */}
        {f >= 1200 && f < 1340 && (() => {
          const t = f - 1200;
          return (
            <g>
              <SchoolHallway t={t} id="c1_hw2" lightsOn={true} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: -1,
                    headTilt: 2 * Math.sin(t * 0.1),
                    armL: { a: 15, b: 20 },
                    armR: { a: -15, b: 20 },
                    expr: 'shock',
                    look: Math.sin(t * 0.15) * 0.6,
                  })}
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 10 (1340 - 1500): PIP TURNS TO MO */}
        {/* ================================================================= */}
        {f >= 1340 && f < 1500 && (() => {
          const t = f - 1340;
          return (
            <g>
              <SchoolHallway t={t} id="c1_hw3" lightsOn={true} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 640,
                  y: 760,
                  scale: 0.96,
                  facing: 1,
                  expr: 'happy',
                  look: 0.7,
                })}
                shadow={0.6}
              />
              <Hero
                look={LOOKS.mo}
                pose={P({
                  x: 1180,
                  y: 760,
                  scale: 0.96,
                  facing: -1,
                  armL: { a: 20, b: 15 },
                  armR: { a: -10, b: 25 },
                  expr: 'neutral',
                  look: -0.5,
                })}
                overhead={
                  <CrushMeter
                    percent={0}
                    label="PURE BRO ZONE"
                    t={t}
                    scale={1.25}
                  />
                }
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 11 (1500 - 1680): CLOSE-UP MO & HIS 0% PURE BRO ZONE */}
        {/* ================================================================= */}
        {f >= 1500 && f < 1680 && (() => {
          const t = f - 1500;
          return (
            <g>
              <g transform="scale(1.35) translate(-360 -210)">
                <SchoolHallway t={t} id="c1_hw4" lightsOn={true} />
                <Hero
                  look={LOOKS.mo}
                  pose={P({
                    x: 1040,
                    y: 770,
                    scale: 1.05,
                    facing: -1,
                    expr: 'happy',
                    look: -0.3,
                  })}
                  overhead={
                    <CrushMeter
                      percent={0}
                      label="PURE BRO ZONE"
                      t={t}
                      scale={1.3}
                    />
                  }
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={480}
                y={220}
                w={420}
                tag="BEST FRIEND METRIC"
                title="MO // 0% INTEREST"
                subtitle="Unbreakable platonic alliance"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 12 (1680 - 1860): CUT TO MAYA (POPULAR CRUSH) WITH 3% */}
        {/* ================================================================= */}
        {f >= 1680 && f < 1860 && (() => {
          const t = f - 1680;
          return (
            <g>
              <SchoolHallway t={t} id="c1_hw5" lightsOn={true} />
              {/* Maya standing with high ponytail */}
              <Hero
                look={LOOKS.maya}
                pose={P({
                  x: 1060,
                  y: 760,
                  scale: 0.96,
                  facing: -1,
                  tilt: 2,
                  headTilt: -2,
                  armL: { a: 15, b: 20 },
                  armR: { a: -20, b: 35 },
                  expr: 'cool',
                  look: -0.4,
                  yaw: -0.2,
                })}
                overhead={
                  <CrushMeter
                    percent={3}
                    label="BARELY AWARE"
                    t={t}
                    scale={1.25}
                  />
                }
                shadow={0.6}
              />
              <HudCard
                x={460}
                y={200}
                w={440}
                tag="LONGTIME CRUSH"
                title="MAYA // 3% SCORE"
                subtitle="Status: School hallway acquaintance"
                accent="#FF758F"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 13 (1860 - 2040): OVER-THE-SHOULDER PIP WATCHING MAYA */}
        {/* ================================================================= */}
        {f >= 1860 && f < 2040 && (() => {
          const t = f - 1860;
          return (
            <g>
              <SchoolHallway t={t} id="c1_hw6" lightsOn={true} />
              {/* Pip in foreground back-turned */}
              <g transform="translate(520 800) scale(1.18)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    facing: 1,
                    yaw: 0.7,
                    expr: 'worried',
                    look: 0.8,
                  })}
                  shadow={0.5}
                />
              </g>
              {/* Maya in midground */}
              <Hero
                look={LOOKS.maya}
                pose={P({
                  x: 1220,
                  y: 740,
                  scale: 0.9,
                  facing: -1,
                  expr: 'cool',
                  look: -0.5,
                })}
                overhead={
                  <CrushMeter
                    percent={3}
                    t={t}
                    scale={1.15}
                  />
                }
                shadow={0.5}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 14 (2040 - 2220): WIDE HALLWAY - TWO SHY CLASSMATES AT 86% */}
        {/* ================================================================= */}
        {f >= 2040 && f < 2220 && (() => {
          const t = f - 2040;
          return (
            <g>
              <SchoolHallway t={t} id="c1_hw7" lightsOn={true} />
              {/* Shy Classmate A */}
              <Hero
                look={LOOKS.sis}
                pose={P({
                  x: 680,
                  y: 760,
                  scale: 0.94,
                  facing: 1,
                  tilt: -2,
                  headTilt: 4,
                  expr: 'worried',
                  look: 0.7,
                })}
                overhead={
                  <CrushMeter
                    percent={86}
                    label="SECRET ADMIRER"
                    t={t}
                    scale={1.2}
                  />
                }
                shadow={0.6}
              />

              {/* Shy Classmate B */}
              <Hero
                look={LOOKS.suit}
                pose={P({
                  x: 1240,
                  y: 760,
                  scale: 0.94,
                  facing: -1,
                  tilt: 2,
                  headTilt: -4,
                  expr: 'worried',
                  look: -0.7,
                })}
                overhead={
                  <CrushMeter
                    percent={86}
                    label="SECRET ADMIRER"
                    t={t}
                    scale={1.2}
                  />
                }
                shadow={0.6}
              />

              <HudCard
                x={960}
                y={120}
                w={580}
                tag="HALLWAY REVELATION"
                title="MATCHING 86% MUTUAL CRUSH"
                subtitle="Neither person knows the other feels the exact same way"
                accent="#FF2E93"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 15 (2220 - 2400): TWO-SHOT CLOSE-UP OF THE SHY CLASSMATES */}
        {/* ================================================================= */}
        {f >= 2220 && f < 2400 && (() => {
          const t = f - 2220;
          return (
            <g>
              <g transform="scale(1.25) translate(-220 -150)">
                <SchoolHallway t={t} id="c1_hw8" lightsOn={true} />
                <Hero
                  look={LOOKS.sis}
                  pose={P({
                    x: 740,
                    y: 760,
                    scale: 1.0,
                    facing: 1,
                    expr: 'worried',
                    look: 0.6,
                  })}
                  overhead={<CrushMeter percent={86} t={t} scale={1.25} />}
                  shadow={0.6}
                />
                <Hero
                  look={LOOKS.suit}
                  pose={P({
                    x: 1180,
                    y: 760,
                    scale: 1.0,
                    facing: -1,
                    expr: 'worried',
                    look: -0.6,
                  })}
                  overhead={<CrushMeter percent={86} t={t} scale={1.25} />}
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 16 (2400 - 2570): PIP WATCHING IN AWE AS BELL RINGS */}
        {/* ================================================================= */}
        {f >= 2400 && f < 2570 && (() => {
          const t = f - 2400;
          return (
            <g>
              <SchoolHallway t={t} id="c1_hw9" lightsOn={true} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.0,
                    facing: 1,
                    expr: 'shock',
                    look: 0.4,
                  })}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={960}
                y={130}
                w={500}
                tag="SCHOOL BELL TOLLS"
                title="PERIOD 2 BEGINS"
                subtitle="The real test is about to start"
                accent="#FF758F"
              />
            </g>
          );
        })()}
      </svg>

      <FilmGrade f={f} />
    </AbsoluteFill>
  );
};
