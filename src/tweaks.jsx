const { useState: useStateTw, useEffect: useEffectTw } = React;

function Tweaks({ state, setState }) {
  const [open, setOpen] = useStateTw(false);

  useEffectTw(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  const set = (patch) => {
    setState((s) => ({ ...s, ...patch }));
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
  };

  if (!open) return null;

  const Opt = ({ k, val, opts }) => (
    <div className="grp">
      <label>{k}</label>
      <div className="opts">
        {opts.map((o) => (
          <button
            key={o.v}
            className={state[val] === o.v ? "on" : ""}
            onClick={() => set({ [val]: o.v })}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="tweaks">
      <div className="hd">
        <span>TWEAKS</span>
        <span className="live">● LIVE</span>
      </div>
      <div className="body">
        <Opt
          k="HERO LAYOUT"
          val="heroLayout"
          opts={[
            { v: "a", label: "A · Stack" },
            { v: "b", label: "B · Fall" },
            { v: "c", label: "C · Six" },
          ]}
        />
        <Opt
          k="PARTICLE DENSITY"
          val="density"
          opts={[
            { v: "calm", label: "Calm" },
            { v: "dense", label: "Dense" },
          ]}
        />
        <div className="row">
          <span>PARTICLES</span>
          <div
            className={"switch " + (state.particles ? "on" : "")}
            onClick={() => set({ particles: !state.particles })}
          />
        </div>
        <div className="row">
          <span>CUSTOM CURSOR</span>
          <div
            className={"switch " + (state.cursor ? "on" : "")}
            onClick={() => set({ cursor: !state.cursor })}
          />
        </div>
        <Opt
          k="ACCENT"
          val="accent"
          opts={[
            { v: "blood", label: "Blood" },
            { v: "cream", label: "Cream" },
            { v: "neon", label: "Neon" },
          ]}
        />
      </div>
    </div>
  );
}

window.Tweaks = Tweaks;
