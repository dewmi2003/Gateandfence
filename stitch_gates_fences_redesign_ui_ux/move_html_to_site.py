from pathlib import Path

root = Path(__file__).resolve().parent
site = root / "site"
site.mkdir(exist_ok=True)

for d in sorted(root.iterdir()):
    if d.is_dir() and d.name != "site":
        src = d / "code.html"
        if src.exists():
            dest = site / (d.name.replace("_high_fidelity", "") + ".html")
            if dest.exists():
                dest.unlink()
            src.replace(dest)
            print(f"moved {src} -> {dest}")

for d in sorted(root.iterdir(), key=lambda p: p.name, reverse=True):
    if d.is_dir() and d.name != "site":
        try:
            d.rmdir()
            print(f"removed folder {d.name}")
        except Exception as e:
            print(f"kept folder {d.name}: {e}")
