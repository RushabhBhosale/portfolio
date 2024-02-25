import Image from "next/image"

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image 
      src={imgSrc}
      fill
      style={{top: '21px', left: '-3.5px'}}
      priority
      className="object-contain scale-150"
      alt="Rushabh"
      />
    </div>
  )
}

export default DevImg