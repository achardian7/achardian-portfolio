import useObserverStore, { TActiveSection } from "@/store/use-observer-store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useObserver = (activeSection: TActiveSection) => {
  const { ref, inView } = useInView({ threshold: 0.5, rootMargin: "-20px" });
  const { setObserver } = useObserverStore();

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      setObserver(hash as TActiveSection);
    } else {
      setObserver(activeSection);
    }
  }, [inView]);

  return { ref };
};

export default useObserver;
