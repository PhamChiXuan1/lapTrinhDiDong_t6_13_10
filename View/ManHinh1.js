import { Image, Text, Pressable, View, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";

export const ManHinh1 = function({navigation}){
    const sourceImage = [
        {
            id: 0,
            path: require("../assets/img/vs_silver.png"),
        },
        {
            id: 1,
            path: require("../assets/img/vs_red.png"),
        },
        {
            id: 2,
            path: require("../assets/img/vs_black.png"),
        },
        {
            id: 3,
            path: require("../assets/img/vs_blue.png"),
        },
    ];
    const [imageSource, setImageSource] = useState(sourceImage[3]);
    const updateImageSource = function (date) {
        setImageSource(date);
    };
    
    return(
        <SafeAreaView style={{flex: 1, paddingTop: 20}}>
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image style={{width:300,height:360}}
                    source={imageSource.path}/>
                </View>
                <View style={{flex: 4, paddingLeft: 20}}>
                    <View style={styles.containerTop}>
                        <Text style={styles.containerTop2}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    <View style={{flexDirection: "row", height: 30}}>
                            {Array.from({length: 5}).map(() => {
                                return (
                                    <Image
                                    style={{width: 30, height: 25}}
                                    source={require("../assets/img/star.png")}/>
                                );
                            })}
                            <Text style={styles.textStar}>(Xem 828 đánh giá)</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.price}>1.790.000 đ</Text>
                            <View style={{flexDirection: "row", height: 21, marginLeft: 60}}>
                                <Text style={styles.priceDelete}>1.790.000 đ</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", height: 20}}>
                            <Text style={styles.textNote}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                            <Image 
                                style={{width: 20, height: 20}}
                                source={require("../assets/img/Group.png")}/>
                        </View>
                        <Pressable style={styles.btn}>
                            <View>
                                <Pressable
                                    onPress={() => {
                                        navigation.navigate("manHinh2", {
                                            data: {imageSource, updateImageSource},
                                        });
                                    }}
                                    style={styles.btnSelect}
                                >
                                    <Text style={styles.lblBtn}>4 MÀU-CHỌN MÀU</Text>
                                    <Image
                                        style={{width: 12, height: 14,}}
                                        resizeMode="contain"
                                        source={require("../assets/img/vector.png")}
                                    ></Image>
                                </Pressable>
                            </View>
                        </Pressable>
                    </View>
                        <View style={{flex: 6, justifyContent: "flex-end"}}>
                            <Pressable style={styles.btnBottom}>
                                <Text style={styles.lblBtnBottom}>CHỌN MUA</Text>
                            </Pressable>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        flex: 5,
        width: "100%",
        alignItems: "center",
    },
    containerTop: {
        flex: 13,
        justifyContent: "space-between",
    },
    containerTop2: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: 12,
        width: "80%",
    },
    textStar: {
        fontSize: 17,
        fontWeight: "400",
        lineHeight: 20,
        lineHeight: 30,
        marginLeft: 40,
    },
    price: {
        fontSize: 19,
        fontWeight: "bold",
        lineHeight: 21,
    },
    priceDelete: {
        fontSize: 17,
        fontWeight: "700",
        lineHeight: 21,
        color: "#00000094",
        textDecorationLine: "line-through",
    },
    textNote: {
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 20,
        color: "#FA0000",
        marginRight: 10,
    },
    lblBtn: {
        lineHeight: 34,
        fontSize: 15,
        fontWeight: 400,
        width: "90%",
        textAlign: "center",
    },
    btnSelect:{
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
    },
    btn: {
        lineHeight: 34,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#00000075",
        borderRadius: 10,
        marginRight: 15,
    },
    btnBottom: {
        backgroundColor: "#EE0A0A",
        marginTop: "auto",
        borderRadius: 12,
    },
    lblBtnBottom: {
        textAlign: "center",
        color: "#fff",
        padding: 12,
        fontSize: 20,
        fontWeight: "500",
    },
})