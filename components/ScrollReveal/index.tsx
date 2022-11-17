import React, { useRef, useEffect } from "react";

export const ScrollReveal = ({ children }: any) => {
  const refToComponent = useRef(null);
  useEffect(() => {
    async function animate() {
      if (refToComponent.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(refToComponent.current, {
          duration: 2500,
          delay: 500,
        });
      }
    }
    animate();
  }, []);

  return <section ref={refToComponent}>{children}</section>;
};
