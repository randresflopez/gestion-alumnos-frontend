from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Alumno
from .serializers import AlumnoSerializer

class CrearAlumno(generics.CreateAPIView):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer
    permission_classes = [permissions.IsAuthenticated]  # Requiere autenticación

class ConsultarAlumno(generics.ListAPIView):
    serializer_class = AlumnoSerializer
    permission_classes = [permissions.IsAuthenticated]  # Requiere autenticación

    def get_queryset(self):
        grado = self.kwargs['idGrado']
        return Alumno.objects.filter(grado=grado)
