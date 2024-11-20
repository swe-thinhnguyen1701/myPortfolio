import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);

function TypewriterAnimation() {
    useEffect(() => {
        const words = ["Charles Nguyen", "Full Stack Developer", "Creative, Diligent, and Dependable"];
        let mainTimeline = gsap.timeline({ repeat: -1 });

        words.forEach(word => {
            let textTimeline = gsap.timeline({
                repeat: 1,
                yoyo: true,
                repeatDelay: 4
            });

            textTimeline.to("#typewriter", {
                duration: 1,
                text: word,
                onUpdate: () => {
                    cursorTimeline.restart();
                    cursorTimeline.pause();
                },
                onComplete: () => {
                    cursorTimeline.play();
                }
            });
            mainTimeline.add(textTimeline);
        });

        let cursorTimeline = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.8
        });

        cursorTimeline.to("#cursor", {
            opacity: 1,
            duration: 0
        }).to("#cursor", {
            opacity: 0,
            duration: 0,
            delay: 0.8
        });

        return () => {
            mainTimeline.kill();
        };
    }, []);

    return (
        <>
            <span id="typewriter"></span>
            <span id="cursor"> |</span>
        </>
    )
}

export default TypewriterAnimation;