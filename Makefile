.PHONY: dev-client dev-server dev-all prod-client prod-server prod-all build-all start-ngrok

# Development mode for client
dev-client:
	nx run client:serve:development

# Development mode for server
dev-server:
	nx run server:serve:development

# Run development mode for both client and server
dev-all:
	nx run-many --target=serve:development --all=true

# Production mode for client
prod-client:
	nx run client:serve:production

# Production mode for server
prod-server:
	nx run server:serve:production

# Run production mode for both client and server
prod-all:
	nx run-many --target=serve:production --all=true 

# Build both client and server for production
build-all:
	nx run-many --target=build --all=true 

# Start Ngrok tunnel for client on port 4200
start-ngrok:
	ngrok http --domain=squid-huge-deadly.ngrok-free.app 4200
