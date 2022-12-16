import { StyleSheet, Text } from "react-native";


export default function Texto({ children, style }) {
    let estilo = style?.Texto;
    if (style?.fontWeigtht == 'bold') {
        estilo = styles.textoNegrito;
    }

    return (
        <Text style={[style, estilo]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: 'normal',
    },

})