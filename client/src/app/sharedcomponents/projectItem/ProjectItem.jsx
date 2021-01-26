import React from 'react';
import Button from '../button/Button';
import ProjectPreviewImage from './projectPreviewImage/ProjectPreviewImage';

function ProjectItem({
  gradient,
  title,
  description,
  type,
  previewImages,
  coverImage,
}) {
  return (
    <div className="relative z-10">
      <div
        className="md:h-auto"
        style={{ background: `${gradient}` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative -top-12">
            <img src={coverImage} alt="Product preview on a phone screen" />
          </div>

          <div className="py-0 pb-6 px-6 md:px-0 md:py-16 text-center md:text-right md:pr-16 max-w-2xl">
            <h4 className="font-headers font-bold text-5xl">{title}</h4>
            <i className="font-headers font-medium text-sm">{type}</i>
            <p className="font-headers mt-4 text-lg">{description}</p>

            <Button text="View Project" />

            <div className="grid grid-cols-3 gap-4 mt-8">
              {previewImages.map((image) => (
                <ProjectPreviewImage url={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
