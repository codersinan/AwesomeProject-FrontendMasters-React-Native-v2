import React, { useState, useCallback, useEffect } from 'react';

import { FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';

const SOLARIZED = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
    { paletteName: 'Solarized', colors: SOLARIZED },
    { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
    { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
    const [colorPalettes, setColorPalettes] = useState([]);

    const fetchColorPalettes = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes', {});
        if (result.ok) {
            const palettes = await result.json();
            setColorPalettes(palettes);
        }

    }, []);

    useEffect(() => {
        fetchColorPalettes()
    }, []);


    return (
        <FlatList
            style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => {
                        navigation.navigate('ColorPalette', item);
                    }}
                    colorPalette={item}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
    }
});
export default Home;