
import { Dimensions, Image, StyleSheet } from "react-native";
import topo from "../../../../assets/topo.png";
import Texto from "../../../components/Texto";

const width = Dimensions.get('screen').width;

export const Topo = ({titulo}) => {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Texto style={styles.titulo}>{ titulo }</Texto>

        </>
    )
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFF",
        fontWeight: "bold",
        padding: 16
    },

})