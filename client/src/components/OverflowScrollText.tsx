import {
  CSSProperties,
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
} from "react";

type Props = PropsWithChildren<{
  className?: string;
  containerClassName?: string;
}>;

export const OverflowScrollText = ({
  children,
  className,
  containerClassName,
}: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [overflow, setOverflow] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(6);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const diff = text.scrollWidth - container.clientWidth;
    const isOverflowing = diff > 2;

    setOverflow(isOverflowing);

    if (isOverflowing) {
      const rawDistance = diff + 10;

      const MAX_SCROLL = 1200;
      const effectiveDistance = Math.min(rawDistance, MAX_SCROLL);

      const SPEED = 100;
      const duration = effectiveDistance / SPEED;

      setDistance(effectiveDistance);
      setDuration(Math.max(duration, 3));
    }
  }, [children]);

  return (
    <span
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap block ${containerClassName ?? ""}`}
    >
      <span
        ref={textRef}
        className={`inline-block ${
          overflow ? "group-hover:animate-marquee-dynamic" : ""
        } ${className ?? ""}`}
        style={
          overflow
            ? ({
                "--scroll-distance": `${distance}px`,
                "--duration": `${duration}s`,
              } as CSSProperties)
            : undefined
        }
      >
        {children}
      </span>
    </span>
  );
};
