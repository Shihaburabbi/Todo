import {useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {AddTodo, RemoveTodo, RemoveAllTodo} from '../redux/actions/todoActions';

const useHomeController = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todosData.todos;

  // add todo method
  const addTodo = () => {
    if (todos && !todos.includes(todo)) {
      dispatch(AddTodo(todo));
      setTodo('');
      Keyboard.dismiss();
    } else {
    }
  };

  // singel item remove todo method

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
    }
  };

  // All item remove todo method

  const removeAllTodo = () => {
    dispatch(RemoveAllTodo());
  };

  return {
    todo,
    setTodo,
    todos,
    addTodo,
    removeTodo,
    removeAllTodo,
  };
};

export default useHomeController;
