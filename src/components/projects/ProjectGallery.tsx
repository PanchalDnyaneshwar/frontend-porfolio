interface ProjectGalleryProps {
  title: string;
  images: string[];
}

function ProjectGallery({ title, images }: ProjectGalleryProps) {
  if (!images.length) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-white">Project Gallery</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
          >
            <img
              src={image}
              alt={`${title}-${index + 1}`}
              className="h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;