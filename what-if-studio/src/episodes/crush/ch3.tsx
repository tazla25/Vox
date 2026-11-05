import React from 'react';
import { AbsoluteFill, Audio, staticFile, useCurrentFrame } from 'remotion';
import {
  KitDefs,
  SetDefs,
  Hero,
  LOOKS,
  ModernOffice,
  SchoolCafeteria,
  CrushMeter,
} from '../../engine';
import { PratfallDiagram, LikingGapDiagram, ReciprocalLikingDiagram } from './diagrams';
import { P, FilmGrade, HudCard } from './common';

export const CrushCh3: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#070A11', overflow: 'hidden' }}>
      <Audio src={staticFile('crush/ch3_audio.mp3')} volume={1} />
      <KitDefs />
      <SetDefs />

      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        {/* ================================================================= */}
        {/* SHOT 1 (0 - 130): TRANSITION INTO MODERN OFFICE / ANALYST ROOM */}
        {/* ================================================================= */}
        {f >= 0 && f < 130 && (() => {
          const t = f;
          return (
            <g>
              <ModernOffice t={t} id="c3_off1" screenText="HUMAN ATTRACTION // ANALYSIS" deskLampOn={true} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 740,
                  y: 770,
                  scale: 0.95,
                  facing: 1,
                  expr: 'shock',
                  look: 0.5,
                })}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 2 (130 - 260): CAMERA PUSH TO BLUEPRINT SCREEN */}
        {/* ================================================================= */}
        {f >= 130 && f < 260 && (() => {
          const t = f - 130;
          return (
            <g>
              <ModernOffice t={t} id="c3_off2" screenText="3 PROVEN PSYCHOLOGICAL LAWS" deskLampOn={true} />
              <HudCard
                x={960}
                y={220}
                w={620}
                h={110}
                tag="ACADEMIC RESEARCH SUMMARY"
                title="THE THREE LAWS OF ATTRACTION"
                subtitle="Documented over 60 years of peer-reviewed behavioral studies"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 3 (260 - 410): PRATFALL EFFECT - TITLE CARD & ELLIOT ARONSON */}
        {/* ================================================================= */}
        {f >= 260 && f < 410 && (() => {
          const t = f - 260;
          return (
            <g>
              <PratfallDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 4 (410 - 560): PRATFALL ZOOM - ROBOTIC PERFECTION */}
        {/* ================================================================= */}
        {f >= 410 && f < 560 && (() => {
          const t = f - 410;
          return (
            <g transform="scale(1.4) translate(-150 -120)">
              <PratfallDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 5 (560 - 720): PRATFALL ZOOM - CLUMSY BLUNDER SURGE */}
        {/* ================================================================= */}
        {f >= 560 && f < 720 && (() => {
          const t = f - 560;
          return (
            <g transform="scale(1.4) translate(-420 -120)">
              <PratfallDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 6 (720 - 870): MODERN OFFICE - PIP NODDING IN UNDERSTANDING */}
        {/* ================================================================= */}
        {f >= 720 && f < 870 && (() => {
          const t = f - 720;
          return (
            <g>
              <ModernOffice t={t} id="c3_off3" screenText="PRATFALL EFFECT: VALIDATED" deskLampOn={true} />
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
                    armL: { a: -15, b: 25 },
                    armR: { a: 25, b: 20 },
                    expr: 'happy',
                    look: 0.4,
                  })}
                  shadow={0.6}
                />
              </g>
              <HudCard
                x={460}
                y={200}
                w={440}
                tag="KEY INSIGHT 01"
                title="VULNERABILITY = CHARM"
                subtitle="Perfection alienates. Relatability connects."
                accent="#FF758F"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 7 (870 - 1010): LIKING GAP - HARVARD & CORNELL HEADER */}
        {/* ================================================================= */}
        {f >= 870 && f < 1010 && (() => {
          const t = f - 870;
          return (
            <g>
              <LikingGapDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 8 (1010 - 1160): LIKING GAP - WHAT YOU THINK (38%) */}
        {/* ================================================================= */}
        {f >= 1010 && f < 1160 && (() => {
          const t = f - 1010;
          return (
            <g transform="scale(1.35) translate(-160 -100)">
              <LikingGapDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 9 (1160 - 1320): LIKING GAP - THE +20% TO +40% UNDERESTIMATION */}
        {/* ================================================================= */}
        {f >= 1160 && f < 1320 && (() => {
          const t = f - 1160;
          return (
            <g transform="scale(1.35) translate(-280 -100)">
              <LikingGapDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 10 (1320 - 1480): LIKING GAP - WHAT THEY THOUGHT (78%) */}
        {/* ================================================================= */}
        {f >= 1320 && f < 1480 && (() => {
          const t = f - 1320;
          return (
            <g transform="scale(1.35) translate(-420 -100)">
              <LikingGapDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 11 (1480 - 1620): FLASHBACK MO REALIZING HIS SCORE */}
        {/* ================================================================= */}
        {f >= 1480 && f < 1620 && (() => {
          const t = f - 1480;
          return (
            <g>
              <SchoolCafeteria t={t} id="c3_caf1" />
              <Hero
                look={LOOKS.mo}
                pose={P({
                  x: 960,
                  y: 760,
                  scale: 1.0,
                  facing: 1,
                  expr: 'happy',
                  look: 0.5,
                })}
                overhead={<CrushMeter percent={74} label="LIKED BY OTHERS" t={t} scale={1.25} />}
                shadow={0.6}
              />
              <HudCard
                x={960}
                y={130}
                w={500}
                tag="KEY INSIGHT 02"
                title="THE LIKING GAP IS REAL"
                subtitle="People like talking to you far more than you think"
                accent="#38BDF8"
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 12 (1620 - 1760): RECIPROCAL LIKING - DUAL RESONANCE */}
        {/* ================================================================= */}
        {f >= 1620 && f < 1760 && (() => {
          const t = f - 1620;
          return (
            <g>
              <ReciprocalLikingDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 13 (1760 - 1920): RECIPROCAL LIKING - TRIGGER: LEARNING INTEREST */}
        {/* ================================================================= */}
        {f >= 1760 && f < 1920 && (() => {
          const t = f - 1760;
          return (
            <g transform="scale(1.35) translate(-150 -120)">
              <ReciprocalLikingDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 14 (1920 - 2070): RECIPROCAL LIKING - WARMTH RETURN SPIRAL */}
        {/* ================================================================= */}
        {f >= 1920 && f < 2070 && (() => {
          const t = f - 1920;
          return (
            <g transform="scale(1.35) translate(-380 -120)">
              <ReciprocalLikingDiagram t={t} />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 15 (2070 - 2170): MODERN OFFICE WIDE - SUNSET WINDOW */}
        {/* ================================================================= */}
        {f >= 2070 && f < 2170 && (() => {
          const t = f - 2070;
          return (
            <g>
              <ModernOffice t={t} id="c3_off4" screenText="ALL 3 LAWS CONFIRMED" red={0.3} deskLampOn={true} />
              <Hero
                look={LOOKS.pipHood}
                pose={P({
                  x: 880,
                  y: 770,
                  scale: 0.95,
                  facing: 1,
                  expr: 'cool',
                  look: 0.4,
                })}
                shadow={0.6}
              />
            </g>
          );
        })()}

        {/* ================================================================= */}
        {/* SHOT 16 (2170 - 2257): SUDDEN DRAMATIC SHADOW & CHEST SPARK */}
        {/* ================================================================= */}
        {f >= 2170 && f < 2257 && (() => {
          const t = f - 2170;
          const pulse = 0.5 + 0.5 * Math.sin(t * 0.4);
          return (
            <g>
              <ModernOffice t={t} id="c3_off5" screenText="WARNING: CRITICAL EVENT" red={0.6} night={true} deskLampOn={false} />
              <g transform="translate(960 760)">
                <Hero
                  look={LOOKS.pipHood}
                  pose={P({
                    x: 0,
                    y: 0,
                    scale: 1.1,
                    facing: 1,
                    armL: { a: 20, b: 30 },
                    armR: { a: -15, b: 50 }, // hand near chest
                    expr: 'shock',
                    look: 0.2,
                  })}
                  shadow={0.6}
                />
                {/* Glowing pink heart ember on chest */}
                <circle cx={0} cy={-100} r={18 + 6 * pulse} fill="#FF2E93" opacity={0.8} />
                <circle cx={0} cy={-100} r={8} fill="#FFFFFF" />
              </g>
            </g>
          );
        })()}
      </svg>

      <FilmGrade f={f} />
    </AbsoluteFill>
  );
};
