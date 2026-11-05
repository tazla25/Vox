import React from 'react';
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate } from 'remotion';
import {
  KitDefs,
  SetDefs,
  Hero,
  LOOKS,
  Rooftop,
  Classroom,
  PinkThread,
  CrushMeter,
} from '../../engine';
import { P, FilmGrade, HudCard } from './common';

export const CrushCh5: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#070A11', overflow: 'hidden' }}>
      <Audio src={staticFile('crush/ch5_audio.mp3')} volume={1} />
      <KitDefs />
      <SetDefs />

      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        {/* ================================================================= */}
        {/* SHOT 1 (0 - 140): HEAVY METAL DOOR PUSHES OPEN - SUNSET BURST */}
        {/* ================================================================= */}
        {f >= 0 && f < 140 && (() => {
          const t = f;
          const openW = interpolate(t, [0, 80], [20, 480]);
          return (
            <g>
              <rect width={1920} height={1080} fill="#090D18" />
              {/* Door opening reveal */}
              <g transform="translate(960 540)">
                <rect x={-openW / 2} y={-480} width={openW} height={960} rx={12} fill="#FFA040" opacity={0.9} />
              </g>
              <HudCard
                x={960}
                y={140}
                w={480}
                tag="ROOFTOP ACCESS"
                title="STEPPING INTO DUSK"
                subtitle="The crisp evening air greets you"
                accent="#FF758F"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 2 (140 - 280): ROOFTOP WIDE - GOLDEN SUNSET HORIZON */}
        {/* ================================================================= */}
        {f >= 140 && f < 280 && (() => {
          const t = f - 140;
          return (
            <g>
              <Rooftop t={t} red={0.2} />
              {/* Pip stepping onto roof */}
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 360,
                  y: 780,
                  scale: 0.94,
                  facing: 1,
                  expr: 'shock',
                  look: 0.6,
                })}
                shadow={0.6}
              />
              {/* Figure far at parapet */}
              <Hero
                look={LOOKS.quietGirl}
                pose={P({
                  x: 1480,
                  y: 780,
                  scale: 0.92,
                  facing: 1,
                  expr: 'neutral',
                  look: 0.3,
                })}
                shadow={0.5}
              />
              <PinkThread x1={360} y1={680} x2={1480} y2={680} t={t} strokeWidth={4.5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 3 (280 - 420): MEDIUM TRACKING SHOT - THREAD STRETCHES ACROSS */}
        {/* ================================================================= */}
        {f >= 280 && f < 420 && (() => {
          const t = f - 280;
          return (
            <g>
              <Rooftop t={t} red={0.25} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 520,
                  y: 780,
                  scale: 0.96,
                  facing: 1,
                  expr: 'shock',
                  look: 0.7,
                })}
                shadow={0.6}
              />
              <PinkThread x1={520} y1={680} x2={1600} y2={680} t={t} strokeWidth={5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 4 (420 - 570): SILHOUETTE AT PARAPET EDGE */}
        {/* ================================================================= */}
        {f >= 420 && f < 570 && (() => {
          const t = f - 420;
          return (
            <g>
              <Rooftop t={t} red={0.3} />
              <g transform="translate(1180 770)">
                <Hero
                  look={LOOKS.quietGirl}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.05,
                    facing: 1,
                    tilt: -1,
                    armL: { a: 15, b: 20 },
                    armR: { a: -15, b: 20 },
                    expr: 'neutral',
                    look: 0.5,
                  })}
                  shadow={0.6}
                />
              </g>
              <PinkThread x1={200} y1={670} x2={1180} y2={670} t={t} strokeWidth={5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 5 (570 - 710): REVEAL OF QUIET GIRL (HANA) */}
        {/* ================================================================= */}
        {f >= 570 && f < 710 && (() => {
          const t = f - 570;
          return (
            <g>
              <Rooftop t={t} red={0.3} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.quietGirl}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.08,
                    facing: -1,
                    tilt: 2,
                    headTilt: 4,
                    armL: { a: 15, b: 30 },
                    armR: { a: -15, b: 30 },
                    expr: 'worried', // shy downward look
                    look: -0.2,
                  })}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={440}
                y={200}
                w={440}
                tag="HOMEROOM CLASSMATE"
                title="THE QUIET GIRL"
                subtitle="Always sat in the back row in oversized teal hoodies"
                accent="#FF758F"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 6 (710 - 860): CLASSROOM FLASHBACK - LOOKING AWAY */}
        {/* ================================================================= */}
        {f >= 710 && f < 860 && (() => {
          const t = f - 710;
          return (
            <g>
              <Classroom t={t} id="c5_cls1" chalkText="HOMEROOM // ATTENDANCE" />
              <Hero
                look={LOOKS.quietGirl}
                pose={P({
                  x: 960,
                  y: 770,
                  scale: 0.95,
                  facing: -1,
                  tilt: 4,
                  headTilt: 6,
                  expr: 'worried',
                  look: -0.6,
                })}
                shadow={0.6}
              />
              <HudCard
                x={960}
                y={130}
                w={520}
                tag="PAST RECOLLECTION"
                title="THE SILENT AVOIDANCE"
                subtitle="Constantly looked down at her shoes whenever you walked past"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 7 (860 - 1010): PIP'S REALIZATION - ASSUMPTION WAS WRONG */}
        {/* ================================================================= */}
        {f >= 860 && f < 1010 && (() => {
          const t = f - 860;
          return (
            <g>
              <Rooftop t={t} red={0.32} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.1,
                    facing: 1,
                    tilt: -2,
                    headTilt: -2,
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
                tag="FALSE ASSUMPTION"
                title="'I THOUGHT SHE DISLIKED ME'"
                subtitle="Mistaking extreme nervousness for cold indifference"
                accent="#EF4444"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 8 (1010 - 1170): DRAMATIC REVEAL - 99% CRUSH METER */}
        {/* ================================================================= */}
        {f >= 1010 && f < 1170 && (() => {
          const t = f - 1010;
          return (
            <g>
              <Rooftop t={t} red={0.35} />
              <g transform="translate(1040 760)">
                <Hero
                  look={LOOKS.quietGirl}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.08,
                    facing: -1,
                    tilt: 1,
                    headTilt: 3,
                    expr: 'worried',
                    look: -0.3,
                  })}
                  overhead={
                    <CrushMeter
                      percent={99}
                      label="SOUL BOUND (99%)"
                      t={t}
                      scale={1.35}
                    />
                  }
                  shadow={0.6}
                />
              </g>
              {/* Pink thread connects directly into her chest */}
              <PinkThread x1={200} y1={660} x2={1040} y2={660} t={t} strokeWidth={5.5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 9 (1170 - 1330): THE SHYNESS PARADOX INFOGRAPHIC */}
        {/* ================================================================= */}
        {f >= 1170 && f < 1330 && (() => {
          const t = f - 1170;
          return (
            <g>
              <Rooftop t={t} red={0.35} />
              <g transform="translate(960 500)">
                <rect x={-420} y={-200} width={840} height={400} rx={22} fill="#090B16" fillOpacity={0.96} stroke="#FF2E93" strokeWidth={3} />
                <text x={0} y={-140} fill="#FF758F" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily="sans-serif">
                  CORE PSYCHOLOGY DISCOVERY
                </text>
                <text x={0} y={-95} fill="#FFFFFF" fontSize={28} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  THE SHYNESS PARADOX
                </text>

                {/* Left Comparison */}
                <g transform="translate(-200 10)">
                  <rect x={-140} y={-60} width={280} height={120} rx={12} fill="#141828" stroke="#475569" strokeWidth={1.5} />
                  <text x={0} y={-25} fill="#94A3B8" fontSize={13} fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                    WHAT IT LOOKED LIKE
                  </text>
                  <text x={0} y={15} fill="#E2E8F0" fontSize={18} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                    Cold Disinterest
                  </text>
                </g>

                {/* Right Comparison */}
                <g transform="translate(200 10)">
                  <rect x={-140} y={-60} width={280} height={120} rx={12} fill="#241020" stroke="#FF2E93" strokeWidth={2} />
                  <text x={0} y={-25} fill="#FF758F" fontSize={13} fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                    WHAT IT ACTUALLY WAS
                  </text>
                  <text x={0} y={15} fill="#FFFFFF" fontSize={18} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                    Overwhelming Devotion
                  </text>
                </g>

                <text x={0} y={145} fill="#FFE4E6" fontSize={14} fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  She looked away because her feelings were too intense to bear eye contact
                </text>
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 10 (1330 - 1490): QUIET GIRL CLOSE-UP AT SUNSET */}
        {/* ================================================================= */}
        {f >= 1330 && f < 1490 && (() => {
          const t = f - 1330;
          return (
            <g>
              <Rooftop t={t} red={0.38} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.quietGirl}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.15,
                    facing: -1,
                    tilt: 2,
                    headTilt: 4,
                    expr: 'worried',
                    look: -0.2,
                  })}
                  overhead={<CrushMeter percent={99} label="SOUL BOUND" t={t} scale={1.3} />}
                  shadow={0.6}
                />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 11 (1490 - 1650): PIP WALKS ACROSS GRAVEL TOWARD HER */}
        {/* ================================================================= */}
        {f >= 1490 && f < 1650 && (() => {
          const t = f - 1490;
          const pipX = interpolate(t, [0, 160], [540, 820]);
          return (
            <g>
              <Rooftop t={t} red={0.4} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: pipX,
                  y: 770,
                  scale: 0.98,
                  facing: 1,
                  tilt: 2,
                  armL: { a: -15, b: 20 },
                  armR: { a: 20, b: 15 },
                  expr: 'happy',
                  look: 0.8,
                })}
                shadow={0.6}
              />
              <Hero
                look={LOOKS.quietGirl}
                pose={P({
                  x: 1140,
                  y: 770,
                  scale: 0.98,
                  facing: -1,
                  tilt: 1,
                  headTilt: 3,
                  expr: 'worried',
                  look: -0.4,
                })}
                overhead={<CrushMeter percent={99} t={t} scale={1.25} />}
                shadow={0.6}
              />
              <PinkThread x1={pipX} y1={670} x2={1140} y2={670} t={t} strokeWidth={5} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 12 (1650 - 1810): TWO-SHOT AT EDGE - PIP SAYS "HEY" */}
        {/* ================================================================= */}
        {f >= 1650 && f < 1810 && (() => {
          const t = f - 1650;
          return (
            <g>
              <Rooftop t={t} red={0.4} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 840,
                  y: 760,
                  scale: 1.0,
                  facing: 1,
                  armL: { a: 10, b: 20 },
                  armR: { a: 35, b: 40 }, // gentle greeting gesture
                  expr: 'happy',
                  look: 0.7,
                })}
                shadow={0.6}
              />
              <Hero
                look={LOOKS.quietGirl}
                pose={P({
                  x: 1120,
                  y: 760,
                  scale: 1.0,
                  facing: -1,
                  tilt: 1,
                  headTilt: 2,
                  expr: 'shock',
                  look: -0.6,
                })}
                overhead={<CrushMeter percent={99} label="SOUL BOUND" t={t} scale={1.25} />}
                shadow={0.6}
              />
              <PinkThread x1={840} y1={660} x2={1120} y2={660} t={t} strokeWidth={5} />
              {/* Dialogue Bubble: "Hey." */}
              <g transform="translate(840 430)">
                <rect x={-50} y={-24} width={100} height={48} rx={12} fill="#0F1424" stroke="#FF758F" strokeWidth={2} />
                <polygon points="-6,24 6,24 0,34" fill="#0F1424" stroke="#FF758F" strokeWidth={1.5} />
                <text x={0} y={7} fill="#FFFFFF" fontSize={18} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  "Hey."
                </text>
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 13 (1810 - 1970): QUIET GIRL BLUSHES & LOOKS UP */}
        {/* ================================================================= */}
        {f >= 1810 && f < 1970 && (() => {
          const t = f - 1810;
          return (
            <g>
              <Rooftop t={t} red={0.42} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.quietGirl}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.15,
                    facing: -1,
                    tilt: -1,
                    headTilt: -2,
                    expr: 'happy', // genuine warm smile
                    look: -0.6,
                  })}
                  shadow={0.6}
                />
                {/* Crimson blush glow */}
                <ellipse cx={-18} cy={-135} rx={14} ry={7} fill="#FF2E93" opacity={0.65} />
              </g>
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 14 (1970 - 2130): THE 100% MOMENT - GOLDEN BURST */}
        {/* ================================================================= */}
        {f >= 1970 && f < 2130 && (() => {
          const t = f - 1970;
          const flash = Math.max(0, 1 - t / 30);
          return (
            <g>
              <Rooftop t={t} red={0.45} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 820,
                  y: 760,
                  scale: 1.0,
                  facing: 1,
                  expr: 'happy',
                  look: 0.7,
                })}
                shadow={0.6}
              />
              <Hero
                look={LOOKS.quietGirl}
                pose={P({
                  x: 1140,
                  y: 760,
                  scale: 1.0,
                  facing: -1,
                  expr: 'happy',
                  look: -0.7,
                })}
                overhead={
                  <CrushMeter
                    percent={100}
                    label="PERFECT 100%"
                    t={t}
                    scale={1.4}
                  />
                }
                shadow={0.6}
              />
              {/* Golden sparkles burst */}
              <g transform="translate(1140 440)">
                {Array.from({ length: 8 }).map((_, i) => {
                  const ang = (i * Math.PI) / 4;
                  const dist = 30 + (t % 40) * 2;
                  return (
                    <circle
                      key={i}
                      cx={Math.cos(ang) * dist}
                      cy={Math.sin(ang) * dist}
                      r={4}
                      fill="#FFD700"
                      opacity={Math.max(0, 1 - (t % 40) / 40)}
                    />
                  );
                })}
              </g>
              {/* Flash burst */}
              {flash > 0 && <rect width={1920} height={1080} fill="#FFFBEB" opacity={flash * 0.7} />}
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 15 (2130 - 2260): WIDE CINEMATIC ROOFTOP SUNSET */}
        {/* ================================================================= */}
        {f >= 2130 && f < 2260 && (() => {
          const t = f - 2130;
          return (
            <g>
              <Rooftop t={t} red={0.5} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 880,
                  y: 760,
                  scale: 0.96,
                  facing: 1,
                  expr: 'happy',
                  look: 0.5,
                })}
                shadow={0.6}
              />
              <Hero
                look={LOOKS.quietGirl}
                pose={P({
                  x: 1080,
                  y: 760,
                  scale: 0.96,
                  facing: -1,
                  expr: 'happy',
                  look: -0.5,
                })}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 16 (2260 - 2377): OUTRO CTA CARD */}
        {/* ================================================================= */}
        {f >= 2260 && f < 2377 && (() => {
          const t = f - 2260;
          return (
            <g>
              <Rooftop t={t} red={0.55} />
              <g transform="translate(960 520)">
                <rect x={-440} y={-180} width={880} height={360} rx={24} fill="#090C18" fillOpacity={0.96} stroke="#FF2E93" strokeWidth={3} />
                <text x={0} y={-110} fill="#FF758F" fontSize={16} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily="sans-serif">
                  WHAT WOULD YOU DO?
                </text>
                <text x={0} y={-55} fill="#FFFFFF" fontSize={28} fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  WHAT PERCENTAGE WOULD SCARE YOU MOST?
                </text>
                <text x={0} y={0} fill="#CBD5E1" fontSize={16} textAnchor="middle" fontFamily="sans-serif">
                  0% from your crush, or 99% from someone you barely know?
                </text>
                <g transform="translate(0 75)">
                  <rect x={-220} y={-24} width={440} height={48} rx={14} fill="#FF2E93" />
                  <text x={0} y={6} fill="#FFFFFF" fontSize={15} fontWeight="900" letterSpacing="1px" textAnchor="middle" fontFamily="sans-serif">
                    DROP YOUR THOUGHTS IN THE COMMENTS
                  </text>
                </g>
              </g>
            </g>
          );
        })()}
      </svg>

      <FilmGrade f={f} />
    </AbsoluteFill>
  );
};
