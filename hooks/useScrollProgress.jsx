import React, { useEffect, useState } from "react"

const UseScrollProgress = () => {

   const [completion, setCompletion] = useState(0)

   useEffect(() => {
      const updateScroll = () => {
         const currentProgress = window.scrollY;
         const scrollHeight = document.body.scrollHeight - window.innerHeight;

         if (scrollHeight) {
            setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
         }
      };
      updateScroll();
         window.addEventListener("scroll", updateScroll);

         return () => window.removeEventListener("scroll", updateScroll);
   }, [])

  return completion;
}

export default UseScrollProgress