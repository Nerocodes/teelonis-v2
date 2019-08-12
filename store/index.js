export default {
  state: () => ({
      stories: []
  }),
  mutations: {
      setStories (state, story) {
          state.stories.push(...story);
      }
  }
}