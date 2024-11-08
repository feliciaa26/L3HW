// MyApp.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar, Image, Button, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const correctAnswers = {
        answer1: 'Crocodile',
        answer2: 'Owl',
        answer3: 'Tiger',
    };

    const handleSubmit = () => {
        let score = 0;
        if (answer1 === correctAnswers.answer1) score++;
        if (answer2 === correctAnswers.answer2) score++;
        if (answer3 === correctAnswers.answer3) score++;

        Alert.alert(`You got ${score} out of 3 correct answers!`);
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.headerText}>Welcome to the Animal Quiz</Text>

            <View style={styles.quiz}>
                <Image source={require("./img/crocodile.jpg")} style={styles.image} />
                <Text style={styles.question}>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setAnswer1(value)}
                    items={[
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Bird', value: 'Bird' },
                        { label: 'Dog', value: 'Dog' },
                    ]}
                />
            </View>

            <View style={styles.quiz}>
                <Image source={require("./img/owl.jpg")} style={styles.image} />
                <Text style={styles.question}>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setAnswer2(value)}
                    items={[
                        { label: 'Cat', value: 'Cat' },
                        { label: 'Owl', value: 'Owl' },
                        { label: 'Turtle', value: 'Turtle' },
                    ]}
                />
            </View>

            <View style={styles.quiz}>
                <Image source={require("./img/tiger.jpg")} style={styles.image} />
                <Text style={styles.question}>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setAnswer3(value)}
                    items={[
                        { label: 'Peacock', value: 'Peacock' },
                        { label: 'Tiger', value: 'Tiger' },
                        { label: 'Zebra', value: 'Zebra' },
                    ]}
                    style={styles.picker}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Submit Answers" onPress={handleSubmit} color="#4CAF50" />
            </View>
        </ScrollView>
    );
};

export default MyApp;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'lightpink',
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: 'black',
    },
    quiz: {
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
    },
    question: {
        fontSize: 18,
        color: '#555',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    buttonContainer: {
        marginVertical: 20,
        alignItems: 'center',
    }
});

