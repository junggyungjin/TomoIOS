import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { VideoBackgroound } from '@/shared/ui/VideoBackground';

export const LoginPage = () => {
    // TODO: Day 3 & Day 4에 실제 로그인/문의 로직 연결 예정
    const handleGoogleLogin = () => {
        console.log('Google Login Button Pressed');
    };

    const handleEmailInquiry = () => {
        console.log('Email Inquiry Button Pressed');
    };

    return (
        <View style={styles.container}>
            {/* 비디오 배경 렌더링*/}
            <VideoBackgroound />

            {/* SafeAreView로 감싸서 노치 디자인 기기 대응*/}
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>

                    {/* 상단 타이틀 영역*/}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Tomo</Text>
                        <Text style={styles.subtitle}>Welcom to our app</Text>
                    </View>

                    {/* 하단 버튼 영역*/}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.googleButton]}
                            onPress={handleGoogleLogin}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.googleButtonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.inquiryButton]}
                            onPress={handleEmailInquiry}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.inquiryButtonText}>문의하기</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    safeArea: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between', // 위아래로 요소 배치
        paddingHorizontal: 24,
        paddingVertical: 40,
    },
    titleContainer: {
        marginTop: 60,
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        color: '#E0E0E0',
    },
    buttonContainer: {
        width: '100%',
        gap: 16,
    },
    button: {
        width: '100%',
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: '#FFFFFF',
    },
    googleButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
    inquiryButton: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inquiryButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        textDecorationLine: 'underline',
        opacity: 0.8,
    },
});