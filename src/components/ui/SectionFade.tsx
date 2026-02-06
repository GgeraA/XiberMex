const SectionFade = ({
  top = true,
  bottom = true,
}: {
  top?: boolean
  bottom?: boolean
}) => {
  return (
    <>
      {top && (
        <div className="
          pointer-events-none
          absolute top-0 inset-x-0 h-32
          bg-gradient-to-b
          from-black/50
          to-transparent
        " />
      )}

      {bottom && (
        <div className="
          pointer-events-none
          absolute bottom-0 inset-x-0 h-32
          bg-gradient-to-t
          from-black/50
          to-transparent
        " />
      )}
    </>
  )
}

export default SectionFade
