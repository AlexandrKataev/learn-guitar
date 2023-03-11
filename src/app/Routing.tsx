import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NotePage, IntervalPage, ChordPage, ScalePage } from 'pages/index';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NotePage />} />
      <Route path="/interval" element={<IntervalPage />} />
      <Route path="/chord" element={<ChordPage />} />
      <Route path="/scale" element={<ScalePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
