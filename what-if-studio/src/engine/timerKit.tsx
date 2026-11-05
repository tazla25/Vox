import React from 'react';
import { FONT } from './fonts';
import { Pose, overheadAnchor, OVERHEAD_BADGE_Y } from './rig';

// ============================================================================
// OVERHEAD BADGE / HEART / TIMER COMPONENT
// STRICT ENFORCEMENT: Locked at least 65px above top of head/hood (y <= -321)
// ============================================================================

export interface OverheadBadgeProps {
  x?: number;
  y?: number;
  pose?: Pose;
  text?: string;
  sub?: string;
  kind?: 'safe' | 'warning' | 'danger' | 'info';
  heart?: boolean;
  scale?: number;
  pulse?: boolean;
  t?: number;
  tail?: boolean;
  children?: React.ReactNode;
}

export const OverheadBadge: React.FC<OverheadBadgeProps> = ({
  x = 0,
  y,
  pose,
  text,
  sub,
  kind = 'info',
  heart = false,
  scale = 1,
  pulse = true,
  t = 0,
  tail = true,
  children,
}) => {
  // Determine placement coordinates
  let renderX = x;
  let renderY = y ?? OVERHEAD_BADGE_Y;

  if (pose) {
    const anchor = overheadAnchor(pose, 65);
    renderX = anchor.x;
    renderY = anchor.y;
  } else {
    // ENFORCEMENT: If in local character coordinate space (y <= 0 relative to hips),
    // strictly enforce y <= OVERHEAD_BADGE_Y (-321px). Never allow overlapping forehead or eyes!
    if (renderY > OVERHEAD_BADGE_Y && renderY <= 0) {
      renderY = OVERHEAD_BADGE_Y;
    }
  }

  const color =
    kind === 'safe'
      ? '#34D399'
      : kind === 'warning'
      ? '#FBBF24'
      : kind === 'danger'
      ? '#FF334B'
      : '#38BDF8';
  const glowColor =
    kind === 'safe'
      ? '#10B981'
      : kind === 'warning'
      ? '#F59E0B'
      : kind === 'danger'
      ? '#EF4444'
      : '#0284C7';

  const pulseAlpha = pulse ? 0.85 + 0.15 * Math.sin((t * Math.PI) / 10) : 1;
  const heartScale = pulse ? 1 + 0.12 * Math.sin(t * 0.4) : 1;

  const displayStr = text ?? (heart ? 'SYNC 100%' : 'STATUS');
  const w = Math.max(heart ? 160 : 140, displayStr.length * 12 + (heart ? 64 : 44));
  const h = sub ? 46 : 36;

  return (
    <g transform={`translate(${renderX} ${renderY}) scale(${scale})`}>
      {/* Outer ambient glow */}
      <ellipse cx={0} cy={0} rx={w * 0.7} ry={h * 0.75} fill={glowColor} opacity={0.32 * pulseAlpha} filter="blur(8px)" />

      {/* Pill background container */}
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        rx={h / 2}
        ry={h / 2}
        fill="#090D17"
        fillOpacity={0.95}
        stroke={color}
        strokeWidth={2.5}
        opacity={pulseAlpha}
      />

      {/* Optional downward indicator tail pointing toward head apex */}
      {tail && (
        <polygon
          points={`-6,${h / 2 - 1} 6,${h / 2 - 1} 0,${h / 2 + 9}`}
          fill="#090D17"
          stroke={color}
          strokeWidth={2}
          opacity={pulseAlpha}
        />
      )}

      {/* Icon: Heart or Status Indicator */}
      {heart ? (
        <g transform={`translate(${-w / 2 + 24} 0) scale(${heartScale})`}>
          <path
            d="M 0 3 C -8 -7 -15 2 -6 10 L 0 16 L 6 10 C 15 2 8 -7 0 3 Z"
            fill="#FF3366"
            stroke="#FFE4E6"
            strokeWidth={1.5}
            transform="translate(0, -9)"
          />
        </g>
      ) : (
        <g transform={`translate(${-w / 2 + 18} 0)`}>
          <circle cx={0} cy={0} r={5} fill={color} opacity={pulseAlpha} />
          <circle cx={0} cy={0} r={8.5} fill="none" stroke={color} strokeWidth={1.2} opacity={0.5 * pulseAlpha} />
        </g>
      )}

      {/* Text label: Cream/white for razor-sharp readability on dark pill */}
      <text
        x={heart ? 15 : 9}
        y={sub ? -3 : 5.5}
        fill="#F8FAFC"
        fontSize={15}
        fontWeight="800"
        fontFamily={FONT.ui}
        letterSpacing="1.5px"
        textAnchor="middle"
        opacity={pulseAlpha}
      >
        {displayStr}
      </text>

      {/* Optional secondary sub-text */}
      {sub && (
        <text
          x={heart ? 15 : 9}
          y={15}
          fill="#94A3B8"
          fontSize={10.5}
          fontWeight="700"
          fontFamily={FONT.ui}
          letterSpacing="1px"
          textAnchor="middle"
          opacity={pulseAlpha}
        >
          {sub}
        </text>
      )}

      {children}
    </g>
  );
};

// ============================================================================
// FLOATING TIMER CAPSULE COMPONENT (WITH LOCKED OVERHEAD POSITIONING)
// ============================================================================
export interface FloatingTimerProps {
  x?: number;
  y?: number;
  pose?: Pose;
  timeText: string;
  kind?: 'safe' | 'warning' | 'danger' | 'info';
  scale?: number;
  pulse?: boolean;
  t?: number;
  heart?: boolean;
}

export const FloatingTimer: React.FC<FloatingTimerProps> = ({
  x = 0,
  y = OVERHEAD_BADGE_Y,
  pose,
  timeText,
  kind = 'danger',
  scale = 1,
  pulse = true,
  t = 0,
  heart = false,
}) => {
  return (
    <OverheadBadge
      x={x}
      y={y}
      pose={pose}
      text={timeText}
      kind={kind}
      heart={heart}
      scale={scale}
      pulse={pulse}
      t={t}
    />
  );
};

// ============================================================================
// CRUSH METER COMPONENT (0% TO 100% PINK HEART METER)
// STRICT ENFORCEMENT: Locked at least 70px above top of head/hood (y <= -326px)
// ============================================================================
export interface CrushMeterProps {
  percent: number; // 0 to 100
  label?: string; // e.g. "PURE BRO ZONE", "MUTUAL ATTRACTION", "SECRET CRUSH"
  x?: number;
  y?: number;
  pose?: Pose;
  scale?: number;
  pulse?: boolean;
  t?: number;
  tail?: boolean;
}

export const CrushMeter: React.FC<CrushMeterProps> = ({
  percent,
  label,
  x = 0,
  y = OVERHEAD_BADGE_Y,
  pose,
  scale = 1,
  pulse = true,
  t = 0,
  tail = true,
}) => {
  let renderX = x;
  let renderY = y ?? OVERHEAD_BADGE_Y;

  if (pose) {
    const anchor = overheadAnchor(pose, 70);
    renderX = anchor.x;
    renderY = anchor.y;
  } else {
    // Strict safety clamp: must be <= OVERHEAD_BADGE_Y (-326px) when in local coords
    if (renderY > OVERHEAD_BADGE_Y && renderY <= 0) {
      renderY = OVERHEAD_BADGE_Y;
    }
  }

  // Color dynamics based on crush score
  const isZero = percent === 0;
  const isHot = percent >= 90;
  const isHigh = percent >= 50;

  const strokeColor = isZero ? '#64748B' : isHot ? '#FF1493' : isHigh ? '#EC4899' : '#F472B6';
  const glowColor = isZero ? '#334155' : isHot ? '#FF007F' : isHigh ? '#DB2777' : '#FB7185';
  const heartFill = isZero ? '#94A3B8' : isHot ? '#FF1493' : '#EC4899';

  // Heartbeat pulse frequency speeds up as score rises
  const beatSpeed = 0.3 + (percent / 100) * 0.4;
  const heartScale = pulse && !isZero ? 1 + 0.16 * Math.sin(t * beatSpeed) : 1;
  const alpha = pulse ? 0.9 + 0.1 * Math.sin(t * 0.25) : 1;

  const scoreText = `${percent}%`;
  const defaultLabel = isZero
    ? 'BRO ZONE'
    : percent === 100
    ? 'SOULMATE'
    : percent >= 95
    ? 'MYSTERY THREAD'
    : percent >= 80
    ? 'DEEP CRUSH'
    : percent >= 40
    ? 'INTEREST'
    : 'CURIOUS';
  const subText = label ?? (isHot || isZero ? defaultLabel : undefined);

  const w = subText ? Math.max(145, subText.length * 10 + 60) : 135;
  const h = subText ? 46 : 36;

  return (
    <g transform={`translate(${renderX} ${renderY}) scale(${scale})`}>
      {/* Outer ambient glow */}
      <ellipse
        cx={0}
        cy={0}
        rx={w * 0.72}
        ry={h * 0.75}
        fill={glowColor}
        opacity={(isHot ? 0.45 : 0.28) * alpha}
        filter="blur(8px)"
      />

      {/* Pill background container */}
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        rx={h / 2}
        ry={h / 2}
        fill="#0A0914"
        fillOpacity={0.96}
        stroke={strokeColor}
        strokeWidth={isHot ? 3 : 2.5}
        opacity={alpha}
      />

      {/* Optional downward indicator tail pointing toward head apex */}
      {tail && (
        <polygon
          points={`-6,${h / 2 - 1} 6,${h / 2 - 1} 0,${h / 2 + 9}`}
          fill="#0A0914"
          stroke={strokeColor}
          strokeWidth={2}
          opacity={alpha}
        />
      )}

      {/* Beating Heart Icon */}
      <g transform={`translate(${-w / 2 + 24} 0) scale(${heartScale})`}>
        <path
          d="M 0 3 C -8 -7 -15 2 -6 10 L 0 16 L 6 10 C 15 2 8 -7 0 3 Z"
          fill={heartFill}
          stroke={isZero ? '#CBD5E1' : '#FFE4E6'}
          strokeWidth={1.5}
          transform="translate(0, -9)"
        />
      </g>

      {/* Percentage Score */}
      <text
        x={15}
        y={subText ? -3 : 5.5}
        fill="#FFFFFF"
        fontSize={16}
        fontWeight="900"
        fontFamily={FONT.ui}
        letterSpacing="1.5px"
        textAnchor="middle"
        opacity={alpha}
      >
        {scoreText}
      </text>

      {/* Optional Sub-Label */}
      {subText && (
        <text
          x={15}
          y={15}
          fill={isHot ? '#FFA6C9' : '#FDA4AF'}
          fontSize={10.5}
          fontWeight="800"
          fontFamily={FONT.ui}
          letterSpacing="1.2px"
          textAnchor="middle"
          opacity={alpha}
        >
          {subText}
        </text>
      )}
    </g>
  );
};

// ============================================================================
// GLOWING PINK THREAD COMPONENT (FOR CHAPTERS 4 & 5 MYSTERY THREAD)
// ============================================================================
export interface PinkThreadProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  t?: number;
  opacity?: number;
  strokeWidth?: number;
}

export const PinkThread: React.FC<PinkThreadProps> = ({
  x1,
  y1,
  x2,
  y2,
  t = 0,
  opacity = 0.9,
  strokeWidth = 3.5,
}) => {
  // Midpoint with animated catenary sag & gentle wave
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 + 35 + Math.sin(t * 0.15) * 12;
  const pathD = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;

  return (
    <g style={{ mixBlendMode: 'screen' }} opacity={opacity}>
      {/* Outer blurred halo */}
      <path d={pathD} stroke="#FF007F" strokeWidth={strokeWidth * 4} fill="none" opacity={0.35} filter="blur(6px)" />
      {/* Neon pink body */}
      <path d={pathD} stroke="#FF1493" strokeWidth={strokeWidth * 2} fill="none" opacity={0.7} />
      {/* White/golden core filament */}
      <path d={pathD} stroke="#FFF0F5" strokeWidth={strokeWidth} fill="none" strokeDasharray="14 4" />
      {/* End point heart nodes */}
      <circle cx={x1} cy={y1} r={6} fill="#FF1493" />
      <circle cx={x1} cy={y1} r={3} fill="#FFFFFF" />
      <circle cx={x2} cy={y2} r={6} fill="#FF1493" />
      <circle cx={x2} cy={y2} r={3} fill="#FFFFFF" />
    </g>
  );
};

// ============================================================================
// MACRO / CLOSEUP TIMER HUD OVERLAY
// ============================================================================
export const TimerHud: React.FC<{
  timeText: string;
  label?: string;
  t?: number;
  color?: string;
}> = ({ timeText, label = 'COUNTDOWN TO ZERO', t = 0, color = '#FF334B' }) => {
  const pulse = 0.8 + 0.2 * Math.sin((t * Math.PI) / 6);
  return (
    <g transform="translate(960 160)">
      {/* Background card */}
      <rect x={-260} y={-50} width={520} height={100} rx={18} fill="#090C14" fillOpacity={0.9} stroke={color} strokeWidth={2.5} />
      <text x={0} y={-20} fill="#8A9BB4" fontSize={14} fontWeight="700" letterSpacing="3px" textAnchor="middle" fontFamily={FONT.ui}>
        {label}
      </text>
      <text
        x={0}
        y={28}
        fill={color}
        fontSize={44}
        fontWeight="900"
        fontFamily={FONT.ui}
        letterSpacing="4px"
        textAnchor="middle"
        opacity={pulse}
      >
        {timeText}
      </text>
      {/* Corner brackets */}
      <path d="M -240 -35 L -250 -35 L -250 -25" stroke={color} strokeWidth={3} fill="none" />
      <path d="M 240 -35 L 250 -35 L 250 -25" stroke={color} strokeWidth={3} fill="none" />
      <path d="M -240 35 L -250 35 L -250 25" stroke={color} strokeWidth={3} fill="none" />
      <path d="M 240 35 L 250 35 L 250 25" stroke={color} strokeWidth={3} fill="none" />
    </g>
  );
};

// ============================================================================
// SCIENCE DIAGRAM: WHITE BEAR IRONIC PROCESS (Wegner 1987)
// ============================================================================
export const ScienceDiagramWhiteBear: React.FC<{ t: number }> = ({ t }) => {
  const wave = Math.sin((t * Math.PI) / 12);
  return (
    <g>
      {/* Blueprint background grid */}
      <rect width={1920} height={1080} fill="#0A0E18" />
      <defs>
        <pattern id="sciGrid" width={60} height={60} patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#162035" strokeWidth={1} />
        </pattern>
      </defs>
      <rect width={1920} height={1080} fill="url(#sciGrid)" />

      {/* Main Title Banner */}
      <g transform="translate(960 120)">
        <text fill="#FF8A3D" fontSize={18} fontWeight="800" letterSpacing="4px" textAnchor="middle" fontFamily={FONT.ui}>
          COGNITIVE PSYCHOLOGY // HARVARD 1987
        </text>
        <text fill="#F6EFE3" fontSize={42} fontWeight="900" letterSpacing="2px" textAnchor="middle" fontFamily={FONT.title} y={45}>
          IRONIC PROCESS THEORY (WEGNER)
        </text>
      </g>

      {/* Left Column: Conscious Operating Process (Effortful Suppression) */}
      <g transform="translate(480 340)">
        <rect x={-220} y={0} width={440} height={460} rx={16} fill="#111827" stroke="#3B82F6" strokeWidth={2} />
        <text x={0} y={45} fill="#60A5FA" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          CONSCIOUS OPERATING PROCESS
        </text>
        <text x={0} y={80} fill="#E5E7EB" fontSize={24} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          "Do Not Think Of The Bear"
        </text>

        {/* Operating Process Mental Energy Meter */}
        <text x={-180} y={140} fill="#9CA3AF" fontSize={14} fontFamily={FONT.ui}>
          MENTAL BANDWIDTH (LIMITED)
        </text>
        <rect x={-180} y={155} width={360} height={20} rx={10} fill="#1F2937" />
        <rect x={-180} y={155} width={Math.max(40, 360 - t * 4)} height={20} rx={10} fill="#3B82F6" />

        {/* Suppression Target Box */}
        <g transform="translate(0 300)">
          <circle cx={0} cy={0} r={75} fill="#1E293B" stroke="#60A5FA" strokeWidth={2} strokeDasharray="8 6" />
          {/* Stylized White Bear silhouette */}
          <path
            d="M -30 -10 Q -40 -35 -20 -35 Q -10 -25 -5 -18 Q 5 -18 10 -25 Q 30 -35 20 -10 Q 35 15 25 35 Q 0 50 -25 35 Z"
            fill="#F6EFE3"
          />
          {/* Forbidden slash */}
          <line x1={-55} y1={-55} x2={55} y2={55} stroke="#EF4444" strokeWidth={6} strokeLinecap="round" />
          <circle cx={0} cy={0} r={65} fill="none" stroke="#EF4444" strokeWidth={5} />
        </g>
      </g>

      {/* Center Connecting Neural Feedback Loop */}
      <g transform="translate(960 560)">
        {/* Animated flow arrows */}
        <path
          d={`M -180 -80 Q 0 ${-140 + wave * 20} 180 -80`}
          fill="none"
          stroke="#FF8A3D"
          strokeWidth={4}
          strokeDasharray="12 8"
        />
        <path
          d={`M 180 80 Q 0 ${140 - wave * 20} -180 80`}
          fill="none"
          stroke="#EF4444"
          strokeWidth={4}
          strokeDasharray="12 8"
        />
        <rect x={-130} y={-30} width={260} height={60} rx={12} fill="#1F1522" stroke="#FF8A3D" strokeWidth={2} />
        <text x={0} y={6} fill="#FF8A3D" fontSize={16} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          REBOUND HYPER-MONITOR
        </text>
      </g>

      {/* Right Column: Unconscious Monitoring Process (Automatic Scanning) */}
      <g transform="translate(1440 340)">
        <rect x={-220} y={0} width={440} height={460} rx={16} fill="#181119" stroke="#EF4444" strokeWidth={2} />
        <text x={0} y={45} fill="#F87171" fontSize={18} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          IRONIC MONITORING PROCESS
        </text>
        <text x={0} y={80} fill="#FEE2E2" fontSize={24} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          Hyper-Scanning For Errors
        </text>

        {/* Cortisol spike meter */}
        <text x={-180} y={140} fill="#9CA3AF" fontSize={14} fontFamily={FONT.ui}>
          CORTISOL SURGE: +400%
        </text>
        <rect x={-180} y={155} width={360} height={20} rx={10} fill="#271518" />
        <rect x={-180} y={155} width={Math.min(360, 120 + t * 6)} height={20} rx={10} fill="#EF4444" />

        {/* Inevitable Error Occurrence */}
        <g transform="translate(0 300)">
          <circle cx={0} cy={0} r={75} fill="#3B1219" stroke="#EF4444" strokeWidth={2} />
          <text x={0} y={-10} fill="#FCA5A5" fontSize={15} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
            INTRUSIVE FAILURE
          </text>
          <text x={0} y={22} fill="#EF4444" fontSize={28} fontWeight="900" textAnchor="middle" fontFamily={FONT.title}>
            INEVITABLE
          </text>
        </g>
      </g>
    </g>
  );
};

// ============================================================================
// SCIENCE DIAGRAM: FIGHTER PILOT TARGET FIXATION HUD
// ============================================================================
export const ScienceDiagramTargetFixation: React.FC<{ t: number }> = ({ t }) => {
  const pitch = Math.sin((t * Math.PI) / 15) * 15;
  const roll = Math.cos((t * Math.PI) / 20) * 4;

  return (
    <g>
      {/* Dark sky grid background */}
      <rect width={1920} height={1080} fill="#070B12" />

      {/* Horizon Pitch Ladder */}
      <g transform={`translate(960 540) rotate(${roll}) translate(0 ${pitch})`}>
        {/* Horizon bar */}
        <line x1={-420} y1={0} x2={420} y2={0} stroke="#38BDF8" strokeWidth={3} strokeDasharray="30 15" opacity={0.6} />
        {/* Pitch lines */}
        <line x1={-150} y1={-80} x2={150} y2={-80} stroke="#38BDF8" strokeWidth={2} opacity={0.4} />
        <line x1={-150} y1={80} x2={150} y2={80} stroke="#38BDF8" strokeWidth={2} opacity={0.4} />
      </g>

      {/* Target Obstacle (The Tree / Mountain) */}
      <g transform="translate(1120 480)">
        <polygon points="0,-160 -80,120 80,120" fill="#1C1824" stroke="#EF4444" strokeWidth={3} />
        {/* Target Box Locking On */}
        <rect x={-90} y={-170} width={180} height={300} fill="none" stroke="#EF4444" strokeWidth={2.5} strokeDasharray="14 8" />
        {/* Reticle brackets */}
        <path d="M -110 -190 L -80 -190" stroke="#EF4444" strokeWidth={4} />
        <path d="M -110 -190 L -110 -160" stroke="#EF4444" strokeWidth={4} />
        <path d="M 110 -190 L 80 -190" stroke="#EF4444" strokeWidth={4} />
        <path d="M 110 -190 L 110 -160" stroke="#EF4444" strokeWidth={4} />
        <text x={0} y={-205} fill="#EF4444" fontSize={16} fontWeight="800" textAnchor="middle" fontFamily={FONT.ui}>
          OBSTACLE LOCK // TARGET FIXATION
        </text>
      </g>

      {/* Flight Path Vector (Drifting straight into obstacle) */}
      <g transform="translate(960 540)">
        {/* Velocity vector reticle */}
        <circle cx={100} cy={-30} r={18} fill="none" stroke="#F59E0B" strokeWidth={3} />
        <line x1={100} y1={-48} x2={100} y2={-58} stroke="#F59E0B" strokeWidth={3} />
        <line x1={82} y1={-30} x2={72} y2={-30} stroke="#F59E0B" strokeWidth={3} />
        <line x1={118} y1={-30} x2={128} y2={-30} stroke="#F59E0B" strokeWidth={3} />
        {/* Vector line to collision */}
        <line x1={100} y1={-30} x2={160} y2={-60} stroke="#EF4444" strokeWidth={3} strokeDasharray="8 6" />
        <text x={175} y={-65} fill="#F59E0B" fontSize={14} fontWeight="800" fontFamily={FONT.ui}>
          INVOLUNTARY STEERING VECTOR
        </text>
      </g>

      {/* Top Banner HUD Data */}
      <g transform="translate(960 90)">
        <rect x={-360} y={-35} width={720} height={70} rx={14} fill="#0B1324" fillOpacity={0.9} stroke="#38BDF8" strokeWidth={2} />
        <text x={0} y={-5} fill="#38BDF8" fontSize={15} fontWeight="800" letterSpacing="3px" textAnchor="middle" fontFamily={FONT.ui}>
          AVIATION MEDICINE // HIGH-SPEED TARGET FIXATION
        </text>
        <text x={0} y={22} fill="#EF4444" fontSize={18} fontWeight="900" letterSpacing="1px" textAnchor="middle" fontFamily={FONT.title}>
          ATTENTION LOCK-ON OVERRIDES MOTOR INHIBITION
        </text>
      </g>

      {/* Left HUD: Speed / G-Force Ladder */}
      <g transform="translate(180 540)">
        <rect x={-80} y={-220} width={160} height={440} rx={12} fill="#091120" stroke="#38BDF8" strokeWidth={1.5} />
        <text x={0} y={-180} fill="#38BDF8" fontSize={14} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          IAS KNOTS
        </text>
        <text x={0} y={-130} fill="#F6EFE3" fontSize={32} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
          480
        </text>
        <line x1={-60} y1={-100} x2={60} y2={-100} stroke="#1E293B" strokeWidth={2} />
        <text x={0} y={-60} fill="#EF4444" fontSize={14} fontWeight="700" textAnchor="middle" fontFamily={FONT.ui}>
          CORTISOL
        </text>
        <text x={0} y={-10} fill="#EF4444" fontSize={32} fontWeight="900" textAnchor="middle" fontFamily={FONT.ui}>
          +400%
        </text>
      </g>
    </g>
  );
};
