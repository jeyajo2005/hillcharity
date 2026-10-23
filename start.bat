@echo off
title Hill Charity Local Server
echo Starting Hill Charity website...
echo Opening browser at http://localhost:3000 ...
start http://localhost:3000
python scripts\server.py
pause
