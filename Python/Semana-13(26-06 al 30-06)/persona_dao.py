import conecxion
from Persona import Persona
from logger_base import log

from cursor_del_pool import CursorDelPool


class PersonaDAO:
    """
    DAO significa: Data Access Objects
    CRUD significa:
    create-> insertar
    read-> sleccionar
    update-> actualizar
    delete-> eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'



    #definimos los metodos
    @classmethod
    def seleccionar(cls, registro=None):
        with CursorDelPool() as cursor:
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            personas = []
            for registros in registros:
                persona = Persona(registro[0], registro[1], registro[2], registro[3])
                personas.append(persona)
    @classmethod
    def insertar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f"persona insertada: {persona}")
            return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with CursorDelPool() as cursor
            valores = (persona.nombre, persona.apellido,persona.email,persona.id_persona)
            cursor.execute(cls._ACTUALIZAR,valores)
            log.debug(f'Persona actualizada: {persona}')
            return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with CursorDelPool() as cursor
            valores = (persona.id_persona,)
            cursor.execute(cls._ELIMINAR,valores)
            log.debug(f'los objetos eliminados son: {persona}')
            return cursor.rowcount


    @classmethod
    def liberarconexion(cls,conecxion):
        cls.obtenerPool().putconn(conecxion)
        log.debug(f'Regresamos la conexion de pool: {conecxion}')

    @classmethod
    def cerrarconexiones(cls):
        cls.obtenerPool().closeall()




if __name__ == '__main__':
   Conecxion

   #eliminar un registro
   persona1= Persona(id_persona= 18)
   personas_eliminadas = PersonaDAO.eliminar(persona1)
   log.debug(f'Personas eliminadas son: {personas_eliminadas}')




    #actualizar
    persona1 = Persona(1, 'Juan', 'Pena', 'jpena@gmail.com')
    persona_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f'personas actualizadas: {persona_actualizadas}')


    #insertar una persona
    persona1 = Persona(nombre='Mateo',apellido='Torres', email='temateo@gmail.com')
    personas_insertadas = PersonaDAO.insertar(persona1)
    log.debug(f'personas insertadas: {personas_insertadas}')
    personas= PersonaDAO.seleccionar()
    for personas in personas:
        log.debug(persona)










