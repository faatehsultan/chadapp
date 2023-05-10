import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userCard: {
        borderRadius: 25,
        padding: 35,
        marginTop: 80,
    },
    userCardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    userCardTextContainer: {
        marginLeft: 15,
    },
    userCardName: {
        fontSize: 11,
        color: "#ffffff",
        opacity: 0.75,
        fontFamily: "Maitree400",
        marginBottom: 3,
    },
    userCardFreeUser: {
        fontSize: 9,
        color: "#FBAF00",
        opacity: 0.75,
        fontFamily: "Maitree400",
    },
    avatarBasic: {
        backgroundColor: "background: rgba(214, 149, 0, 1)",
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    sliderWrapper: {
        position: "relative",
    },
    sliderContainer: {
        flexDirection: "row",
        width: "100%",
        overflow: "hidden",
    },
    sliderEndFade: {
        position: "absolute",
        height: "100%",
        width: 50,
        right: 0,
    },
    sliderItem: {
        marginHorizontal: 5,
    },
    sliderItemBar: {
        backgroundColor: "#735000",
        height: 2,
        width: "100%",
        marginTop: 20,
    },
    sliderItemLabel: {
        backgroundColor: "#171717",
        borderColor: "#171717",
        borderWidth: 0.5,
        color: "#171717",
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: 8,
        borderRadius: 20,
    },
    sliderItemLabelActive: {
        backgroundColor: "#171717",
        borderColor: "#A57404",
        borderWidth: 0.5,
        color: "background: rgba(251, 175, 0, 1)",
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: 8,
        borderRadius: 20,
    },
});

export default styles;
