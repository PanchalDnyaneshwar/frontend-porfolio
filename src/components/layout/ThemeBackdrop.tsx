function ThemeBackdrop() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-30 bg-[linear-gradient(180deg,#fcfaf6_0%,#f6f0e7_52%,#f2ece3_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.07),transparent_24%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.06),transparent_22%),radial-gradient(circle_at_bottom_center,rgba(217,119,6,0.06),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
    </>
  );
}

export default ThemeBackdrop;
