import React from 'react';
import LikeButton from './components/LikeButton';
import Rating from './components/Rating';
import ImageSliderWithThumb from './components/ImageSliderWithThumb';
import TabsSection from './components/TabsSection';
import SingleAccordion from './components/SingleAccordion';
import MultiAccordion from './components/MultiAccordion';

function App() {
  return (
    <div>
    <div style={{ padding: 20 }}>
      <h2>LikeButton</h2>
      <LikeButton />

      <h2 style={{ marginTop: 30 }}>Rating</h2>
      <Rating />
    </div>
    <br></br>
    <div style={{ padding: 30 }}>
      <ImageSliderWithThumb />
      <TabsSection />
    </div>
    <br></br>
    <div style={{ display: 'flex', gap: '40px', padding: '30px' }}>
      <div>
        <h2>Single Accordions</h2>
        <SingleAccordion />
      </div>
      <div>
        <h2>Multi Accordions</h2>
        <MultiAccordion />
      </div>
    </div>
    </div>
  );
}

export default App;
