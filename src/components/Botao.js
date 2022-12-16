import { StyleSheet,TouchableOpacity } from "react-native"
import Texto from './Texto';

export const Botao = ({children}) => {

    return (
        <>
            <TouchableOpacity style={styles.botao} onPress={() => { }}>
                <Texto style={styles.textoBotao}>{children}</Texto>
            </TouchableOpacity>
        </>
    )

}

const styles = StyleSheet.create({

    botao: {
        margin: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },

})