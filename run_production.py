import os
import sys
import time
import shutil
import subprocess
import pathlib

STUDIO = pathlib.Path('/workspaces/Vox/what-if-studio')
RENDERS = pathlib.Path('/workspaces/Vox/renders')
SCRIPTS = pathlib.Path('/workspaces/Vox/.agents/skills/what-if-animation/scripts')

def log(msg):
    print(f"[{time.strftime('%H:%M:%S')}] {msg}", flush=True)

def wait_for_file(path, timeout=1800):
    p = pathlib.Path(path)
    t0 = time.time()
    while time.time() - t0 < timeout:
        if p.exists() and p.stat().st_size > 1000:
            # Check if file size is stable
            s1 = p.stat().st_size
            time.sleep(3)
            s2 = p.stat().st_size
            if s1 == s2:
                return True
        time.sleep(5)
    return False

def master_chapter(slug, dest_name):
    log(f"Mastering audio for {slug}...")
    env = os.environ.copy()
    env['PYTHONPATH'] = str(SCRIPTS)
    cmd = [sys.executable, str(SCRIPTS / 'master.py'), slug, '--skip-render']
    subprocess.run(cmd, cwd=STUDIO, env=env, check=True)
    
    final_src = STUDIO / 'out' / slug / f'{slug}-final.mp4'
    final_dest = RENDERS / dest_name
    shutil.copy2(final_src, final_dest)
    log(f"Saved: {final_dest} ({final_dest.stat().st_size / (1024*1024):.2f} MB)")

def render_and_master(slug, comp_id, dest_name):
    log(f"Starting Remotion render for {comp_id} ({slug})...")
    raw_path = STUDIO / 'out' / slug / f'{slug}-raw.mp4'
    npx = 'npx'
    cmd = [npx, 'remotion', 'render', 'src/index.ts', comp_id, str(raw_path), '--concurrency', '2', '--log', 'error']
    t0 = time.time()
    subprocess.run(cmd, cwd=STUDIO, check=True)
    log(f"Rendered {comp_id} raw in {time.time() - t0:.1f}s")
    
    master_chapter(slug, dest_name)

def main():
    log("=== WHAT IF: 5-CHAPTER YOUTUBE EPISODE PRODUCTION ===")
    
    # 1. Wait for Chapter 1 raw render to complete if it is currently in progress
    ch1_raw = STUDIO / 'out' / 'ch1' / 'ch1-raw.mp4'
    if not (RENDERS / 'chapter_1.mp4').exists():
        if not ch1_raw.exists() or ch1_raw.stat().st_size < 1000:
            log("Waiting for Chapter 1 render (task 185) to complete...")
            wait_for_file(ch1_raw, timeout=1200)
        master_chapter('ch1', 'chapter_1.mp4')
    else:
        log("chapter_1.mp4 already exists, skipping to Chapter 2.")

    # 2. Render Chapter 2
    if not (RENDERS / 'chapter_2.mp4').exists():
        render_and_master('ch2', 'Ch2', 'chapter_2.mp4')
    else:
        log("chapter_2.mp4 already exists, skipping to Chapter 3.")

    # 3. Render Chapter 3
    if not (RENDERS / 'chapter_3.mp4').exists():
        render_and_master('ch3', 'Ch3', 'chapter_3.mp4')
    else:
        log("chapter_3.mp4 already exists, skipping to Chapter 4.")

    # 4. Render Chapter 4
    if not (RENDERS / 'chapter_4.mp4').exists():
        render_and_master('ch4', 'Ch4', 'chapter_4.mp4')
    else:
        log("chapter_4.mp4 already exists, skipping to Chapter 5.")

    # 5. Render Chapter 5
    if not (RENDERS / 'chapter_5.mp4').exists():
        render_and_master('ch5', 'Ch5', 'chapter_5.mp4')
    else:
        log("chapter_5.mp4 already exists, skipping to Concat.")

    # 6. Seamless Concat into FULL_YOUTUBE_EPISODE.mp4
    log("All 5 chapters rendered! Concatenating into FULL_YOUTUBE_EPISODE.mp4...")
    concat_list = RENDERS / 'concat_list.txt'
    with open(concat_list, 'w') as f:
        for i in range(1, 6):
            f.write(f"file 'chapter_{i}.mp4'\n")
    
    full_output = RENDERS / 'FULL_YOUTUBE_EPISODE.mp4'
    cmd = ['ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', str(concat_list), '-c', 'copy', str(full_output)]
    subprocess.run(cmd, check=True)
    log(f"SUCCESS! FULL YOUTUBE EPISODE READY: {full_output} ({full_output.stat().st_size / (1024*1024):.2f} MB)")

if __name__ == '__main__':
    main()
