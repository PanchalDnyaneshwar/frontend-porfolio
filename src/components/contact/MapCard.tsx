interface MapCardProps {
  mapUrl?: string;
}

function MapCard({ mapUrl }: MapCardProps) {
  if (!mapUrl) return null;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#fcfaf6] shadow-soft">
      <div className="border-b border-neutral-200 px-6 py-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
          Location
        </p>
        <h3 className="mt-2 text-xl font-semibold text-zinc-900">Map</h3>
      </div>
      <iframe
        src={mapUrl}
        title="Location Map"
        className="h-[280px] w-full border-0 sm:h-[320px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapCard;





