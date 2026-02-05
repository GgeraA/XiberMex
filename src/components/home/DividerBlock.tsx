const DividerBlock = () => (
  <div className="relative h-40 overflow-hidden">

    {/* Fade principal */}
    <div className="
      absolute inset-0
      bg-gradient-to-b
      from-transparent
      via-[#4DD0E1]/20
      to-[#1C1B3E]
    " />

    {/* Línea energética estilo TRON */}
    <div className="
      absolute top-1/2 left-1/2
      w-[60%] h-px
      -translate-x-1/2 -translate-y-1/2
      bg-gradient-to-r
      from-transparent
      via-[#4DD0E1]
      to-transparent
      blur-sm
      opacity-70
    " />
  </div>
);

export default DividerBlock;
