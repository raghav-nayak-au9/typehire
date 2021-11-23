import "./SideDrawer.css";

const SideDrawer = (props) => {
  const classes = "side-drawer-" + props.classes;
  // console.log(classes);
  return (
    <>
      {classes === "side-drawer-false" ? null : (
        <aside className={classes}>{props.children}</aside>
      )}
    </>
  );
};

export default SideDrawer;
