import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const AddBMIScreen = ({ route, navigation }) => {
    const { setBmiRecords, bmiRecords } = route.params;
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

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

    const calculateBMI = () => {
        if (!height || !weight) {
            Alert.alert("Error", "Please enter both height and weight.");
            return;
        }

        const heightInMeters = parseFloat(height) / 100;
        const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);

        let category = "";
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Healthy weight";
        else if (bmi < 30) category = "Overweight";
        else if (bmi < 35) category = "Class 1 obesity";
        else if (bmi < 40) category = "Class 2 obesity";
        else category = "Class 3 obesity (severe obesity)";

        const newRecord = { height: heightInMeters, weight: parseFloat(weight), bmi, category, date: new Date().toLocaleDateString() };
        setBmiRecords([...bmiRecords, newRecord]);

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
            <Button title="Add BMI" onPress={calculateBMI} />
        </View>
    );
};



export default AddBMIScreen;
