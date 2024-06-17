from django.urls import path
from . import views


urlpatterns = [
    path('register/', views.Register, name="notes"),
    path('login/', views.Login, name="note"),
    path('logout', views.Logout, name="create"),
]