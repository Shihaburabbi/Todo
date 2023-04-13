import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/Styles/TodoListStyles';
import DeleteIcon from '../SvgIcon/DeleteIcon';

interface ToDo {
  todos: any;
  removeTodo: () => void;
}

const TodoList: FC<ToDo> = ({todos, removeTodo}) => {
  return (
    <>
      {todos.map((item: any, index: any) => (
        <View key={index} style={styles.container}>
          <View style={styles.list}>
            <Text style={styles.text}>{item}</Text>
          </View>

          <TouchableOpacity
            style={styles.remove_btn}
            onPress={() => removeTodo(item)}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default TodoList;
