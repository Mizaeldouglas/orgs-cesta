import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Botao } from "../../../components/Botao";
import Texto from '../../../components/Texto';

export const Detalhes = ({
    nome,
    logoFazenda,
    nomeFazenda,
    descricao,
    preco,
    botao
}) => {
    return (
        <>
            <Texto style={styles.nome}>{nome}</Texto>
            <View style={styles.fazenda} >
                <Image source={logoFazenda} style={styles.imagemFazenda} />
                <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={styles.descricao}>{descricao}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao >{botao}</Botao>
        </>
    )
}

const styles = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },


})