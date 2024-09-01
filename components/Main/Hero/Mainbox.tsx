import { forwardRef } from "react";

const Mainbox = forwardRef<HTMLDivElement>((props,ref) => {
  return <div className="w-40 h-48 " ref={ref}></div>;
});
// Set displayName for the component
Mainbox.displayName = "Mainbox";
export default Mainbox;
