#!C:\Users\zx21student035\AppData\Local\Microsoft\WindowsApps\python

import json

#recuperar datos de base de datos
#hacer consulta
#hacer array con resultado de la consulta


datos = [
    {
        "EquipLocal":"equip1",
        "EquipVisitante":"equip2",
        "GolesLocal":0,
        "GolesVisitante":1,
    },
    {
        "EquipLocal":"equip3",
        "EquipVisitante":"equip4",
        "GolesLocal":2,
        "GolesVisitante":4,
    }
]

#convertir array en objeto json
salida = json.dumps(datos)

#enviar respuesta
print("Content-Type: text/plain\n")
print(salida)

