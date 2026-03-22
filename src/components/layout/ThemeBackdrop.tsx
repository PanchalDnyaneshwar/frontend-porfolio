function ThemeBackdrop() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[#081120]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.05),transparent_22%),radial-gradient(circle_at_top_right,rgba(129,140,248,0.05),transparent_20%)]" />
    </>
  );
}

export default ThemeBackdrop;