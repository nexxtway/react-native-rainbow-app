import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Todos({ data }) {
    return data.map((todo, index) => {
        const key = `item-${index}`;
        return <Text key={key}>{todo.name}</Text>;
    });
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
    },
});

const App: React.FC = () => {
    const [todos] = useState([
        { name: 'eslint' },
        { name: 'prettier' },
        { name: 'typescript' },
    ]);

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <View>
                <Todos data={todos} />
            </View>
        </View>
    );
};

export default App;
