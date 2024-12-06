import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bmi: { fontSize: 16 },
    deleteButton: { color: "red" },
    emptyText: { textAlign: "center", marginTop: 20, fontSize: 16 },
});

const BMIList = ({ bmiRecords, deleteRecord, editRecord }) => {
    return (
        <View style={styles.container}>
            {bmiRecords.length === 0 ? (
                <Text style={styles.emptyText}>No BMI records found. Add one to get started!</Text>
            ) : (
                <FlatList
                    data={bmiRecords}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.itemContainer}>
                            <TouchableOpacity onPress={() => editRecord(index)}>
                                <Text style={styles.bmi}>
                                    BMI: {item.bmi.toFixed(2)} - {item.category}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteRecord(index)}>
                                <Text style={styles.deleteButton}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
};



export default BMIList;
