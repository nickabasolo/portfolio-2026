
import React from 'react';
import { TextContent, Visual } from './CaseStudyPrimitives';

const SideProjectPoetry: React.FC = () => {
  return (
    <div className="space-y-12">
      <TextContent>
        <p className="text-2xl font-serif text-stone-900 italic">Complex thoughts, simple beats.</p>
        <p>Single Syllable is a browser-based word game inspired by the tabletop classic 'Poetry for Neanderthals'. The design challenge was to build a UI that <em>felt</em> like the constraint: heavy, simple, and unforgiving. Using massive, bold typography, the interface forces you to explain complex topics using only one-syllable words.</p>
      </TextContent>

      <Visual label="Single Syllable Game Interface" bg="bg-amber-100" />

      <TextContent>
        <p>The app features a real-time syllable-counting engine that provides immediate feedback. If a player types a multi-syllable word, the entire UI 'breaks' through haptic shakes and sharp color shifts, creating a physical sense of making a mistake. It's since been used as a playful teaching aid for ESL students to practice linguistic rhythm.</p>
      </TextContent>
    </div>
  );
};

export default SideProjectPoetry;
