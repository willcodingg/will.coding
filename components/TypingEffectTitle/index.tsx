import Typewriter from "typewriter-effect";

export default function TypingEffectTitle() {
  return (
    <div className="text-dark h-20 lg:h-28 max-w-md dark:text-white">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .changeDelay(70)
            .typeString(
              "Studying to build top-notch software, using programming best practices."
            )
            .start();
        }}
      />
    </div>
  );
}
