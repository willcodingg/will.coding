import Typewriter from "typewriter-effect";

export default function TypingEffectTitle() {
  return (
    <div className="text-dark dark:text-white">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .changeDelay(70)
            .typeString("Working to build")
            .typeString(" <span style='color: #3748CD'>top-notch<span> ")
            .typeString("software, using programming")
            .typeString(" <span style='color: #3748CD'>best practices.<span>")
            .start();
        }}
      />
    </div>
  );
}
