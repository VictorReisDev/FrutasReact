import React from 'react'
import {Image, View, StyleSheet, FlatList} from 'react-native'
import Texto from '../../../componentes/Texto'

export default function Item ({item:{nome,imagem}}){

return <View style={estilos.item} key={nome}>
    <Image style={estilos.imagem} source={imagem}/>
    <Texto  style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({

    item: {
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems:'center',

    },

    imagem: {
        width: 46,
        height: 46,
    },

    nome: {
        marginLeft:11,
        fontSize: 16,
        lineHeight: 26,
        color: '#464646'

    }

})

