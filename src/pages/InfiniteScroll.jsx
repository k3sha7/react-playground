import { useCallback, useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query'
import { getPostPage } from '../api/axios'
import ImgContainer from '../components/unsplash/ImgContainer';

const InfiniteScroll = () => {
  let page = 0
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error } =
    useInfiniteQuery("posts", 
    ({ pageParam = 1 }) => getPostPage(pageParam), 
    {
      getNextPageParam: (lastPage, allPages) => {
        page++
        // setPage(nextPage)
        return page < lastPage.total_pages ? nextPage : undefined
      }
    });


  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          fetchNextPage();
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return (
    <div className="flex flex-wrap">
      {status === "loading"
        ? ""
        : data.pages[0].results.map((obj, i) => {
          if(data.pages[0].results.length === i + 1) {
            return <ImgContainer key={obj.id} ref={lastPostRef} data={obj} />
          }
          return <ImgContainer key={obj.id} data={obj} />;
        })}
    </div>
  );
}

export default InfiniteScroll