import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomLogoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomLogo: {
    width: 60,
    height: 35,
  },
  userCard: {
    borderRadius: 25,
    padding: 35,
    marginTop: 70,
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
    fontSize: 16,
    color: "#ffffff",
    opacity: 0.75,
    fontFamily: "Maitree_400Regular",
  },
  userCardFreeUser: {
    fontSize: 13,
    color: "#FBAF00",
    opacity: 0.75,
    fontFamily: "Maitree_400Regular",
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
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    minWidth: 80,
    minHeight: 35,
  },
  sliderItemLabelActive: {
    backgroundColor: "#171717",
    borderColor: "#A57404",
  },
  sliderItemLabelActiveText: {
    color: "background: rgba(251, 175, 0, 1)",
    fontFamily: "Maitree_400Regular",
    fontSize: 11,
  },
});

export default styles;
