import http.server

port = 8080

# Create a server instance
server_address = ('', port)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)

# Start the server
print(f"Server running on port {port}")
httpd.serve_forever()
