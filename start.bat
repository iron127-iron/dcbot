@echo off
cd /d %~dp0

echo =====================
echo Installing deps...
echo =====================

npm install

echo =====================
echo Starting Dev Server
echo =====================

npm run dev
