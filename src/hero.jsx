const { useState, useEffect } = React;

function Hero({ layout }) {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const tstamp = `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())} UTC`;

  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="bg-grid" />
      <div className="bg-spot" />

      <div className="corner tl">
        <div>WORLD · END / UNIT</div>
        <div style={{ marginTop: 6, opacity: .6 }}>CH. LUMINA × CH. PIXELA</div>
      </div>
      <div className="corner tr">
        <div>SIGNAL // {tstamp}</div>
        <div style={{ marginTop: 6, opacity: .6 }}>BROADCAST 002 / LIVE</div>
      </div>
      <div className="corner bl">
        <div>EST. 2024 — 2026</div>
        <div style={{ marginTop: 6, opacity: .6 }}>6 DISASTERS · 6 VOICES</div>
      </div>
      <div className="corner br">
        <div>N 13.75° · E 100.50°</div>
        <div style={{ marginTop: 6, opacity: .6 }}>BANGKOK / EARTH</div>
      </div>

      <div className="hero-inner">
        <div className="hero-kicker">
          <span className="bar" />
          <span>2ND ANNIVERSARY · ฉลองครบรอบ 2 ปี</span>
          <span className="bar" />
        </div>

        {layout === "a" && (
          <div className="hero-title">
            <div><span>WORLD</span></div>
            <div><span className="stroke">END</span> <span className="amp">&</span></div>
            <div><span>ENCORE</span></div>
          </div>
        )}
        {layout === "b" && (
          <div className="hero-title">
            <div><span className="stroke">END</span></div>
            <div style={{ fontSize: ".55em", letterSpacing: ".1em" }}>OF THE</div>
            <div><span>WORLD</span> <span className="amp">⚡</span></div>
          </div>
        )}
        {layout === "c" && (
          <div className="hero-title">
            <div style={{ fontSize: ".7em" }}><span>SIX&nbsp;DISASTERS,</span></div>
            <div><span className="stroke">ONE</span> <span className="amp">BAND</span></div>
          </div>
        )}

        <div className="hero-sub">
          <span><i className="diamond" /> 6 TALENTS</span>
          <span><i className="diamond" /> 1 STAGE</span>
          <span><i className="diamond" /> END-OF-WORLD TOUR</span>
        </div>
      </div>

      <div className="scroll-hint">
        <div>SCROLL</div>
        <div className="line" />
        <div>TO ENTER</div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          <span>VOLCANIC</span><span className="em">✦</span>
          <span>MUTANT</span><span className="em">✦</span>
          <span>CLIMATE</span><span className="em">✦</span>
          <span>ROBOT</span><span className="em">✦</span>
          <span>METEOR</span><span className="em">✦</span>
          <span>ALIEN</span><span className="em">✦</span>
          <span>WORLD END TOUR ’26</span><span className="em">✦</span>
          <span>VOLCANIC</span><span className="em">✦</span>
          <span>MUTANT</span><span className="em">✦</span>
          <span>CLIMATE</span><span className="em">✦</span>
          <span>ROBOT</span><span className="em">✦</span>
          <span>METEOR</span><span className="em">✦</span>
          <span>ALIEN</span><span className="em">✦</span>
          <span>WORLD END TOUR ’26</span><span className="em">✦</span>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
