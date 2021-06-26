import React, { useEffect, useState } from "react";

// This is definitely not a good way to do it
let bar = [];
let currentLength = 1;

const fillLoadingBar = (barLength) => {
  for (let i = 0; i < barLength; i++) {
    if (i === 0) bar.push("[");
    else if (i === barLength - 1) bar.push("]");
    else bar.push("-");
  }
};

// ASCII animation
export const LoadingAnimation = ({ barLength }) => {
  const [loadingBar, setLoadingBar] = useState([]);

  useEffect(() => {
    bar = [];
    currentLength = 1;
    fillLoadingBar(barLength);
    setLoadingBar(bar);
  }, [barLength]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLength === barLength - 1) {
        currentLength = 1;
        bar = [];
        fillLoadingBar(barLength);
        setLoadingBar(bar);
      }
      bar[currentLength] = ">";
      currentLength++;
      setLoadingBar([...bar]);
    }, 1000);
    return () => clearInterval(interval);
  }, [barLength]);

  return <div>{loadingBar}</div>;
};