import createStore from 'redux-zero';

const songs = [
  {
    id: 0,
    title: 'Here Comes the sun - The Beatles',
    duration: '2:54',
    isSelected:true,
    isPlaying:true
  },
  {
    id: 1,
    title: 'Walking on Sunshine - Katrina and the Waves',
    duration: '3:43',
    isSelected:false,
    isPlaying:false
  },
  {
    id: 2,
    title: 'Sunshine - Katrina',
    duration: '3:43',
    isSelected:false,
    isPlaying:false
  }
];

const initialState = {
  songs: songs,
}

const store = createStore(initialState);
export default store;
