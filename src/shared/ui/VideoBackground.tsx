import React from "react";
import { StyleSheet, View } from "react-native";
import Video from "react-native-video";

interface VideoBackgroundProps {
    source?: any; // require('../assets/videos/background.mp4') 형태로 전달
}

export const VideoBackgroound = ({ source }: VideoBackgroundProps) => {
    return (
        <View style={StyleSheet.absoluteFill}>
            <Video
                source={source || require('../../shared/assets/videos/auth_background.mp4')}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"   // 화면에 꽉 차게 비율 조정
                repeat={true}        // 무한 반복 재생
                muted={true}         // 소리 음소거
                ignoreSilentSwitch="obey"  // 기기의 무음 모드 설정 따름 (비디오 자체에 소리가 없어도 설정 권장)
            />
            {/* 어두운 오버레이를 추가하여 비디오 위에 올라갈 텍스트/버튼이 잘 보이도록 함 */}
            <View style={styles.overlay} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
});

