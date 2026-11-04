import React from 'react';
import { defineEpisode, Timeline, LookDef, HudChip } from '../../engine';
import timeline from './timeline.json';
import { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14 } from './shots';

const releaseLook: LookDef = {
  grade: (lv) => `contrast(${1 + 0.1 * lv}) brightness(${1 + 0.1 * lv})`,
  Overlay: ({ f }) => <HudChip f={f} label="PARADOX RESOLVED" icon="dot" />,
};

export const ch5 = defineEpisode('Ch5', {
  timeline: timeline as Timeline,
  shots: { S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14 },
  looks: { release: releaseLook },
});
