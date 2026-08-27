from pathlib import Path

root = Path(__file__).resolve().parent
site = root / "site"

mappings = {
    "Systems": "product_listing.html",
    "Hardware": "technical_specifications.html",
    "Custom": "custom_projects.html",
    "Portfolio": "deals_offers.html",
    "Technical": "technical_specifications.html",
    "AURUM GATES": "home_page.html",
    "View All": "product_listing.html",
    "Schedule Now": "consultation_request.html",
    "Consultation": "consultation_request.html",
    "About Us": "home_page.html",
    "Manufacturing": "custom_projects.html",
    "Partners": "custom_projects.html",
    "Systems Catalog": "product_listing.html",
    "Custom Projects": "custom_projects.html",
    "Technical Guides": "technical_specifications.html",
    "Maintenance": "technical_specifications.html",
    "Warranty": "technical_specifications.html",
    "Shipping": "shopping_cart.html",
    "Privacy Policy": "home_page.html",
    "Terms of Service": "home_page.html",
    "Case Studies": "deals_offers.html",
    "Maintenance Portal": "technical_specifications.html",
    "Warranty Registry": "technical_specifications.html",
    "Dealer Portal": "product_detail.html",
    "Safety Standards": "technical_specifications.html",
}

for path in sorted(site.glob("*.html")):
    text = path.read_text(encoding="utf-8")
    original = text
    for label, target in mappings.items():
        needle = f"href=\"#\">{label}</a>"
        replacement = f"href=\"{target}\">{label}</a>"
        text = text.replace(needle, replacement)
        needle2 = f"href=\"#\">{label}</span>"
        replacement2 = f"href=\"{target}\">{label}</span>"
        text = text.replace(needle2, replacement2)
        needle3 = f"href=\"#\">{label} <span"
        replacement3 = f"href=\"{target}\">{label} <span"
        text = text.replace(needle3, replacement3)
    text = text.replace('href="{{DATA:SCREEN:SCREEN_7}}"', 'href="home_page.html"')
    text = text.replace('href="{{DATA:SCREEN:SCREEN_8}}"', 'href="home_page.html"')
    text = text.replace('href="#" class="font-display-hero text-headline-sm tracking-tighter text-primary"', 'href="home_page.html" class="font-display-hero text-headline-sm tracking-tighter text-primary"')
    text = text.replace('href="#" class="font-display-hero text-headline-sm tracking-tighter text-primary">AURUM GATES</a>', 'href="home_page.html" class="font-display-hero text-headline-sm tracking-tighter text-primary">AURUM GATES</a>')
    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"Updated {path.name}")
