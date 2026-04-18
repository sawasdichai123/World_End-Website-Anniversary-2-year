const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "a",
  "density": "calm",
  "particles": true,
  "cursor": true,
  "accent": "blood"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  blood: "#c8312b",
  cream: "#eee4d0",
  neon: "#9cff4a",
};

const IMAGE_PATHS = {
  ashyra: "assets/talents/Ashyra.png",
  mildr: "assets/talents/MildR.png",
  tsururu: "assets/talents/Tsururu.png",
  ami: "assets/talents/Ami.png",
  debirun: "assets/talents/Debirun.png",
  xonebu: "assets/talents/Xonebu.png",
};

const IMAGE_POSITIONS = {
  ashyra: "50% 8%",
  mildr: "50% 18%",
  tsururu: "50% 6%",
  ami: "50% 10%",
  debirun: "50% 4%",
  xonebu: "50% 12%",
};

function App() {
  const [state, setState] = useStateA(DEFAULTS);
  const cursorRef = useRefA(null);
  const dotRef = useRefA(null);
  const [hot, setHot] = useStateA(false);
  const [activeNav, setActiveNav] = useStateA("hero");

  // accent
  useEffectA(() => {
    document.documentElement.style.setProperty("--blood", ACCENT_MAP[state.accent] || "#c8312b");
  }, [state.accent]);

  // derive talents with image metadata before render
  const talents = React.useMemo(() => {
    return (window.TALENTS || []).map((talent) => ({
      ...talent,
      imagePath: IMAGE_PATHS[talent.id],
      imagePosition: IMAGE_POSITIONS[talent.id] || "50% 50%",
    }));
  }, []);

  // cursor follow
  useEffectA(() => {
    if (!state.cursor) {
      document.body.style.cursor = "";
      if (cursorRef.current) cursorRef.current.style.display = "none";
      if (dotRef.current) dotRef.current.style.display = "none";
      return;
    }
    document.body.style.cursor = "none";
    if (cursorRef.current) cursorRef.current.style.display = "";
    if (dotRef.current) dotRef.current.style.display = "";

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf;
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (cursorRef.current) cursorRef.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      if (dotRef.current) dotRef.current.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const hoverables = document.querySelectorAll("a, button, .slot, .mv-play, .mv-frame");
    const enter = () => setHot(true);
    const leave = () => setHot(false);
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [state.cursor]);

  // section observer for rail
  useEffectA(() => {
    const sections = document.querySelectorAll("[data-screen-label]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const label = e.target.getAttribute("data-screen-label");
            if (label.includes("Hero")) setActiveNav("hero");
            if (label.includes("Talents")) setActiveNav("talents");
            if (label.includes("MV")) setActiveNav("mv");
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {state.cursor && (
        <>
          <div ref={cursorRef} className={"cursor" + (hot ? " hot" : "")} />
          <div ref={dotRef} className="cursor-dot" />
        </>
      )}

      <header className="chrome">
        <div><span className="dot" />WORLD · END / 2Y-ANNIVERSARY</div>
        <div>REC · 2026.04.18 · BKK</div>
      </header>

      <nav className="rail">
        <a href="#hero" className={activeNav === "hero" ? "active" : ""}><span>01 · HERO</span><span className="bar" /></a>
        <a href="#talents" className={activeNav === "talents" ? "active" : ""}><span>02 · TALENTS</span><span className="bar" /></a>
        <a href="#mv" className={activeNav === "mv" ? "active" : ""}><span>03 · MV</span><span className="bar" /></a>
      </nav>

      <main>
        <section id="hero"><Hero layout={state.heroLayout} /></section>
        <section id="talents">
          <Stage talents={talents} particlesOn={state.particles} styleMode={state.density} />
        </section>
        <section id="mv"><MV /></section>
      </main>

      <Tweaks state={state} setState={setState} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
