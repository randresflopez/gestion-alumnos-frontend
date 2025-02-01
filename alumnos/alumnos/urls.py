from django.urls import path
from . import views

urlpatterns = [
    path('crear-alumno/', views.CrearAlumno.as_view()),
    path('consultar-alumno/<str:idGrado>/', views.ConsultarAlumno.as_view()),
]