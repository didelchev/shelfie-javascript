#!/bin/bash

# Start server
gnome-terminal -- bash -c "cd server && npm run dev; exec bash"

# Start client
gnome-terminal -- bash -c "cd client && npm start; exec bash"

