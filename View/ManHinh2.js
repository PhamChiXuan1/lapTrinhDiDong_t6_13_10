import { Image, View, SafeAreaView, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export const ManHinh2 = function({navigation, route}){
    const box = ["#C5F1FB", "#F30D0D", "#000000", "#234896"];
    const sourceImage = [
        {
            id: 0,
            name:"Xanh đậm",
            code:"#234896",
            path: require("../assets/img/vs_silver.png"),
            supplier:"Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
        {
            id: 1,
            name:"Đỏ",
            code:"#F30D0D",
            path: require("../assets/img/vs_red.png"),
            supplier:"Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
        {
            id: 2,
            name:"Đen",
            code:"#000000",
            path: require("../assets/img/vs_black.png"),
            supplier:"Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
        {
            id: 3,
            name:"Xanh nhạt",
            code:"#C5F1FV",
            path: require("../assets/img/vs_blue.png"),
            supplier:"Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
    ];
    const index = route.params.data.imageSource.id;
    const [imageSource, setImageSource] = useState(sourceImage[index]);

    const handLerImageSourceChange = function (index){
        setImageSource(sourceImage[index]);
        route.params.data.updateImageSource(sourceImage[index]);
    }
    return(
        <SafeAreaView style={{flex: 1, padding: 20}}>
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image
                        style={{width: 112, height: 132}}
                        source={imageSource.path}
                        resizeMode="contain"
                    ></Image>
                    <View style={{flex: 1, paddingHorizontal: 15}}>
                        <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                        <View style={{flexDirection: "row", alignItems: "center", marginTop: 6}}>
                            <Text style={{fontSize:15}}>Màu: </Text>
                            <Text style={{fontWeight: "bold", fontSize: 15}}>{imageSource.name}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", marginTop: 6}}>
                            <Text style={{fontSize:15}}>Cung cấp bởi: </Text>
                            <Text style={{fontWeight: "bold", fontSize: 15}}>{imageSource.supplier}</Text>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{fontSize:18, fontWeight: "bold", marginTop: 10}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: "vnd"}).format(imageSource.price)}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerTop}>
                    <Text style={styles.lblBottom}>Chọn một màu bên dưới:</Text>
                    <View style={{justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                        <View>
                            {box.map((e, index) => {
                                return(
                                    <Pressable
                                        onPress={() => {
                                            handLerImageSourceChange(index);
                                        }}
                                        style={[styles.box, {backgroundColor: e}]}
                                   > </Pressable>
                                )
                            })}
                        </View>
                    </View>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("manHinh1");
                        }}
                        style={styles.btn}
                    >
                        <Text style={styles.lblBtn}>XONG</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        flex: 3, 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerTop: {
        backgroundColor: "#C4C4C4",
        padding: 10,
        flex: 7,
        justifyContent: "space-between",
    },
    lblTitle: {
        fontSize: 15,
        marginTop: 12,
        width: "80%",
        fontWeight: "500",
    },
    lblBottom: {
        fontSize: 18,
        fontWeight: "500",
    },
    box: {
        width: 85,
        height: 85,
        marginVertical: 7,
    },
    btn: {
        height: 44,
        borderRadius: 10,
        backgroundColor: "#1952E294",
        paddingHorizontal: 20,
    },
    lblBtn: {
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 44,
        textAlign: "center",
        color: "#ffff",
    },
});