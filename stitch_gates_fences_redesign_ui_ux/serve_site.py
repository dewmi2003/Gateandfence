from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import argparse
import os


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the static site locally.")
    parser.add_argument("--port", type=int, default=8000, help="Port to serve on")
    args = parser.parse_args()

    site_dir = Path(__file__).resolve().parent / "site"
    if not site_dir.exists() or not site_dir.is_dir():
        raise SystemExit(f"Error: site directory not found at {site_dir}")

    os.chdir(site_dir)
    server = ThreadingHTTPServer(("0.0.0.0", args.port), SimpleHTTPRequestHandler)
    print(f"Serving {site_dir} at http://localhost:{args.port}/")
    print("Press Ctrl+C to stop.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("Server stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
