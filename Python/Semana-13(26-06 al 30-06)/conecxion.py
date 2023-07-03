import psycopg2 as bd
from logger_base import log
import sys


class conecxion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'admin'
    _DB_PORT = '54321'
    _HOST = '127.0.0.1'
    _conecxion = None
    _cursor = None


@classmethod
def obtenerconecxion(cls):
    if cls._conecxion is None:
        try:
            cls._conecxion = bd.connect(host=cls._HOST,
                                        user=cls._USERNAME,
                                        password=cls._PASSWORD,
                                        port=cls._DB_PORT,
                                        database=cls._DATABASE)
            log.debug(f"Conección exitosa: {cls._conecxion}")
            return cls._conecxion
        except Exception as e:
            log.error(f"ocurrió un error: {e}")
            sys.exit()
    else:
        return cls._conecxion


@classmethod
def obtenerCursor(cls):
    if cls._cursor is None:
        try:
            cls._cursor = cls.obtenerconexion().cursor()
            log.debug(f"Se abrió correctamente el cursor: {cls._cursor}")
            return cls._cursor
    except Exception as e:
    log.error(f"Ocurrió un error: {e}")
    sys.exit()

    else:
    return cls._cursor


@classmethod
def liberarconexion(cls, conecxion):
    cls.obtenerPool().putconn(conecxion)
    log.debug(f'Regresamos la conexion de pool: {conecxion}')


@classmethod
def cerrarconexiones(cls):
    cls.obtenerPool().closeall()



if __name__ == '__main__':
    conecxion1 = conecxion.obtenerconexion()
    conecxion.liberarconecxion(conecxion1)
    conecxion2 = conecxion.obtenerconexion()
    conecxion.liberarconecxion(conecxion2)
    conecxion3 = conecxion.obtenerconexion()
    conecxion.liberarconecxion(conecxion3)
    conecxion4 = conecxion.obtenerconexion()
    conecxion5 = conecxion.obtenerconexion()
    conecxion6 = conecxion.obtenerconexion()


