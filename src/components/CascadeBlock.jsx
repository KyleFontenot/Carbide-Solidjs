const CascadeBlock = (props) => {
  return (
    <div
      className={`container cascadeBlock ${
        props.plain ? "cascadeBlock--plain" : null
      }`}
    >
      <div className="row">{props.children}</div>
    </div>
  );
};

export default CascadeBlock;
