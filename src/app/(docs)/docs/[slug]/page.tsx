import React from "react";

const SingleDoc = ({ params }: { params: { slug: string } }) => {
  return <div>My Post: {params.slug}</div>;
};

export default SingleDoc;
