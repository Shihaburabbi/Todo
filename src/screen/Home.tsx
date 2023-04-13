import {View, Text, ScrollView, TextInput, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {colors} from '../theme/colors';
import Button from '../components/Button';
const windowWidth = Dimensions.get('window').width;
import {styles} from '../theme/Styles/HomeStyle';
import TodoList from '../components/TodoList';
import useHomeController from '../mvvm/useHomeController';

const Home = props => {
  const {todo, setTodo, todos, addTodo, removeTodo, removeAllTodo} =
    useHomeController();

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Header title="Home" />

      <View style={{alignItems: 'center'}}>
        <TextInput
          placeholder="Add your todo here"
          style={styles.input}
          onChangeText={setTodo}
          value={todo}
          placeholderTextColor={colors.primary_color}
        />
        <View style={styles.button_layout}>
          <Button
            width={windowWidth / 2.5}
            title="ADD TODO"
            onPress={addTodo}
          />
          <Button
            width={windowWidth / 2.5}
            title="REMOVE ALL"
            onPress={removeAllTodo}
          />
        </View>

        <Text style={styles.title}>List of Todos:</Text>
        {/* list todo component  */}
        <TodoList todos={todos} removeTodo={removeTodo} />
      </View>
    </ScrollView>
  );
};

export default Home;
