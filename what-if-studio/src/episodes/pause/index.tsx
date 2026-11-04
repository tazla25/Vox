import React from 'react';
import { defineEpisode, Timeline, LookDef, HudChip } from '../../engine';
import timeline from './timeline.json';
import { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16 } from './shots';

// The power's look: when paused, picture takes on a cool cyan freeze tint, high contrast, and a blinking PAUSE HUD chip.
const pauseLook: LookDef = {
  grade: (lv) => `saturate(${1 - 0.25 * lv}) contrast(${1 + 0.15 * lv}) hue-rotate(${14 * lv}deg) brightness(${1 + 0.05 * lv})`,
  Overlay: ({ f }) => <HudChip f={f} label="PAUSE" icon="pause" />,
};

export const pause = defineEpisode('Pause', {
  timeline: timeline as Timeline,
  shots: { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16 },
  looks: { pause: pauseLook },
});
