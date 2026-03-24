interface MapCardProps {
  mapUrl?: string;
}

function MapCard({ mapUrl }: MapCardProps) {
  if (!mapUrl) return null;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/45 shadow-soft">
      <div className="border-b border-slate-800 px-6 py-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
          Location
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">Map</h3>
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
