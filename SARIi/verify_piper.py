url: https://raw.githubusercontent.com/mrdannyclark82/SARIi/0fae98d4313763a00b43dc01af24b30a99922484/verify_piper.py

import main
import sys

print("Testing Piper TTS...")
try:
    text = "This is a verification test for Piper Text to Speech."
    print(f"Invoking speak_piper with: '{text}'")
    main.speak_piper(text)
    print("Execution complete.")
except Exception as e:
    print(f"Error: {e}")
