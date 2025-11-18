// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AutoSlider from './components/AutoSlider/AutoSlider';
import CountdownSection from './components/CountdownSection/CountdownSection';
import Form from './components/Form/Form';
import Terms from './components/Terms/Terms';

// Pages
const Home = () => (
  <>
    <AutoSlider />
    <CountdownSection />
  </>
);

const Register = () => <Form />;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;