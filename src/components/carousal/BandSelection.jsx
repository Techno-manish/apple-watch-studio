"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { setBand } from "@/redux/slices/watchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { collections } from "@/data/collections";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BandSlider = () => {
  const dispatch = useAppDispatch();
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const scrollTimeout = useRef(null);
  const [slideWidth, setSlideWidth] = useState(550);

  const { currentCaseImage, currentBandImage, size, collection } =
    useAppSelector((state) => state.watch);

  const collectionBands = collections.find((col) => col.id === collection);
  const allVariations = collectionBands?.bands.flatMap(
    (bandCategory) => bandCategory.variations
  );

  useEffect(() => {
    const updateWidth = () => {
      setSlideWidth(calculateSlideWidth());
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const getCurrentIndex = () => {
    if (!containerRef.current) return 0;
    const scrollPosition = containerRef.current.scrollLeft;
    return Math.round(scrollPosition / slideWidth);
  };

  const scrollToIndex = (index) => {
    if (!containerRef.current || !allVariations) return;
    const maxIndex = allVariations.length - 1;
    const safeIndex = Math.max(0, Math.min(index, maxIndex));
    const scrollPosition = safeIndex * slideWidth;

    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const handleScrollEnd = () => {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
          const currentIndex = getCurrentIndex();
          scrollToIndex(currentIndex); // Snap to nearest band
        }, 150);
      };

      container.addEventListener("scroll", handleScroll);
      container.addEventListener("scroll", handleScrollEnd);
      handleScroll();

      return () => {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("scroll", handleScrollEnd);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    const selectedElement = allVariations?.find(
      (variation) => variation.image === currentBandImage
    );

    if (selectedElement) {
      scrollToIndex(allVariations.indexOf(selectedElement));
    }
  }, [currentBandImage, collection]);

  const handleNavigationClick = (direction) => {
    const currentIndex = getCurrentIndex();
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const calculateSlideWidth = () => {
    if (typeof window === "undefined") return 550;
    const vw = window.innerWidth;
    if (vw < 640) return vw - 32;
    if (vw < 768) return 500;
    return 550;
  };

  const calculatePadding = () => {
    if (typeof window === "undefined") return "0 calc(50vw - 283px)";
    const vw = window.innerWidth;
    if (vw < 640) return "0 16px";
    if (vw < 768) return "0 calc(50vw - 250px)";
    return "0 calc(50vw - 283px)";
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full"
      >
        <div className="relative h-[53vh] max-h-[508px] min-h-[314px] w-full m-auto z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-full w-full max-w-[500px] sm:w-[52vh] px-4 sm:px-0">
            <img
              src={currentCaseImage || "/face1.png"}
              alt="watch face"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative h-full overflow-hidden">
            {showLeftButton && (
              <button
                onClick={() => handleNavigationClick("prev")}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300"
                aria-label="Previous band"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
            {showRightButton && (
              <button
                onClick={() => handleNavigationClick("next")}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300"
                aria-label="Next band"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
            <div
              ref={containerRef}
              className="h-full overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar touch-pan-y"
            >
              <div
                className="inline-block h-full"
                style={{ padding: calculatePadding() }}
              >
                {allVariations?.map((variation) => (
                  <div
                    id={`band-${variation.id}`}
                    className="inline-block h-full align-middle"
                    key={variation.id}
                    style={{ width: `${slideWidth}px` }}
                  >
                    <div className="flex items-center justify-center h-full px-3 sm:px-12">
                      <button
                        className="relative flex items-center justify-center w-full h-full"
                        onClick={() =>
                          scrollToIndex(allVariations.indexOf(variation))
                        }
                      >
                        <img
                          src={variation.image || "/band2.jpg"}
                          alt={variation.name}
                          className="w-full sm:w-[52vh] max-w-[500px] object-contain"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BandSlider;
