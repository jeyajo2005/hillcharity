import http.server
import socketserver
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class SPAHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Clean path from query parameters
        clean_path = self.path.split('?')[0].split('#')[0]
        full_path = self.translate_path(clean_path)

        # If file or folder exists, serve normally
        if os.path.exists(full_path):
            return super().do_GET()

        # If it's an API, asset or static file with extension that doesn't exist, return 404
        if '.' in os.path.basename(clean_path):
            return super().do_GET()

        # Otherwise, serve index.html for Single Page Application client-side routing
        self.path = '/index.html'
        return super().do_GET()

def main():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SPAHTTPRequestHandler) as httpd:
        print(f"[Hill Charity] SPA Server running at http://localhost:{PORT}")
        print(f"[Hill Charity] Serving directory: {DIRECTORY}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    main()
