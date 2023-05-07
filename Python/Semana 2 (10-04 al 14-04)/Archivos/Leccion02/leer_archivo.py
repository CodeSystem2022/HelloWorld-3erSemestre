
archivo = open("prueba.txt", "r", encoding="utf8")
# print(archivo.read())
# print(archivo.read(16))
# print(archivo.read(16)) # Continuamos desde la linea anterior
print(archivo.readline())
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print('Se ha terminado el proceso de leer y copiar archivos')
