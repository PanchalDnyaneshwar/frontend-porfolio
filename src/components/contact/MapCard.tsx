interface MapCardProps {
  mapUrl?: string;
}

function MapCard({ mapUrl }: MapCardProps) {
  if (!mapUrl) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-soft">
      <iframe
        src={mapUrl}
        title="Location Map"
        className="h-[300px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapCard;