#MANEJO DE CONTEXTO WITH(MINIMIZA LAS LINEAS DE CODIGO)
#SINTAXIS SIMPLIFICADA
#with open('prueba.txt','r',encoding='utf8') as archivo:
   # print(archivo.read())
#METODO ENTER= abre el archivo
#METODO EXIT= cierra
from ManejoArchivos import ManejoArchivos

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())