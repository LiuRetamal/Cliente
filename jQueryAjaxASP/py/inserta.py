#!C:\Users\zx21student035\AppData\Local\Microsoft\WindowsApps\python

import cgi
import mysql.connector

form = cgi.FieldStorage()
el = form['EquipLocal'].value
ev = form['EquipVisitante'].value
gl = int(form['GolesLocal'].value)
gv = int(form['GolesVisitante'].value)

#conectar base de datos
mydb = mysql.connector.connect(
  host='localhost',
  user='campeonatoFutbol',
  password='campeonatoFutbol',
  database='campeonatoFutbol'
)
#Insertar en base de datos
mycursor = mydb.cursor()
sql='INSERT INTO resultados (EquipLocal, EquipVisitante, GolesLocal, GolesVisitante) VALUES (%s,%s,%s,%s)'
val = (el, ev, gl, gv)
mycursor.execute(sql, val)
mydb.commit()

print("Content-Type: text/plain\n")
print("Insercion correcta")