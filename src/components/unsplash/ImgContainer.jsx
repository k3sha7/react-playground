import React from "react";

const ImgContainer = React.forwardRef(({ data }, ref) => {
  const body = (
    <>
      <img src={data.urls.small} alt="" />
      <p>{data.description || data.alt_description}</p>
      {data.tags.map((el) => (
        <span key={el.title}>{el.title}</span>
      ))}
    </>
  );
  const content = ref ? (
    <article ref={ref}>{body}</article>
  ) : (
    <article>{body}</article>
  );

  return content;
});

export default ImgContainer;
