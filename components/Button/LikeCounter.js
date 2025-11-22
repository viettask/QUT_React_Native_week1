import React, { useState } from 'react'; // Import useState
import likeCounterStyles from '../../styles/likeCounterStyles.js';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

// Thumb up / thumb down component using the useLikeCounter hook
export default function LikeCounter() {
    //State for likes and dislikes
  const [likeCount, setUpCount ] = useState(0);
  const [dislikeCount, setDownCount] = useState(0);

  console.log(likeCount, dislikeCount);

  //Function to handle votes
    const handleVote = (type) => {
        if (type === 'like') {
            setUpCount((prevCount) => prevCount + 1); // Increment like count
        } else if (type === 'dislike') {
            setDownCount((prevCount) => prevCount + 1); // Increment dislike count
        }
    };

  return (
    <View style={likeCounterStyles.likeCounter}>
        <TouchableOpacity
        style={[likeCounterStyles.likeBtn, likeCounterStyles.likeUp, likeCount > 0 && likeCounterStyles.activeLikeBtn]}
        onPress={() => handleVote('like')}
      >
        {/* Replace SVG with an Image or use an icon library like react-native-vector-icons */}
        <Image
          source={require('../../assets/thumbs-up.png')} // Placeholder image for thumbs up
          style={likeCounterStyles.icon}
        />
        <Text style={likeCounterStyles.count}>{likeCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[likeCounterStyles.likeBtn, likeCounterStyles.likeDown, dislikeCount > 0 && likeCounterStyles.activeDislikeBtn]}
        onPress={() => handleVote('dislike')}
      >
        {/* Replace SVG with an Image or use an icon library */}
        <Image
          source={require('../../assets/thumbs-down.png')} // Placeholder image for thumbs down
          style={likeCounterStyles.icon}
        />
        <Text style={likeCounterStyles.count}>{dislikeCount}</Text>
      </TouchableOpacity>
    </View>
  );
}
