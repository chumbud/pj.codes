@ECHO off

cd /d S:\Users\PJ\Documents\GitHub\pjrosa.com-2017
:choice
set /P c=Do you wanna execute bundle update[Y/N]?
if /I "%c%" EQU "Y" goto :somewhere
if /I "%c%" EQU "N" goto :somewhere_else
goto :choice

:somewhere
	bundle update & START /B "" http://DESKTOP-AU5MUEH.local:4567 & middleman serve
	pause

:somewhere_else
	START /B "" http://DESKTOP-AU5MUEH.local:4567 & middleman serve
	pause


goto:eof