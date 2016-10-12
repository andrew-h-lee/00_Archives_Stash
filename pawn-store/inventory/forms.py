from django.forms import ModelForm
from inventory.models import item
class NewItemForm(ModelForm):
    class Meta:
        exclude = ['dateadded']
        model = Item
        
