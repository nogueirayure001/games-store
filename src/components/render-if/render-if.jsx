function RenderIf({ children, condition }) {
  if (condition) {
    return children;
  }

  return;
}

export default RenderIf;
