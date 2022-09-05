import React from "react";
import GridComponents from "../BlogComponents/GirdComponents/GridComponents";
import GridBanner from "../BlogComponents/GridBanner/GridBanner";
function BlogGridView() {
  return (
    <div>
      <GridBanner />
      <GridComponents/>
    </div>
  );
}
export default BlogGridView;
