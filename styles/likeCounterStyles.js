import { StyleSheet } from 'react-native';

const likeCounterStyles = StyleSheet.create({
  likeCounter: {
    flexDirection: 'row',  // Inline-flex equivalent in React Native
    gap: 12,               // React Native doesn't have a direct "gap" property, so use padding or margin
    alignItems: 'center',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
  likeBtn: {
    flexDirection: 'row',  // Inline-flex equivalent in React Native
    alignItems: 'center',
    gap: 8,                // You can adjust margin or padding as an alternative to gap
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',  // Note: This won't work in React Native; it's a web property
    transition: 'background 150ms ease, border-color 150ms ease, transform 80ms ease',  // Transition effects are not directly supported in React Native, you may need to use `Animated` for transitions
  },
  likeBtnActive: {
    transform: [{ translateY: 1 }],
  },
  likeBtnPressedTrue: {
    fontWeight: '700',
  },
  likeBtnUpPressed: {
    borderColor: '#0b74de',
    backgroundColor: '#e8f2ff',
    color: '#0b74de',
  },
  likeBtnDownPressed: {
    borderColor: '#de3b3b',
    backgroundColor: '#fff0f0',
    color: '#de3b3b',
  },
  likeBtnSvg: {
    width: 18,
    height: 18,
    display: 'block', // React Native doesn't have a "block" display value, so it's usually default in components
  },
  count: {
    fontWeight: '600',
  },
});

export default likeCounterStyles;