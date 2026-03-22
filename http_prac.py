# Handles HTTP requests like serving web pages.
import http.server

# Create and manages network connections.
import socketserver

# The server listens on a port and sends data in plain text.
# Anyone on the same network can "sniff" this traffic.

# The port number where the server will listen for HTTP requests
# on. It can be any number. 8000 is just the common default for
# testing.
PORT = 8000

# Defining how requests are handled.
Handler = http.server.SimpleHTTPRequestHandler

# Create the server.

# "" means that the server listens on all available network connections.
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    # Print a message so it is known that the server is running.
    print(f"Serving HTTP on port {PORT}...")

    # Keep the server listening for requests until it is manually
    # stopped.
    httpd.serve_forever()

# The vulnerability is if you run this and navigate to
# http://localhost:8000, any data you send (like a login
# form) travels as plain text. If you were on a public Wi-Fi,
# a hacker using a tool like Wireshark could see the data
# packets clearly.

# Even a Wi-Fi network that requires a password can be considered
# public if it's being used by multiple customers sitting in a cafe.

# Open the http://localhost:8000 link in a web browser and right click
# anywhere, click on the "Network" tab and reload the web page to see
# that an HTTP GET request was successfully processed and returned a
# status code of 200.