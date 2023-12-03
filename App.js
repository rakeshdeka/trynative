import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from './Card'; // Assuming Card component is in the same directory

const App = () => {
  return (
    <ScrollView>
      <Card
        title="Sample Card"
        imageUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2NxN3gyN20wbjlkcG85NHdzZWJ3aXh1d3ZyaDJrYWx4OHFvMjNyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R6gvnAxj2ISzJdbA63/giphy-downsized-large.gif"
        description="This is a sample card in React Native."
      />
      <Card
        title="Sample Card"
        imageUrl="https://media.giphy.com/media/ifXQlYd1bxlGjLHPKu/giphy.gif"
        description="This is a sample card in React Native."
      />
      <Card
        title="Sample Card"
        imageUrl="https://media.giphy.com/media/KHKJGDrMLywqsf4wCv/giphy.gif"
        description="This is a sample card in React Native."
      />
      {/* Add more Card components with different data as needed */}
    </ScrollView>
  );
};

export default App;
