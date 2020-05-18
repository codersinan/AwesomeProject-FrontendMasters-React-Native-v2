import React from 'react';

import { TouchableOpacity, Text, StyleSheet, FlatList, View } from "react-native";

const PalettePreview = ({ handlePress, colorPalette }) => {

    console.log({ colorPalette });

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                style={styles.list}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    list: {
        marginBottom: 20,
        flexDirection: 'row'
    },
    box: {
        height: 30,
        width: 30,
        marginRight: 10
    }
})
export default PalettePreview;
