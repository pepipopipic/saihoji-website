/* 西方寺 — Tweaks（余白調整） */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "spacing": 1,
  "contentWidth": 1200
}/*EDITMODE-END*/;

function TweaksApp(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(function(){
    const r = document.documentElement;
    r.style.setProperty('--sx', String(t.spacing));
    r.style.setProperty('--wrap', t.contentWidth + 'px');
  }, [t.spacing, t.contentWidth]);
  return (
    <TweaksPanel title="余白の調整">
      <TweakSection label="レイアウト" />
      <TweakSlider label="余白の広さ" value={t.spacing} min={0.7} max={1.5} step={0.05}
                   onChange={(v)=>setTweak('spacing', v)} />
      <TweakSlider label="コンテンツ幅" value={t.contentWidth} min={1040} max={1360} step={20} unit="px"
                   onChange={(v)=>setTweak('contentWidth', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<TweaksApp/>);
