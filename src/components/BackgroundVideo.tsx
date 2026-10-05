export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-80"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[2px]" />
    </div>
  );
}
