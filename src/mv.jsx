function MV() {
  const [playing, setPlaying] = React.useState(false);

  return (
    <section className="mv" data-screen-label="03 MV">
      <div className="mv-inner">
        <div className="mv-head">
          <div>
            <div className="kicker">/ 03 — ENCORE</div>
            <h2>THE <span style={{ fontStyle: "italic", color: "var(--blood)" }}>FEATURED</span><br/>MUSIC VIDEO</h2>
          </div>
          <div className="meta">
            <div>W.E. UNIT · ORIGINAL SONG</div>
            <div>DIRECTED BY // WORLD-END-STUDIO</div>
            <div>RUNTIME · 03:48</div>
            <div>PREMIERED · 04 / 18 / 2026</div>
          </div>
        </div>

        <div className="mv-frame" onClick={() => setPlaying(true)}>
          <div className="mv-corner tl">● REC&nbsp;&nbsp;2:3.98K</div>
          <div className="mv-corner tr">CH. 01 / MASTER</div>
          <div className="mv-corner bl">WORLD-END // MV</div>
          <div className="mv-corner br">04 / 18 / 2026</div>

          {!playing ? (
            <div className="mv-center">
              <div className="mv-play"><div className="tri" /></div>
              <div className="mv-title">END <span className="em">OF</span> THE WORLD</div>
              <div className="mv-sub">∙ WORLD END UNIT ∙ 2ND ANNIVERSARY SONG ∙</div>
            </div>
          ) : (
            <div className="mv-center" style={{ width: "100%", height: "100%", position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <div style={{
                width: "82%", aspectRatio: "16/9",
                border: "1px dashed rgba(255,255,255,.2)",
                display: "grid", placeItems: "center",
                fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: ".3em",
                color: "var(--ink-dim)", textTransform: "uppercase",
                background: "rgba(0,0,0,.4)",
              }}>
                <div style={{ textAlign: "center", lineHeight: 1.8 }}>
                  &lt; EMBED · YOUTUBE IFRAME · HERE &gt;
                  <div style={{ marginTop: 8, opacity: .6 }}>Drop the MV embed URL in src/mv.jsx</div>
                  <button onClick={() => setPlaying(false)} style={{ marginTop: 20, border: "1px solid rgba(255,255,255,.3)", padding: "8px 16px", color: "var(--ink-dim)" }}>
                    ← BACK TO POSTER
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mv-credits">
          <div><div className="c-k">PERFORMED BY</div><div className="c-v">WORLD END UNIT × 6</div></div>
          <div><div className="c-k">COMPOSITION</div><div className="c-v">Ch. Lumina Music Lab</div></div>
          <div><div className="c-k">ART DIRECTION</div><div className="c-v">Ch. Pixela Pixel Works</div></div>
          <div><div className="c-k">ANNIVERSARY</div><div className="c-v">02 / 02 · 2024 — 2026</div></div>
        </div>
      </div>

      <footer className="foot">
        <div>
          <div className="big">WORLD · END // 02Y</div>
          <div>© 2026 WORLD END UNIT · ALL DISASTERS RESERVED</div>
        </div>
        <div className="foot-cols">
          <div>
            <div style={{ color: "var(--ink)", marginBottom: 10 }}>UNIT</div>
            <div>CH. LUMINA</div>
            <div>CH. PIXELA</div>
          </div>
          <div>
            <div style={{ color: "var(--ink)", marginBottom: 10 }}>FOLLOW</div>
            <div>#WorldEndUnit</div>
            <div>#WE2Y</div>
            <div>#EndOfTheWorld</div>
          </div>
          <div>
            <div style={{ color: "var(--ink)", marginBottom: 10 }}>CONTACT</div>
            <div>management@world-end.jp</div>
            <div>press@world-end.jp</div>
          </div>
        </div>
      </footer>
    </section>
  );
}

window.MV = MV;
