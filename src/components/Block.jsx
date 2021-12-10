const Block = (props) => {
  return (
    <div style={props.style} className="container">
      {props.h2 ? <h2 className="uheader">{props.h2}</h2> : null}
      <div
        className={`row row--${props.direction}`}
        style={{
          flexDirection: `${props.direction}!important`,
          justifyContent: props.justify,
          alignItems: props.alignItems,
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Block;
