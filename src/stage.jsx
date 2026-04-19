const { useState: useStateS, useEffect: useEffectS, useMemo: useMemoS, useRef: useRefS } = React;

function Stage({ talents, particlesOn, styleMode }) {
  const [active, setActive] = useStateS(0);
  const [hov, setHov] = useStateS(null);
  const [rotY, setRotY] = useStateS(0);
  const count = talents.length;
  const cur = talents[active];

  // --- 3D geometry: carousel slots arranged around Y axis ---
  const radius = 520;
  const step = 360 / count;

  // scene transition when switching
  const [trans, setTrans] = useStateS(false);
  const select = (i) => {
    if (i === active) return;
    setTrans(true);
    setTimeout(() => setTrans(false), 700);

    let diff = i - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;

    setRotY((prev) => prev - diff * step);
    setActive(i);
  };

  // apply talent color var to root of section
  const cssVars = {
    "--talent": cur.color,
    "--talent-glow": cur.glow,
    "--talent-bg": cur.bg,
  };

  return (
    <section
      className="stage-wrap"
      data-screen-label="02 Talents"
      style={cssVars}
    >
      {particlesOn && (
        <Particles
          kind={cur.particle}
          color={cur.color}
          count={styleMode === "dense" ? 60 : 34}
          seed={cur.id}
        />
      )}

      <div className="sect-head">
        <div>
          <div className="idx">/ 02 — ACT II</div>
          <h2>THE&nbsp;BAND<br/><span style={{ color: cur.color, fontStyle: "italic" }}>OF ENDINGS</span></h2>
        </div>
        <div className="desc">
          คลิกสมาชิกวงเพื่อหมุนเวทีไปหาพวกเขา · แต่ละดาวคือหนึ่งภัยพิบัติ
          หนึ่งเครื่องดนตรี และเสียงร้องที่จะนำพาโลกใบนี้ไปสู่ตอนจบ.
        </div>
      </div>

      <div className="stage">
        <div className="stage-floor" />
        <div
          className="carousel"
          style={{ transform: `translateZ(-${radius}px) rotateY(${rotY}deg)` }}
        >
          {talents.map((t, i) => {
            const rot = i * step;
            const isActive = i === active;
            return (
              <div
                key={t.id}
                className="slot"
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                onClick={() => select(i)}
                style={{
                  transform: `rotateY(${rot}deg) translateZ(${radius}px) ${isActive ? "scale(1.02)" : "scale(.92)"}`,
                  opacity: isActive ? 1 : 0.55,
                  filter: isActive ? "none" : "saturate(.6) blur(.4px)",
                  "--talent": t.color,
                  "--talent-bg": t.bg,
                  "--talent-image": t.imagePath ? `url(${t.imagePath})` : "none",
                  "--talent-image-pos": t.imagePosition || "50% 50%",
                }}
              >
                <div className="portrait">
                  {t.imagePath ? <img className="portrait-image" src={t.imagePath} alt={t.name} loading="lazy" style={{ objectPosition: t.imagePosition || "50% 50%" }} /> : null}
                  <div className="portrait-overlay" />
                  <div className="portrait-tag">CH. {t.sub}</div>
                </div>
                <div className={`portrait-label${isActive ? " active" : ""}`}>
                  <div className="portrait-label-name">{t.displayName || t.name.split(" ").slice(-1)[0]}</div>
                  <div className="portrait-label-meta">{t.instrument} · {t.no}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* stage nav */}
      <div className="stage-nav">
        {talents.map((t, i) => (
          <button
            key={t.id}
            className={i === active ? "on" : ""}
            style={{ "--t": t.color }}
            onClick={() => select(i)}
          >
            <div className="sn-idx">/ {t.no}</div>
            <div className="sn-name">{t.name.split(" ")[0]}</div>
            <div className="sn-dis">{t.disaster}</div>
          </button>
        ))}
      </div>

      <div className="details" key={cur.id}>
        <div className="left">
          <div className="kicker">MEMBER · {cur.no} / 06 — {cur.disasterEn}</div>
          <div className="tag-row">
            <span className="tag live">● LIVE</span>
            <span className="tag">CH. {cur.sub}-WORLD-END</span>
            <span className="tag">{cur.instrument}</span>
          </div>
          <h3>
            {cur.id === "xonebu" ? (
              <>
                <span style={{ color: "var(--talent)" }}>XONEBU</span>{" "}
                <span style={{ color: "#fff", fontStyle: "italic" }}>X'THULHU</span>
              </>
            ) : (
              cur.name.split(" ").map((w, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? <span className="em">{w}</span> : w}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              ))
            )}
          </h3>
          <div className="romaji">{cur.thName} · {cur.disaster}</div>

          <div className="instrument-row">
            <div className="big" style={{ fontSize: 56 }}>{cur.instrumentIcon}</div>
            <div>
              <div className="label">INSTRUMENT</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, color: "var(--talent)", lineHeight: 1 }}>
                {cur.instrument}
              </div>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div className="label">DISASTER CODE</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 18, letterSpacing: ".2em" }}>
                WE-{cur.no}
              </div>
            </div>
          </div>

          <p className="bio">{cur.bio}</p>

          <div className="socials">
            <a href={`https://${cur.socials.twitter}`} target="_blank" rel="noreferrer">
              <span>𝕏 TWITTER</span><span className="arr">→</span>
            </a>
            <a href={`https://${cur.socials.facebook}`} target="_blank" rel="noreferrer">
              <span>ƒ FACEBOOK</span><span className="arr">→</span>
            </a>
            <a href={`https://${cur.socials.tiktok}`} target="_blank" rel="noreferrer">
              <span>♪ TIKTOK</span><span className="arr">→</span>
            </a>
          </div>
        </div>

        <aside className="vitals">
          <h4>// PROFILE — {cur.name}</h4>
          <div>
            <div className="row">
              <span className="k">BIRTHDAY</span>
              <span className="v em">{cur.birthday}</span>
            </div>
          </div>
          <div>
            <div className="row">
              <span className="k">DEBUT</span>
              <span className="v em">{cur.debutDate}</span>
            </div>
          </div>
          <div>
            <div className="row">
              <span className="k">INSTRUMENT</span>
              <span className="v em">{cur.instrument}</span>
            </div>
          </div>
          <div>
            <div className="row">
              <span className="k">DISASTER</span>
              <span className="v em">{cur.disasterEn}</span>
            </div>
          </div>
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
            <div className="row" style={{ borderBottom: 0, padding: 0 }}>
              <span className="k">STAGE POSITION</span>
              <span className="v">{cur.no} / 06</span>
            </div>
            <div style={{ display: "flex", gap: 4, marginTop: 14 }}>
              {talents.map((t, i) => (
                <div key={t.id} style={{
                  flex: 1, height: 4,
                  background: i === active ? cur.color : "rgba(255,255,255,.1)",
                }} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

window.Stage = Stage;
