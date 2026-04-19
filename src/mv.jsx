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
              <video
                src="assets/Mvtest.mp4"
                controls
                autoPlay
                style={{ width: "82%", aspectRatio: "16/9", background: "#000" }}
              />
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

      <section className="special-thanks">
        <div className="st-head">
          <div className="st-line" />
          <div className="st-kicker">/ 04 — SPECIAL THANKS</div>
          <h2 className="st-title">MADE WITH <span style={{ color: "var(--blood)", fontStyle: "italic" }}>LOVE</span><br/>BY THE FAN CLUB</h2>
          <div className="st-sub">โปรเจกต์นี้จัดทำโดยแฟนคลับผู้รัก World End ทั้ง 5 คน</div>
        </div>
        <div className="st-grid">
          {[
            { name: "FAN CLUB 1", role: "PROJECT LEAD", desc: "ควบคุมดูแลโปรเจกต์ทั้งหมด" },
            { name: "FAN CLUB 2", role: "WEB DEVELOPER", desc: "พัฒนาเว็บไซต์และระบบ" },
            { name: "FAN CLUB 3", role: "GRAPHIC DESIGNER", desc: "ออกแบบกราฟิกและ Visual" },
            { name: "FAN CLUB 4", role: "CONTENT WRITER", desc: "เขียนเนื้อหาและ Lore" },
            { name: "FAN CLUB 5", role: "VIDEO EDITOR", desc: "ตัดต่อวิดีโอและ MV" },
          ].map((m, i) => (
            <div className="st-card" key={i} style={{ "--delay": `${i * 0.1}s` }}>
              <div className="st-num">0{i + 1}</div>
              <div className="st-name">{m.name}</div>
              <div className="st-role">{m.role}</div>
              <div className="st-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

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
