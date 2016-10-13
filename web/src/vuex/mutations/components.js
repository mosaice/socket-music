
export default (state, { name, component }) => {
  const { components } = state;
  components[name] = component;
};
