import { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image,
} from 'react-native';

function GoalInput(props) {
    const [goal, setEnteredGoalText] = useState('');

    function goalInputHandler(value) {
        setEnteredGoalText(value);
    }

    function addGoal() {
        props.onAddGoal(goal);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.modal}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your goal here"
                    onChangeText={goalInputHandler}
                    value={goal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoal}
                            color="#FB607F"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color="#9E9E9E"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderColor: '#9E9E9E',
        borderRadius: 6,
        borderWidth: 1,
        color: '#2c3e50',
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
