from django.contrib import admin
from . models import Todo

# todo registration
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'is_completed', )
admin.site.register(Todo, TodoAdmin)
