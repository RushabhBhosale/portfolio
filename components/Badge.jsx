'use client'

const Badge = ({
  containerStyle,
  icon,
  badgeStyles,
  badgeText
}) => {
  return (
    <div className={`badge ${containerStyle}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex gap-x-2 font-semibold items-center">
        <div>{badgeText}</div>
      </div>
    </div>
  )
}

export default Badge