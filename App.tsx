import React from 'react';
import { StatusBar } from 'react-native';
import { LoginPage } from '@/pages/auth/ui/LoginPage';

const App = () => {
  return (
    <>
      {/* 상태바를 투명하게 만들고 텍스트 색상을 밝게 설정 {어두운 비디오 배경에 맞춤} */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LoginPage />
    </>
  );
};

export default App;
