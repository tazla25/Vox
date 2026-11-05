import os
import subprocess
import json

CHAPTERS = {
    "ch1": (
        "Imagine waking up on a regular Monday morning, opening your front door, and suddenly noticing bright pink numbers glowing over everyone's heads. "
        "At first, you think you are just hallucinating from lack of sleep, but as you walk down the sidewalk toward school, three impossible rules quickly become crystal clear. "
        "Rule number one: every human being now displays a live percentage from zero to one hundred, showing exactly how much romantic interest they feel toward the person they are looking at. "
        "Rule number two: the meter updates instantly based on involuntary neurological chemistry, reacting to pupil dilation, subconscious vocal shifts, and sudden spikes of dopamine that nobody can fake. "
        "And rule number three: if two people ever reach ninety-five percent or higher, a glowing neon-pink thread physically manifests between their chests, locking them into an unmistakable connection. "
        "When you push through the double doors into the crowded school hallway, the numbers are completely overwhelming. "
        "You turn to your best friend Mo, and right above his curly hair sits a bright blue zero percent with the subtitle Pure Bro Zone. "
        "You glance over at Maya, the most popular girl in your grade, and her meter sits at a predictable three percent. "
        "But then you spot two notoriously shy classmates standing near the slate lockers, secretly staring across the corridor with matching eighty-six percent meters glowing above their heads, totally oblivious that the other person feels the exact same way."
    ),
    "ch2": (
        "Second period arrives, and you find yourself sitting directly across from Maya at the wooden lab tables in science class. "
        "For three years, you have wondered what she thought of you, and right now her floating pink meter sits at a humble fourteen percent. "
        "Naturally, you try to do what every nervous teenager does: you puff out your chest, lean back against your chair, and casually try to brag about your weekend. "
        "But the moment you start acting like an arrogant know-it-all, you watch in horror as Maya's percentage instantly plunges from fourteen down to six percent. "
        "Panicking at lunch in the cafeteria, you accidentally knock your metal fork off the table, fumble trying to catch it mid-air, and end up laughing at your own ridiculous clumsy mistake. "
        "Maya glances over, giggles at your genuine reaction, and her pink meter suddenly skyrockets from six all the way up to thirty-eight percent. "
        "Before you can even celebrate, you notice your friend Mo staring miserably at his phone. "
        "You look across the cafeteria and spot a girl at the corner table watching Mo with a massive seventy-four percent meter pulsing over her hair. "
        "You nudge Mo, tell him exactly what to say, and watch his jaw drop as her score climbs with every word."
    ),
    "ch3": (
        "Watching these floating numbers bounce around the cafeteria reveals three profound psychological truths about human attraction that scientists have documented for decades. "
        "The first breakthrough is called the Pratfall Effect, proven in nineteen sixty-six by social psychologist Elliot Aronson. "
        "His landmark experiments showed that highly competent people who make a small clumsy mistake, like spilling a drop of coffee, are perceived as significantly more likable and attractive than people who try to project robotic perfection. "
        "Your clumsy fork fumble did not ruin your chances; it proved you were relatable. "
        "The second discovery is known as the Liking Gap, published in twenty-eighteen by researchers at Harvard and Cornell. "
        "Studies proved that after meeting someone new, people consistently underestimate how much the other person actually enjoyed their conversation by an average of twenty percent. "
        "Our internal social anxiety convinces us that we were awkward, even when the other person walked away thinking we were wonderful. "
        "The third mechanism is Reciprocal Liking. "
        "Decades of behavioral research prove that one of the strongest predictors of whether someone likes you is simply learning that you already like them. "
        "Finding out someone finds you interesting releases internal inhibition, making your own subconscious warmth surge in return."
    ),
    "ch4": (
        "By the time the final bell rings and students flood out toward the parking lot, you feel like you have finally unlocked the secret code to teenage social dynamics. "
        "But as you step back into the empty stairwell to grab your backpack from your locker, your chest suddenly lights up with intense warmth. "
        "You look down, and your heart nearly stops. "
        "Stretching straight out from the center of your chest is a blazing, shimmering neon-pink thread, humming with electric light in the dim staircase. "
        "Remember the third rule: this luminous thread only activates when someone's crush score reaches an unbelievable ninety-five percent or higher. "
        "You frantically look around the hallway, but nobody is there. "
        "The glowing thread angles sharply upward, winding through the iron banister and leading straight up the concrete steps toward the roof access door. "
        "Your pulse pounds in your ears. "
        "Who could possibly have a ninety-nine percent score on you? "
        "Could Maya have experienced a massive delayed spike? "
        "Or did someone you barely know carry a secret that deep? "
        "Desperate for answers, you sprint up the stairs two steps at a time, following the neon filament into the dusk."
    ),
    "ch5": (
        "You push open the heavy metal rooftop door and step out into the crisp evening air, where the low golden sun is setting across the city skyline. "
        "The pink thread stretches straight across the gravel roof, leading directly to the edge of the parapet. "
        "Standing there with her hands in her pockets is the quiet girl from your homeroom class. "
        "She is the girl who always sat in the back row, wore oversized teal hoodies, and constantly looked down at her shoes whenever you walked past her desk. "
        "For months, you assumed she found you annoying or disliked you because she never said a single word. "
        "But floating directly above her head is a massive, pulsing pink heart displaying a score of ninety-nine percent. "
        "In that quiet sunset moment, you realize the greatest irony of all: The Shyness Paradox. "
        "She was never ignoring you out of cold indifference; she was looking away because her feelings were so overwhelmingly intense that she could barely breathe whenever you were near. "
        "You take a deep breath, walk across the gravel, and gently say, 'Hey.' "
        "Her cheeks turn bright crimson, she looks up into your eyes, and with a soft chime and a brilliant golden sparkle, her meter clicks to one hundred percent before slowly dissolving into the sunset. "
        "If you woke up tomorrow with this power, what percentage would you be most afraid to see? "
        "Tell us in the comments below."
    )
}

os.makedirs("audio", exist_ok=True)
os.makedirs("what-if-studio/public/crush", exist_ok=True)

meta = {}

for ch_id, text in CHAPTERS.items():
    raw_mp3 = f"audio/{ch_id}_voice.mp3"
    print(f"Generating TTS for {ch_id}...")
    subprocess.run([
        "edge-tts",
        "--voice", "en-US-ChristopherNeural",
        "--rate", "+4%",
        "--text", text,
        "--write-media", raw_mp3
    ], check=True)
    
    # Measure duration
    dur_cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", raw_mp3
    ]
    dur_str = subprocess.check_output(dur_cmd).decode().strip()
    duration = float(dur_str)
    frames = int(round(duration * 30))
    print(f"{ch_id}: {duration:.2f}s ({frames} frames)")
    
    # Mix with subtle background ambience and sfx
    out_mp3 = f"what-if-studio/public/crush/{ch_id}_audio.mp3"
    
    # We mix voice with subtle bed
    music_bed = "what-if-studio/library/sfx/room_tone-e711a45f.mp3"
    mix_cmd = [
        "ffmpeg", "-y",
        "-i", raw_mp3,
        "-stream_loop", "-1", "-i", music_bed,
        "-filter_complex",
        f"[0:a]volume=1.0[v];[1:a]volume=0.08[b];[v][b]amix=inputs=2:duration=first:dropout_transition=2[out]",
        "-map", "[out]",
        "-c:a", "libmp3lame", "-b:a", "192k",
        out_mp3
    ]
    subprocess.run(mix_cmd, check=True)
    
    meta[ch_id] = {
        "duration": duration,
        "frames": frames,
        "file": f"/crush/{ch_id}_audio.mp3"
    }

with open("what-if-studio/public/crush/meta.json", "w") as f:
    json.dump(meta, f, indent=2)

print("Audio generation and mixing complete!")
print(json.dumps(meta, indent=2))
