import React from 'react';
import { defineEpisode, Timeline, LookDef, HudChip } from '../../engine';
import timeline from './timeline.json';
import { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16 } from './shots';

const scienceLook: LookDef = {
  grade: (lv) => `contrast(${1 + 0.15 * lv}) brightness(${1 + 0.05 * lv})`,
  Overlay: ({ f }) => <HudChip f={f} label="SCIENCE TWIST" icon="dot" />,
};

export const ch3 = defineEpisode('Ch3', {
  timeline: timeline as Timeline,
  shots: { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16 },
  looks: { science: scienceLook },
});
