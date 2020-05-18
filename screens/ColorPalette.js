import React from 'react';

import { FlatList, Text, StyleSheet } from 'react-native';
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
    const { colors, palatteName } = route.params;
    return (
        <FlatList
            style={styles.container}
            data={colors}
            // keyExtractor={item => item.colorName}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
            ListHeaderComponent={<Text style={styles.text}>{palatteName}</Text>}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default ColorPalette;