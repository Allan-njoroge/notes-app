from django.urls import path
from . import views


urlpatterns = [
    path('notes/<str:user_id>/', views.get_notes, name="notes"),
    path('note/<str:pk/', views.get_note, name="note"),
    path('create/', views.create_note, name="create"),
    path('update/<str:pk>/', views.update_note, name="update"),
    path('delete/<str:pk>/', views.delete_note, name="delete"),
]