import { useState, useEffect } from "react";

function ScrolltoTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [upVisable, setUpVisable] = useState(false);
  useEffect(() => {
    const handleVisable = () => {
      if (window.scrollY >= 400) {
        setUpVisable(true);
      } else {
        setUpVisable(false);
      }
    };

    return () => {
      // Cleanup the event listener
      document.addEventListener("scroll", handleVisable);
    };
  }, []);

  return (
    <div
      className="scrolltotop"
      style={{
        background: `conic-gradient(#63ffda ${scrollTop}%, #133040 0%)`,
        bottom: upVisable ? `15px` : `-100px`,
      }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="scroll_value">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="scroll_svg"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </div>
    </div>
  );
}

export default ScrolltoTop;
