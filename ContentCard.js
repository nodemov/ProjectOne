import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ContentCard = ({ text, Material }) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={{ padding: 10 }}>
                    <MaterialIcons name={Material} size={24} color="black" />
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={styles.cardContent} numberOfLines={1}> {text}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: "#d5d8de",
        padding: 20,
        marginBottom: 8,
        borderRadius: 15,
        // textAlign:"center"

    },
    cardContent: {
        fontSize: 18,
    },
    logoProfile: {
        resizeMode: "contain",
        marginBottom: 12,
        borderRadius: 180
    }
});

export default ContentCard;


