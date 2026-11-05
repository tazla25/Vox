import React from 'react';
import { Pose, basePose, FONT } from '../../engine';

export const P = (o: Partial<Pose>): Pose => ({ ...basePose, ...o });

export const FilmGrade: React.FC<{ f: number; vignette?: boolean; grain?: boolean }> = ({
  f,
  vignette = true,
  grain = true,
}) => (
  <svg
    width={1920}
    height={1080}
    viewBox="0 0 1920 1080"
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 100 }}
  >
    <defs>
      <radialGradient id="crushVig" cx="50%" cy="50%" r="75%">
        <stop offset="55%" stopColor="#000000" stopOpacity={0} />
        <stop offset="100%" stopColor="#000000" stopOpacity={0.58} />
      </radialGradient>
      <filter id="crushGrain" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves={2}
          seed={Math.floor(f / 2) % 97}
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.055 0"
        />
      </filter>
    </defs>
    {vignette && <rect width="1920" height="1080" fill="url(#crushVig)" />}
    {grain && <rect width="1920" height="1080" filter="url(#crushGrain)" />}
  </svg>
);

export const HudCard: React.FC<{
  x: number;
  y: number;
  w?: number;
  h?: number;
  tag?: string;
  title: string;
  subtitle?: string;
  accent?: string;
  alpha?: number;
}> = ({
  x,
  y,
  w = 540,
  h = 100,
  tag = 'PSYCHOLOGY LAW',
  title,
  subtitle,
  accent = '#FF2E93',
  alpha = 1,
}) => {
  return (
    <g transform={`translate(${x} ${y})`} opacity={alpha}>
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        rx={14}
        fill="#0B0E18"
        fillOpacity={0.94}
        stroke={accent}
        strokeWidth={2}
      />
      <text
        x={0}
        y={-h / 2 + 24}
        fill={accent}
        fontSize={12}
        fontWeight="800"
        letterSpacing="2.5px"
        textAnchor="middle"
        fontFamily={FONT.ui}
      >
        {tag}
      </text>
      <text
        x={0}
        y={subtitle ? -h / 2 + 54 : -h / 2 + 58}
        fill="#FFFFFF"
        fontSize={19}
        fontWeight="900"
        letterSpacing="1px"
        textAnchor="middle"
        fontFamily={FONT.title}
      >
        {title}
      </text>
      {subtitle && (
        <text
          x={0}
          y={-h / 2 + 78}
          fill="#CBD5E1"
          fontSize={13}
          fontWeight="600"
          textAnchor="middle"
          fontFamily={FONT.ui}
        >
          {subtitle}
        </text>
      )}
    </g>
  );
};
