import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";


const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: {
        borderWidth: 1,
        marginVertical: 10,
        padding: 8,
        borderRadius: 5,
        borderColor: "#ddd",
    },
});

const EditBMIScreen = ({ route, navigation }) => {
    const { index, record, bmiRecords, setBmiRecords } = route.params;
    const [height, setHeight] = useState((record.height * 100).toString());
    const [weight, setWeight] = useState(record.weight.toString());

    const saveChanges = () => {
        if (!height || !weight) {
            Alert.alert("Error", "Please enter both height and weight.");
            return;
        }

        const heightInMeters = parseFloat(height) / 100;
        const updatedBMI = parseFloat(weight) / (heightInMeters * heightInMeters);

        let updatedCategory = "";
        if (updatedBMI < 18.5) updatedCategory = "Underweight";
        else if (updatedBMI < 25) updatedCategory = "Healthy weight";
        else if (updatedBMI < 30) updatedCategory = "Overweight";
        else if (updatedBMI < 35) updatedCategory = "Class 1 obesity";
        else if (updatedBMI < 40) updatedCategory = "Class 2 obesity";
        else updatedCategory = "Class 3 obesity (severe obesity)";

        const updatedRecord = { ...record, height: heightInMeters, weight: parseFloat(weight), bmi: updatedBMI, category: updatedCategory };
        const updatedRecords = [...bmiRecords];
        updatedRecords[index] = updatedRecord;
        setBmiRecords(updatedRecords);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text>Height (cm):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
                placeholder="Enter height in cm"
            />
            <Text>Weight (kg):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                placeholder="Enter weight in kg"
            />
            <Button title="Save Changes" onPress={saveChanges} />
        </View>
    );
};


export default EditBMIScreen;
