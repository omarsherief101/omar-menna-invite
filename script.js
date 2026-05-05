gsap.registerPlugin(MotionPathPlugin);

const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const ticket = document.getElementById("ticket");
const sound = document.getElementById("openSound");

openBtn.onclick = () => {

  // Sound
  sound.play();

  // Envelope open effect
  gsap.to(".flap", {
    rotateX: 120,
    duration: 0.8
  });

  gsap.to(envelope, {
    y: -50,
    opacity: 0,
    delay: 0.6,
    duration: 0.8,
    onComplete: () => {

      envelope.style.display = "none";
      ticket.style.display = "block";

      // Ticket entrance
      gsap.from(ticket, { opacity: 0, y: 60, duration: 1 });

      // Fade in content
      gsap.to(".fade", {
        opacity: 1,
        stagger: 0.4,
        delay: 0.5
      });

      // Bus animation
      gsap.to("#bus", {
        duration: 3,
        ease: "power1.inOut",
        motionPath: {
          path: "#path",
          align: "#path"
        }
      });

      // Story lines
      gsap.to(".line", {
        opacity: 1,
        y: -10,
        stagger: 1,
        delay: 1.5
      });

      // Confetti
      setTimeout(createConfetti, 3500);
    }
  });
};

function createConfetti() {
  for (let i = 0; i < 40; i++) {
    const div = document.createElement("div");
    div.classList.add("confetti");
    div.style.left = Math.random() * 100 + "vw";
    div.style.animationDuration = (2 + Math.random() * 2) + "s";
    document.body.appendChild(div);
  }
}