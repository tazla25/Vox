import React from 'react';
import { defineEpisode, Timeline, LookDef, HudChip } from '../../engine';
import timeline from './timeline.json';
import { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16 } from './shots';

const panicLook: LookDef = {
  grade: (lv) => `contrast(${1 + 0.15 * lv}) saturate(${1 - 0.2 * lv}) brightness(${1 + 0.05 * lv})`,
  Overlay: ({ f }) => <HudChip f={f} label="PANIC SPIRAL" icon="dot" />,
};

export const ch4 = defineEpisode('Ch4', {
  timeline: timeline as Timeline,
  shots: { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16 },
  looks: { panic: panicLook },
});
