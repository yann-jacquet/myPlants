const cn = (classes) => (Array.isArray(classes)
  ? classes.filter(Boolean).join(' ')
  : console.warn('Your style classes should be in an array'));

export default cn;
