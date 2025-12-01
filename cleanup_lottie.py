import os
import shutil

used_files = [
    "Physics simulation.json",
    "Bio Lab.json",
    "Cute astronaut operating laptop.json",
    "hard science.json",
    "Education.json",
    "Man looking through binoculars.json",
    "A girl planted tree.json",
    "Map-map.json",
    "Airplane Lottie Animation.json",
    "Contact Us Character Animation.json",
    "Science letters artwork.json",
    "Scientist (1).json",
    "People in autumn scene.json",
    "Technology.json",
    "Discovery.json",
    "Atom loading animation.json",
    "Creative experiment animation.json",
    "Car driving on road.json",
    "Service Area.json",
    "Namaste_India.json.json",
    "Welcome.json"
]

source_dir = "public/assets/lottie"
dest_dir = "temp"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

if not os.path.exists(source_dir):
    print(f"Source directory {source_dir} does not exist.")
    exit(1)

for filename in os.listdir(source_dir):
    if filename not in used_files:
        src_path = os.path.join(source_dir, filename)
        dst_path = os.path.join(dest_dir, filename)
        if os.path.isfile(src_path):
            shutil.move(src_path, dst_path)
            print(f"Moved: {filename}")
