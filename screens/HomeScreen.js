import React, { useState } from "react";
import { View, Button, Alert, StyleSheet } from "react-native";
import BMIList from "../components/BMIList";

const HomeScreen = ({ navigation }) => {
    const [bmiRecords, setBmiRecords] = useState([]);

    const calculateSummary = () => {
        if (bmiRecords.length === 0) {
            Alert.alert("No Records", "Please add some BMI records first.");
            return;
        }
        const totalBMI = bmiRecords.reduce((sum, record) => sum + record.bmi, 0);
        const avgBMI = (totalBMI / bmiRecords.length).toFixed(2);
        Alert.alert("Summary", `Average BMI: ${avgBMI}`);
    };

    const deleteRecord = (index) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this record?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        const updatedRecords = bmiRecords.filter((_, i) => i !== index);
                        setBmiRecords(updatedRecords);
                    },
                },
            ]
        );
    };

    const editRecord = (index) => {
        navigation.navigate("Edit BMI", { index, record: bmiRecords[index], bmiRecords, setBmiRecords });
    };

    return (
        <View style={styles.container}>
            <BMIList
                bmiRecords={bmiRecords}
                deleteRecord={deleteRecord}
                editRecord={editRecord} // Pass the editRecord function to the BMIList component
            />
            <Button
                title="Add BMI"
                onPress={() => navigation.navigate("Add BMI", { setBmiRecords, bmiRecords })}
            />
            <Button title="Calculate Summary" onPress={calculateSummary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
});

export default HomeScreen;
