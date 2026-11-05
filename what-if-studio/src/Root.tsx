import React from 'react';
import { Composition } from 'remotion';
import './engine/fonts';
import { STUDIO } from './studio.config';
import { EPISODES } from './episodes';
import { CastSheet } from './CastSheet';
import { StudioFixedCheck } from './StudioFixedCheck';
import { CrushCh1, CrushCh2, CrushCh3, CrushCh4, CrushCh5 } from './episodes/crush';

// Every episode gets two compositions: <Id> (the film) and <Id>Board (one frame per shot, at its key frame, for the
// storyboard). Cast renders the cast sheet.
//   npx remotion studio src/index.ts --port 3430

export const Root: React.FC = () => {
  const common = { width: STUDIO.width, height: STUDIO.height, fps: STUDIO.fps };
  return (
    <>
      {EPISODES.map((e) => (
        <React.Fragment key={e.id}>
          <Composition id={e.id} component={e.Main} durationInFrames={Math.max(1, e.total)} {...common} />
          <Composition id={`${e.id}Board`} component={e.Board} durationInFrames={Math.max(1, e.shotCount)} {...common} />
        </React.Fragment>
      ))}
      <Composition id="Cast" component={CastSheet} durationInFrames={1} {...common} />
      <Composition id="StudioFixedCheck" component={StudioFixedCheck} durationInFrames={1} {...common} />
      {/* 5-Chapter Long Form YouTube Episode: "What If You Could See Who Has a Crush on You?" */}
      <Composition id="CrushCh1" component={CrushCh1} durationInFrames={2570} {...common} />
      <Composition id="CrushCh2" component={CrushCh2} durationInFrames={2129} {...common} />
      <Composition id="CrushCh3" component={CrushCh3} durationInFrames={2257} {...common} />
      <Composition id="CrushCh4" component={CrushCh4} durationInFrames={2036} {...common} />
      <Composition id="CrushCh5" component={CrushCh5} durationInFrames={2377} {...common} />
    </>
  );
};
