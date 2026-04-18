// Per-talent disaster particles. Uses a lightweight JS-driven field.
const { useEffect, useRef, useMemo } = React;

function Particles({ kind, color, count = 40, seed = 0 }) {
  const ref = useRef(null);

  const items = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        dur: 6 + Math.random() * 10,
        size: 0.4 + Math.random() * 1.2,
        drift: (Math.random() - 0.5) * 40,
      });
    }
    return arr;
  }, [count, seed, kind]);

  const render = (p, i) => {
    const common = {
      left: p.x + "%",
      top: p.y + "%",
      animationDelay: `-${p.delay}s`,
      animationDuration: `${p.dur}s`,
      transform: `translate(-50%,-50%) scale(${p.size})`,
    };
    switch (kind) {
      case "ember":
        return (
          <span
            key={i}
            className="particle"
            style={{
              ...common,
              width: 3, height: 3, borderRadius: "50%",
              background: color, boxShadow: `0 0 12px ${color},0 0 3px ${color}`,
              animation: `rise ${p.dur}s linear infinite`,
            }}
          />
        );
      case "pixel":
        return (
          <span
            key={i}
            className="particle"
            style={{
              ...common,
              width: 4, height: 4,
              background: color, boxShadow: `0 0 0 1px ${color}, 0 0 10px ${color}`,
              animation: `flicker ${p.dur}s steps(8) infinite`,
            }}
          />
        );
      case "cloud":
        return (
          <span
            key={i}
            className="particle"
            style={{
              ...common,
              width: 80, height: 24, borderRadius: 40,
              background: `radial-gradient(ellipse,${color} 0%,transparent 70%)`,
              opacity: 0.5,
              animation: `drift ${p.dur}s linear infinite`,
              filter: "blur(4px)",
            }}
          />
        );
      case "circuit":
        return (
          <span
            key={i}
            className="particle"
            style={{
              ...common,
              width: 6, height: 1,
              background: color, boxShadow: `0 0 8px ${color}`,
              animation: `scan ${p.dur}s linear infinite`,
            }}
          />
        );
      case "meteor":
        return (
          <span
            key={i}
            className="particle"
            style={{
              ...common,
              width: 120, height: 1,
              background: `linear-gradient(to right, transparent, ${color})`,
              boxShadow: `0 0 6px ${color}`,
              transform: `translate(-50%,-50%) rotate(-25deg) scale(${p.size})`,
              animation: `streak ${p.dur}s linear infinite`,
            }}
          />
        );
      case "alien":
      default:
        return (
          <span
            key={i}
            className="particle"
            style={{
              ...common,
              width: 2, height: 2, borderRadius: "50%",
              background: color, boxShadow: `0 0 16px ${color}`,
              animation: `orbit ${p.dur}s linear infinite`,
            }}
          />
        );
    }
  };

  return (
    <div ref={ref} className="particles" aria-hidden>
      {items.map(render)}
    </div>
  );
}

// Inject keyframes once
(function injectKeyframes() {
  if (document.getElementById("particle-keyframes")) return;
  const s = document.createElement("style");
  s.id = "particle-keyframes";
  s.textContent = `
    @keyframes rise{
      0%{transform:translate(-50%,20px) scale(.6);opacity:0}
      10%{opacity:1}
      100%{transform:translate(calc(-50% + 40px),-260px) scale(1.2);opacity:0}
    }
    @keyframes flicker{
      0%,100%{opacity:.1;transform:translate(-50%,-50%) scale(1)}
      50%{opacity:1;transform:translate(-50%,-60%) scale(1.3)}
    }
    @keyframes drift{
      0%{transform:translate(-120%,-50%);opacity:0}
      15%{opacity:.5}
      100%{transform:translate(220%,-50%);opacity:0}
    }
    @keyframes scan{
      0%{transform:translate(-100vw,-50%);opacity:0}
      10%{opacity:1}
      100%{transform:translate(100vw,-50%);opacity:0}
    }
    @keyframes streak{
      0%{transform:translate(0,-40vh) rotate(-25deg);opacity:0}
      10%{opacity:1}
      100%{transform:translate(-80vw,60vh) rotate(-25deg);opacity:0}
    }
    @keyframes orbit{
      0%{transform:translate(-50%,-50%) translate(0,0);opacity:.2}
      50%{transform:translate(-50%,-50%) translate(20px,-20px);opacity:1}
      100%{transform:translate(-50%,-50%) translate(0,0);opacity:.2}
    }
  `;
  document.head.appendChild(s);
})();

window.Particles = Particles;
