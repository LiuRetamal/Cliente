#!C:\Users\zx21student035\AppData\Local\Microsoft\WindowsApps\python

import json
import cgi

args = cgi.parse();

print("Content-Type: text/plain\n")

inicio = int(args['inicio'][0])
final = int(args['final'][0])

fibo = [0,1,1,2,3,5,8,13,21,34,55]


print(json.dumps(fibo[(inicio):(final)]))


