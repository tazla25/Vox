import React from 'react';
import { FONT } from '../../engine';

// ============================================================================
// SCIENCE & PSYCHOLOGY DIAGRAMS FOR CHAPTER 3
// Built with clean vector lines, blueprint grids, HUD readouts (Zero abstract ovals)
// ============================================================================

export const PratfallDiagram: React.FC<{ t: number }> = ({ t }) => {
  const pulse = 0.85 + 0.15 * Math.sin(t * 0.2);
  const spikeW = Math.min(380, 180 + t * 4);

  return (
    <g>
      <rect width={1920} height={1080} fill="#090C16" />
      <defs>
        <pattern id="diagGrid1" width={60} height={60} patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#172033" strokeWidth={1} />
        </pattern>
      </defs>
      <rect width={1920} height={1080} fill="url(#diagGrid1)" />

      {/* Header Banner */}
      <g transform="translate(960 120)">
        <rect x={-360} y={-36} width={720} height={72} rx={14} fill="#0D1322" stroke="#FF758F" strokeWidth={2} />
        <text x={0} y={-6} fill="#FF758F" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily={FONT.ui}>
          SOCIAL PSYCHOLOGY // ELLIOT ARONSON 1966
        </text>
        <text x={0} y={22} fill="#F6EFE3" fontSize={24} fontWeight="900" letterSpacing="2px" textAnchor="middle" fontFamily={FONT.title}>
          THE PRATFALL EFFECT: RELATABILITY OVER PERFECTION
        </text>
      </g>

      {/* Left Column: Robotic Perfectionism */}
      <g transform="translate(520 360)">
        <rect x={-240} y={0} width={480} height={460} rx={18} fill="#111827" stroke="#475569" strokeWidth={2} />
        <text x={0} y={45} fill="#94A3B8" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          CONDITION A: ACTING PERFECT
        </text>
        <text x={0} y={75} fill="#E2E8F0" fontSize={14} textAnchor="middle" fontFamily={FONT.ui}>
          Unbroken Poise • Arrogant Bragging
        </text>

        {/* Likability Meter */}
        <text x={-200} y={150} fill="#94A3B8" fontSize={13} fontFamily={FONT.ui} fontWeight="700">
          LIKABILITY SCORE: 54%
        </text>
        <rect x={-200} y={165} width={400} height={22} rx={11} fill="#1E293B" />
        <rect x={-200} y={165} width={216} height={22} rx={11} fill="#64748B" />

        {/* Status Callout */}
        <g transform="translate(0 300)">
          <circle cx={0} cy={0} r={70} fill="#1A2234" stroke="#475569" strokeWidth={2} />
          <text x={0} y={-6} fill="#94A3B8" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            PERCEPTION
          </text>
          <text x={0} y={22} fill="#CBD5E1" fontSize={24} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            INTIMIDATING
          </text>
        </g>
      </g>

      {/* Right Column: Clumsy Blunder */}
      <g transform="translate(1400 360)">
        <rect x={-240} y={0} width={480} height={460} rx={18} fill="#19111D" stroke="#FF2E93" strokeWidth={2.5} />
        <text x={0} y={45} fill="#FF758F" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          CONDITION B: SMALL BLUNDER
        </text>
        <text x={0} y={75} fill="#FFE4E6" fontSize={14} textAnchor="middle" fontFamily={FONT.ui}>
          Spilling Coffee / Dropping Fork &amp; Laughing
        </text>

        {/* Likability Meter Surge */}
        <text x={-200} y={150} fill="#FF758F" fontSize={13} fontFamily={FONT.ui} fontWeight="800">
          LIKABILITY SURGE: 88% (+34% GAIN)
        </text>
        <rect x={-200} y={165} width={400} height={22} rx={11} fill="#271424" />
        <rect x={-200} y={165} width={spikeW} height={22} rx={11} fill="#FF2E93" />

        {/* Status Callout */}
        <g transform="translate(0 300)">
          <circle cx={0} cy={0} r={70} fill="#331428" stroke="#FF2E93" strokeWidth={2.5} />
          <text x={0} y={-6} fill="#FF758F" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            PERCEPTION
          </text>
          <text x={0} y={22} fill="#FF2E93" fontSize={24} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            CHARMING
          </text>
        </g>
      </g>

      {/* Center Connecting Arrow */}
      <g transform="translate(960 580)">
        <line x1={-120} y1={0} x2={120} y2={0} stroke="#FF758F" strokeWidth={4} strokeDasharray="10 6" />
        <polygon points="120,-10 140,0 120,10" fill="#FF758F" />
        <rect x={-100} y={-30} width={200} height={60} rx={12} fill="#0F1424" stroke="#FF758F" strokeWidth={1.5} />
        <text x={0} y={5} fill="#F6EFE3" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui} opacity={pulse}>
          HUMAN FLAWS = ATTRACTION
        </text>
      </g>
    </g>
  );
};

export const LikingGapDiagram: React.FC<{ t: number }> = ({ t }) => {
  const pulse = 0.8 + 0.2 * Math.sin(t * 0.25);

  return (
    <g>
      <rect width={1920} height={1080} fill="#080B14" />
      <defs>
        <pattern id="diagGrid2" width={60} height={60} patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#141E30" strokeWidth={1} />
        </pattern>
      </defs>
      <rect width={1920} height={1080} fill="url(#diagGrid2)" />

      {/* Header Banner */}
      <g transform="translate(960 120)">
        <rect x={-380} y={-36} width={760} height={72} rx={14} fill="#0B1324" stroke="#38BDF8" strokeWidth={2} />
        <text x={0} y={-6} fill="#38BDF8" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily={FONT.ui}>
          HARVARD &amp; CORNELL // 2018 STUDY
        </text>
        <text x={0} y={22} fill="#F6EFE3" fontSize={24} fontWeight="900" letterSpacing="2px" textAnchor="middle" fontFamily={FONT.title}>
          THE LIKING GAP: SYSTEMATIC SELF-DOUBT BIAS
        </text>
      </g>

      {/* Comparison Dual Bars */}
      <g transform="translate(960 480)">
        {/* Left: Perceived score */}
        <g transform="translate(-320 0)">
          <rect x={-140} y={-160} width={280} height={320} rx={16} fill="#111827" stroke="#EF4444" strokeWidth={2} />
          <text x={0} y={-110} fill="#F87171" fontSize={16} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            WHAT YOU THINK
          </text>
          <text x={0} y={-40} fill="#F87171" fontSize={64} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            38%
          </text>
          <text x={0} y={20} fill="#9CA3AF" fontSize={14} textAnchor="middle" fontFamily={FONT.ui}>
            "I said something stupid"
          </text>
          <text x={0} y={45} fill="#9CA3AF" fontSize={14} textAnchor="middle" fontFamily={FONT.ui}>
            "They wanted to leave"
          </text>
        </g>

        {/* Center Gap Indicator */}
        <g transform="translate(0 0)">
          <line x1={-150} y1={-40} x2={150} y2={-40} stroke="#38BDF8" strokeWidth={3} strokeDasharray="8 6" />
          <rect x={-110} y={-70} width={220} height={60} rx={12} fill="#091222" stroke="#38BDF8" strokeWidth={2} />
          <text x={0} y={-44} fill="#38BDF8" fontSize={12} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            THE LIKING GAP
          </text>
          <text x={0} y={-20} fill="#FFFFFF" fontSize={22} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            +20% TO +40%
          </text>
          <text x={0} y={35} fill="#93C5FD" fontSize={13} textAnchor="middle" fontFamily={FONT.ui} opacity={pulse}>
            Others judge you much kinder than you judge yourself
          </text>
        </g>

        {/* Right: Actual reality */}
        <g transform="translate(320 0)">
          <rect x={-140} y={-160} width={280} height={320} rx={16} fill="#0F1F2C" stroke="#10B981" strokeWidth={2.5} />
          <text x={0} y={-110} fill="#34D399" fontSize={16} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            WHAT THEY THOUGHT
          </text>
          <text x={0} y={-40} fill="#34D399" fontSize={64} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            78%
          </text>
          <text x={0} y={20} fill="#D1FAE5" fontSize={14} textAnchor="middle" fontFamily={FONT.ui}>
            "They were so sweet"
          </text>
          <text x={0} y={45} fill="#D1FAE5" fontSize={14} textAnchor="middle" fontFamily={FONT.ui}>
            "I want to talk again"
          </text>
        </g>
      </g>
    </g>
  );
};

export const ReciprocalLikingDiagram: React.FC<{ t: number }> = ({ t }) => {
  const spin = (t * 2) % 360;

  return (
    <g>
      <rect width={1920} height={1080} fill="#090A14" />
      <defs>
        <pattern id="diagGrid3" width={60} height={60} patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#181B2E" strokeWidth={1} />
        </pattern>
      </defs>
      <rect width={1920} height={1080} fill="url(#diagGrid3)" />

      {/* Header Banner */}
      <g transform="translate(960 120)">
        <rect x={-360} y={-36} width={720} height={72} rx={14} fill="#140E20" stroke="#FF2E93" strokeWidth={2} />
        <text x={0} y={-6} fill="#FF758F" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily={FONT.ui}>
          BEHAVIORAL PSYCHOLOGY // DUAL RESONANCE
        </text>
        <text x={0} y={22} fill="#F6EFE3" fontSize={24} fontWeight="900" letterSpacing="2px" textAnchor="middle" fontFamily={FONT.title}>
          RECIPROCAL LIKING: THE REINFORCEMENT SPIRAL
        </text>
      </g>

      {/* Circular Feedback Loop */}
      <g transform="translate(960 520)">
        {/* Revolving Orbit Ring */}
        <circle cx={0} cy={0} r={240} fill="none" stroke="#FF2E93" strokeWidth={3} strokeDasharray="18 12" />

        {/* Node A (Left): Perception of Being Liked */}
        <g transform="translate(-240 0)">
          <rect x={-140} y={-90} width={280} height={180} rx={16} fill="#1A0E22" stroke="#FF2E93" strokeWidth={2.5} />
          <text x={0} y={-45} fill="#FF758F" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            TRIGGER EVENT
          </text>
          <text x={0} y={-10} fill="#FFFFFF" fontSize={20} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            Discovering Interest
          </text>
          <text x={0} y={25} fill="#FDA4AF" fontSize={13} textAnchor="middle" fontFamily={FONT.ui}>
            Inhibition Drops
          </text>
          <text x={0} y={50} fill="#FDA4AF" fontSize={13} textAnchor="middle" fontFamily={FONT.ui}>
            Dopamine Surge
          </text>
        </g>

        {/* Node B (Right): Behavioral Warmth Return */}
        <g transform="translate(240 0)">
          <rect x={-140} y={-90} width={280} height={180} rx={16} fill="#1A0E22" stroke="#FF2E93" strokeWidth={2.5} />
          <text x={0} y={-45} fill="#FF758F" fontSize={14} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            RESONANCE OUTPUT
          </text>
          <text x={0} y={-10} fill="#FFFFFF" fontSize={20} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            Warmth Returned
          </text>
          <text x={0} y={25} fill="#FDA4AF" fontSize={13} textAnchor="middle" fontFamily={FONT.ui}>
            Unconscious Smiling
          </text>
          <text x={0} y={50} fill="#FDA4AF" fontSize={13} textAnchor="middle" fontFamily={FONT.ui}>
            Score Multiplier
          </text>
        </g>

        {/* Center Heart Dynamo */}
        <g transform="scale(1.2)">
          <circle cx={0} cy={0} r={55} fill="#2A0E24" stroke="#FF2E93" strokeWidth={2} />
          <path
            d="M 0 3 C -12 -12 -24 3 -9 15 L 0 24 L 9 15 C 24 3 12 -12 0 3 Z"
            fill="#FF2E93"
            transform="translate(0, -14)"
          />
          <text x={0} y={26} fill="#FFFFFF" fontSize={11} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            +100% LOOP
          </text>
        </g>
      </g>
    </g>
  );
};
