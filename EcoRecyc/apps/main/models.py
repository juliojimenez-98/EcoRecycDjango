from django.db import models

# Create your models here.
class usuario(models.Model):
    nombre = models.CharField()
    apellido = models.CharField()
    fechaNacimiento = models.DateField()
    correo = models.CharField()
    telefono = models.IntegerField()
    clave = models.CharField()
    puntos = models.IntegerField()

class misiones(models.Model):
    descripcion = models.CharField()
    puntaje = models.IntegerField

class registro(models.Model):
    fechaMision = models.DateField()
    realizada  = models.IntegerField()

class puntosLimpios(models.Model):
    direccion = models.CharField()
    nombre = models.CharField()
    foto = models.ImageField()
    descripcion = models.CharField()

class premios(models.Model):
    costo = models.IntegerField()
    descripcion = models.CharField()
    imagen = models.ImageField()

class usuarioPremio(models.Model):
    fechaObtencion = models.DateTimeField() 