function Loader({isLoaded, error}) {
  return (
      <div className={`loader ${isLoaded ? 'hide' : 'show'}`}>
        <p>{error}</p>
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
      </div>
  );
}

export default Loader;
