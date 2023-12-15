function MainImage({ imageSrc, altText, heading, subheading }) {
  return (
    <div className='main-img'>
      <div className='image-container'>
        <img src={imageSrc} alt={altText} className='smaller-img' />
        <div className='image-text display-1'>
          {heading && <span>{heading}</span>}
          <br />
          {subheading && <span>{subheading}</span>}
        </div>
      </div>
    </div>
  );
}

export default MainImage;
