import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Image, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Bai6 = () => {
    const mouseAnim = useRef(new Animated.Value(0)).current;
    const catAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        mouseRun();
        catRun();
        const interval = setInterval(checkCollision, 200);
        return () => clearInterval(interval);
    }, []);

    const mouseRun = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(mouseAnim, {
                    toValue: width - 70,
                    duration: 4500,
                    useNativeDriver: false
                }),
                Animated.timing(mouseAnim, {
                    toValue: 0,
                    duration: 4500,
                    useNativeDriver: false
                })
            ])
        ).start();
    };

    const catRun = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(catAnim, {
                    toValue: height - 150,
                    duration: 2000,
                    useNativeDriver: false
                }),
                Animated.timing(catAnim, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: false
                })
            ])
        ).start();
    };

    // const checkCollision = () => {
    //     const mousePositionX = mouseAnim._value; // Lấy vị trí hiện tại của chuột trên trục x
    //     const mousePositionY = 100; // Vị trí cố định của chuột trên trục y
    //     const catPositionX = 150; // Vị trí cố định của mèo trên trục x
    //     const catPositionY = catAnim._value; // Lấy vị trí hiện tại của mèo trên trục y
    
    //     const mouseLeft = mousePositionX;
    //     const mouseRight = mousePositionX + 70;
    //     const mouseTop = mousePositionY;
    //     const mouseBottom = mousePositionY + 70;
    
    //     const catLeft = catPositionX;
    //     const catRight = catPositionX + 100;
    //     const catTop = catPositionY;
    //     const catBottom = catPositionY + 100;
    
    //     // Kiểm tra va chạm
    //     if (
    //         mouseLeft < catRight &&
    //         mouseRight > catLeft &&
    //         mouseTop < catBottom &&
    //         mouseBottom > catTop
    //     ) {
    //         console.log('Va chạm');
    //         stopAnimations();
    //     }

    // };

    const stopAnimations = () => {
        mouseAnim.stopAnimation();
        catAnim.stopAnimation();
    };



    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    left: mouseAnim,
                    top: 100,
                    position: 'absolute',
                    width: 70,
                    height: 70,
                    backgroundColor: 'red',
                    zIndex: 1
                }}>
                <Image resizeMode="contain" style={{ width: 70, height: 70 }} source={require('../assets/mouse.png')} />
            </Animated.View>
            <Animated.View style={{
                bottom: catAnim,
                left: 150,
                position: 'absolute',
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                zIndex: 1
            }}>
                <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={require('../assets/kitty.png')} />
            </Animated.View>
        </View>
    )
}
export default Bai6;
