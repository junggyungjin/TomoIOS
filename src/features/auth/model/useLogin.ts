import { Linking, Alert } from "react-native";

export const useLoginViewmodel = () => {
    // TODO: Day 3 & Day 4에 실제 로그인/문의 로직 연결 예정
    const handleGoogleLogin = () => {
        console.log('Google Login Button Pressed');
    };

    const handleEmailInquiry = async () => {
        const toEmail = 'tomo.official.dev@gmail.com';
        const subject = 'Tomo 앱 문의사항';
        const body = '여기에 문의하실 내용을 적어주세요.'

        const mailtoUrl = `mailto:${toEmail}?subject=${subject}&body=${body}`;

        try {
            const canOpen = await Linking.canOpenURL(mailtoUrl);

            if (canOpen) {
                await Linking.openURL(mailtoUrl);
            } else {
                // 한글 인코딩 문제로 canOpenURL이 false를 반환할 경우를 대비해,
                // 인코딩된 URL로 한 번 더 시도하는 풀백 로직 추가
                const encodedMailtoUrl = `mailto:${toEmail}?subject${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                const canOpenEncoded = await Linking.canOpenURL(encodedMailtoUrl);

                if (canOpenEncoded) {
                    await Linking.openURL(encodedMailtoUrl);
                } else {
                    Alert.alert('오류', '이메일 앱을 열 수 없습니다. 기기에 이메일 앱이 설치되어 있는지 확인해주세요.');
                }
            }
        } catch (error) {
            console.error('Email Inquiry Error:', error);
            Alert.alert('오류', '이메일 앱을 실행하는 도중 문제가 발생했습니다.');
        }
    };

    return {
        handleGoogleLogin,
        handleEmailInquiry,
    };
}