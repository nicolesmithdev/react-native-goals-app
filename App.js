import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [modal, setModalIsVisible] = useState(false);
    const [goals, setCourseGoals] = useState([]);

    function openModal() {
        setModalIsVisible(true);
    }

    function closeModal() {
        setModalIsVisible(false);
    }

    function addGoal(value) {
        setCourseGoals((goals) => [
            ...goals,
            { text: value, id: Math.random().toString() },
        ]);
        closeModal();
    }

    function deleteGoal(id) {
        setCourseGoals((goals) => {
            return goals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <>
            <StatusBar style="dark" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="#FB607F"
                    onPress={openModal}
                />
                <GoalInput
                    onAddGoal={addGoal}
                    visible={modal}
                    onCancel={closeModal}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDelete={deleteGoal}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
        paddingTop: 24,
    },
});
