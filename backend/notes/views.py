from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.
# =====Get All Notes
@api_view(['GET'])
def get_notes(request, user_id):
    try:
        notes = Note.objects.filter(user_id=user_id)
        if not notes:
           return Response("You don't have any notes", status=404)
        
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    
    except Exception:
        return Response("Somthing went wrong!", status=500)
    

# ===== Get One Note
@api_view(['GET'])
def get_note(request,user_id, pk):
    try:
        note = Note.objects.get(user_id=user_id, id=pk)
        if not note:
            return Response("This not does not exist", status=404)
        
        serializer = NoteSerializer(note)
        return Response(serializer.data)

    except Exception:
        return Response("Somthing went wrong!", status=500)


# ===== Create Notes Endpoints
@api_view(['POST'])
def create_note(request):
    try:
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        
        return Response(serializer.error, status=400)
    
    except Exception:
        return Response("Something went wrong!", status=500)
    
# ===== Edit note Endpoint
@api_view(['PUT'])
def update_note(request, user_id, pk):
    try:
        note = Note.objects.put(user_id=user_id, id=pk)
        if note.user_id != user_id:
            return Response("You can only update your notes", status=403)
        
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        
        return Response(serializer.errors, status=400)
    
    except Exception:
        return Response("Something went wrong!", status=500)


 # ===== Delete note endpoint   
@api_view(['DELETE'])
def delete_note(request, user_id, pk):
    try:
        note = Note.objects.get(user_id=user_id, pk=pk)
        if note.user_id != user_id:
            return Response("You can only delete your notes", status=403)
        
        note.delete()
        return Response("Note deleted successfully", status=204)
    
    except Note.DoesNotExist:
        return Response("Note does not exist", status=404)
    
    except Exception as err:
        return Response(str(err), status=500)