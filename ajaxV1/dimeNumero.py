#!C:\Users\zx21student035\AppData\Local\Microsoft\WindowsApps\python

import cgi

args = cgi.parse()

n = int(args['num'][0])

print("Content-Type: text/plain\n")
print("hola...",n*2)