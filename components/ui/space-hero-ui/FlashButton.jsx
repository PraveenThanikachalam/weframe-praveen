export default function FlashButton() {
  return (
    <div className="animated-border-box translate-y-48 md:translate-y-48">
      <div className="flashlight" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <p className="text-white text-lg font-bold">Book a Meeting</p>
      </div>
    </div>
  );
}
