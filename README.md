Bot Alex

A simple Python chatbot that responds to keywords with random pre-written replies.

Description

Bot Alex is a small console-based chatbot written in Python. It simulates a startup sequence, then enters a chat loop where the user types messages and the bot replies based on keywords found in those messages.

The bot uses a dictionary of keyword → list of responses, and picks a random reply each time a keyword is matched. If no keyword is found, it returns a fallback message. The bot has a slightly eerie / playful personality (inspired by a certain "just Monika" vibe), which makes it fun for demos, learning, or a beginner Python project.

It is intended as:

· A learning project for Python beginners
· A template for building more advanced chatbots
· A fun little script to show friends

Screenshots

https://via.placeholder.com/800x400/111827/22c55e?text=Bot+Alex+%7C+Console+Chat

Example console output when chatting with Bot Alex.

Getting Started

Dependencies

Before running this bot, you need:

· Python 3.6+ (any modern version works)
· Operating system: Windows 10/11, macOS 12+, or Linux
· No external libraries required — only Python's built-in time and random modules
· A terminal / command prompt to run the script

Installing

1. Download or clone the project:
   ```bash
   git clone https://github.com/quietbyte23/bot-alex.git
   cd bot-alex
   ```
   Or simply download bot Alex.py directly from the repository.
2. Make sure the file is named exactly (or rename it to avoid the space):
   ```
   bot_alex.py
   ```
   Note: File names with spaces can cause issues in some terminals. Renaming to bot_alex.py is recommended.
3. No additional files or folders are required.
